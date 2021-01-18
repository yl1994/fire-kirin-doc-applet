// pages/exception-notification/exception-notification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exceptionPreData: [
      "<pre class=\"language-rb\"><code>gem <span class=\"token string\">'exception_notification'</span>\n</code></pre>",
      "<pre class=\"language-sh\"><code>bundle <span class=\"token function\">install</span>\n</code></pre>",
      "<pre class=\"language-sh\"><code><span class=\"token comment\"># 此命令生成初始化文件（config/ initializers/exception_notification.rb</span>\nrails g exception_notification:install\n</code></pre>",
      "<pre class=\"language-rb\"><code><span class=\"token comment\"># config/initializers/exception_notification.rb</span>\n<span class=\"token keyword\">require</span> <span class=\"token string\">'exception_notification/rails'</span>\n<span class=\"token comment\"># require 'exception_notification/sidekiq'</span>\n<span class=\"token keyword\">require</span> <span class=\"token string\">'exception_notifier/database_notifier'</span>\n\n<span class=\"token constant\">ExceptionNotification</span><span class=\"token punctuation\">.</span>configure <span class=\"token keyword\">do</span> <span class=\"token operator\">|</span>config<span class=\"token operator\">|</span>\n  <span class=\"token comment\">#config.ignored_exceptions += %w(ActionView::TemplateError ActionController::MissingFile)</span>\n  config<span class=\"token punctuation\">.</span>add_notifier <span class=\"token symbol\">:database</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span>\n<span class=\"token keyword\">end</span>\n</code></pre>",
      "<pre class=\"language-rb\"><code><span class=\"token comment\"># coding: utf-8</span>\n<span class=\"token comment\"># 异常通知</span>\n<span class=\"token comment\"># lib/exception_notifier/database_notifier.rb</span>\n<span class=\"token keyword\">module</span> <span class=\"token constant\">ExceptionNotifier</span>\n  <span class=\"token keyword\">class</span> <span class=\"token class-name\">DatabaseNotifier</span>\n    <span class=\"token keyword\">def</span> <span class=\"token method-definition\"><span class=\"token function\">initialize</span></span><span class=\"token punctuation\">(</span>_options<span class=\"token punctuation\">)</span>\n      <span class=\"token comment\"># do something with the options...</span>\n    <span class=\"token keyword\">end</span>\n\n    <span class=\"token keyword\">def</span> <span class=\"token method-definition\"><span class=\"token function\">call</span></span><span class=\"token punctuation\">(</span>exception<span class=\"token punctuation\">,</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n      <span class=\"token keyword\">begin</span>\n        <span class=\"token variable\">@ip</span>              <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>options<span class=\"token punctuation\">[</span><span class=\"token symbol\">:env</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span><span class=\"token string\">'HTTP_X_REAL_IP'</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">||</span> options<span class=\"token punctuation\">[</span><span class=\"token symbol\">:env</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span><span class=\"token string\">'action_dispatch.remote_ip'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>instance_variable_get<span class=\"token punctuation\">(</span><span class=\"token punctuation\">:</span><span class=\"token variable\">@ip</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>\n        <span class=\"token variable\">@controller_info</span> <span class=\"token operator\">=</span> options<span class=\"token punctuation\">[</span><span class=\"token symbol\">:env</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span><span class=\"token string\">'action_dispatch.request.parameters'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span><span class=\"token string\">'controller'</span><span class=\"token punctuation\">]</span>\n        <span class=\"token variable\">@action_info</span>     <span class=\"token operator\">=</span> options<span class=\"token punctuation\">[</span><span class=\"token symbol\">:env</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span><span class=\"token string\">'action_dispatch.request.parameters'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span><span class=\"token string\">'action'</span><span class=\"token punctuation\">]</span>\n        <span class=\"token variable\">@params</span>          <span class=\"token operator\">=</span> options<span class=\"token punctuation\">[</span><span class=\"token symbol\">:env</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span><span class=\"token string\">'action_dispatch.request.parameters'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>p2h\n        <span class=\"token variable\">@params</span><span class=\"token punctuation\">.</span>delete_if <span class=\"token punctuation\">{</span> <span class=\"token operator\">|</span>key<span class=\"token punctuation\">,</span> _value<span class=\"token operator\">|</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'authenticity_token'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'utf8'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'action'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'controller'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>include<span class=\"token operator\">?</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">rescue</span>\n        <span class=\"token keyword\">nil</span>\n      <span class=\"token keyword\">end</span>\n      <span class=\"token variable\">@title</span>   <span class=\"token operator\">=</span> exception<span class=\"token punctuation\">.</span>message\n      messages <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n      messages <span class=\"token operator\">&lt;</span><span class=\"token operator\">&lt;</span> exception<span class=\"token punctuation\">.</span>inspect\n      <span class=\"token keyword\">unless</span> exception<span class=\"token punctuation\">.</span>backtrace<span class=\"token punctuation\">.</span>blank<span class=\"token operator\">?</span>\n        messages <span class=\"token operator\">&lt;</span><span class=\"token operator\">&lt;</span> <span class=\"token string\">\"\\n\"</span>\n        messages <span class=\"token operator\">&lt;</span><span class=\"token operator\">&lt;</span> exception<span class=\"token punctuation\">.</span>backtrace<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">100</span><span class=\"token punctuation\">]</span>\n      <span class=\"token keyword\">end</span>\n\n      <span class=\"token keyword\">if</span> <span class=\"token constant\">Rails</span><span class=\"token punctuation\">.</span>env<span class=\"token punctuation\">.</span>production<span class=\"token operator\">?</span> \n        <span class=\"token constant\">ExceptionLog</span><span class=\"token punctuation\">.</span>create<span class=\"token punctuation\">(</span>title<span class=\"token punctuation\">:</span>      <span class=\"token variable\">@title</span><span class=\"token punctuation\">,</span>\n                            body<span class=\"token punctuation\">:</span>       messages<span class=\"token punctuation\">.</span>join<span class=\"token punctuation\">(</span><span class=\"token string\">\"\\n\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n                            controller<span class=\"token punctuation\">:</span> <span class=\"token variable\">@controller_info</span><span class=\"token punctuation\">,</span>\n                            action<span class=\"token punctuation\">:</span>     <span class=\"token variable\">@action_info</span><span class=\"token punctuation\">,</span>\n                            params<span class=\"token punctuation\">:</span>     <span class=\"token variable\">@params</span><span class=\"token punctuation\">.</span>to_json<span class=\"token punctuation\">,</span>\n                            ip<span class=\"token punctuation\">:</span>         <span class=\"token variable\">@ip</span><span class=\"token punctuation\">,</span>\n                            local_ip<span class=\"token punctuation\">:</span>   <span class=\"token variable\">$server_ip</span><span class=\"token punctuation\">)</span>\n      <span class=\"token keyword\">else</span>\n        puts <span class=\"token string\">\"\\n======================\"</span>\n        puts messages<span class=\"token punctuation\">.</span>join<span class=\"token punctuation\">(</span><span class=\"token string\">\"\\n\"</span><span class=\"token punctuation\">)</span>\n        puts <span class=\"token string\">\"======================\\n\"</span>\n      <span class=\"token keyword\">end</span>\n    <span class=\"token keyword\">end</span>\n  <span class=\"token keyword\">end</span>\n<span class=\"token keyword\">end</span>\n</code></pre>"
  ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
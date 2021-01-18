// pages/savon/savon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    savonPreData: [
      "<pre class=\"language-rb\"><code>gem <span class=\"token string\">'savon'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'~&gt; 2.12.0'</span>\n<span class=\"token comment\"># 终端运行 bundle install</span>\n</code></pre>",
      "<pre class=\"language-rb\"><code><span class=\"token keyword\">require</span> <span class=\"token string\">'savon'</span>\n\n<span class=\"token comment\"># 为服务创建一个客户端</span>\nclient <span class=\"token operator\">=</span> <span class=\"token constant\">Savon</span><span class=\"token punctuation\">.</span>client<span class=\"token punctuation\">(</span>wsdl<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://service.example.com?wsdl'</span><span class=\"token punctuation\">)</span>\n\nclient<span class=\"token punctuation\">.</span>operations\n<span class=\"token comment\"># =&gt; [:find_user, :list_users]</span>\n\n<span class=\"token comment\"># 调用'findUser'动作</span>\nresponse <span class=\"token operator\">=</span> client<span class=\"token punctuation\">.</span>call<span class=\"token punctuation\">(</span><span class=\"token symbol\">:find_user</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> id<span class=\"token punctuation\">:</span> <span class=\"token number\">42</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n\nresponse<span class=\"token punctuation\">.</span>body\n<span class=\"token comment\"># =&gt; { find_user_response: { id: 42, name: 'Hoff' } }</span></code></pre>"
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
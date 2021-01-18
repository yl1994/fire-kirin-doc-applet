// pages/bullet/bullet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bulletPreData: [
      "<pre class=\"language-ruby\"><code>gem install bullet  \n<span class=\"token comment\">#或者加入 Gemfile</span>\ngroup <span class=\"token symbol\">:development</span> <span class=\"token keyword\">do</span>  \n  gem <span class=\"token string\">'bullet'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'~&gt; 5.6.0'</span>\n<span class=\"token keyword\">end</span>\n</code></pre>",
      "<pre class=\"language-ruby\"><code>config<span class=\"token operator\">/</span>environments<span class=\"token operator\">/</span>development<span class=\"token punctuation\">.</span>rb\n<span class=\"token comment\"># config bullet help to kill N+1 queries and unused eager loading  </span>\nconfig<span class=\"token punctuation\">.</span>after_initialize <span class=\"token keyword\">do</span>    \n  <span class=\"token constant\">Bullet</span><span class=\"token punctuation\">.</span>enable <span class=\"token operator\">=</span> <span class=\"token keyword\">true</span>    \n  <span class=\"token constant\">Bullet</span><span class=\"token punctuation\">.</span>alert <span class=\"token operator\">=</span> <span class=\"token keyword\">true</span>    \n  <span class=\"token constant\">Bullet</span><span class=\"token punctuation\">.</span>bullet_logger <span class=\"token operator\">=</span> <span class=\"token keyword\">true</span>    \n  <span class=\"token constant\">Bullet</span><span class=\"token punctuation\">.</span>console <span class=\"token operator\">=</span> <span class=\"token keyword\">true</span>  \n<span class=\"token keyword\">end</span>\n</code></pre>"
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
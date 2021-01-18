// pages/chnage-date/chnage-date.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    changeDatePreData: [
      "<pre class=\"language-text\"><code>$  g migration ChangeCreatedAtToAuctionBids\n</code></pre>",
      "<pre class=\"language-ruby\"><code><span class=\"token comment\"># mysql 5.6.4以上的版本支持分数精度(fractional seconds)，默认mysql精度只到秒</span>\n<span class=\"token comment\"># limit 设为 6 精确到微妙；如将limit 修改为 3 则精确到毫秒</span>\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">ChangeCreatedAtToAuctionBids</span> <span class=\"token operator\">&lt;</span> <span class=\"token constant\">ActiveRecord</span><span class=\"token punctuation\">:</span><span class=\"token punctuation\">:</span><span class=\"token constant\">Migration</span>\n  <span class=\"token keyword\">def</span> <span class=\"token method-definition\"><span class=\"token function\">change</span></span>\n    <span class=\"token comment\"># limit 置为  3 则精确到毫秒</span>\n    change_column <span class=\"token symbol\">:auction_bids</span><span class=\"token punctuation\">,</span> <span class=\"token symbol\">:created_at</span><span class=\"token punctuation\">,</span> <span class=\"token symbol\">:datetime</span><span class=\"token punctuation\">,</span> limit<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span>\n  <span class=\"token keyword\">end</span>\n<span class=\"token keyword\">end</span>\n</code></pre>",
      "<pre class=\"language-text\"><code> $ rake db:migrate\n</code></pre>",
      "<pre class=\"language-ruby\"><code><span class=\"token comment\">#新建文件config/initializers/filename.rb</span>\n<span class=\"token builtin\">Time</span><span class=\"token punctuation\">:</span><span class=\"token punctuation\">:</span><span class=\"token constant\">DATE_FORMATS</span><span class=\"token punctuation\">[</span><span class=\"token symbol\">:db</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token string\">\"%Y-%m-%d %H:%M:%S.%3N\"</span>\n</code></pre>"
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
Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    categoryList: [
      {title: "Ruby",icon:'../../images/ruby.png',code:'ruby'},
      {title: 'PHP',icon:'../../images/php.png',code:'php'},
      {title: 'JS',icon:'../../images/javascript.png',code:'js'},
      {title: 'HTML',icon:'../../images/html.png',code:'html'},
      {title: 'CSS',icon:'../../images/css.png',code:'css'},
      {title: 'Vue',icon:'../../images/vue.png',code:'vue'},
      {title: 'Flutter',icon:'../../images/flutter.png',code:'flutter'}
    ],
  },
  onLoad: function () {

    var that = this;

    /**
     * 获取当前设备的宽高
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },

  //  tab切换逻辑
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  toTtechnology: function(e){
    var code = e.currentTarget.dataset.code
    var url = "../"+code+"-technology/"+code+"-technology"
    wx.navigateTo({
      url: url
    })
  }
})
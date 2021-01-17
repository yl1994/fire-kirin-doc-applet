// pages/ruby-technology/ruby-technology.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articlesList: [
       {title:'Passenger部署',code:'passenger'},
       {title:'Capistrano自动化部署',code:'capistrano'},
       {title:'更改存储时间格式',code:'chnage-date'},
       {title:'常用方法及问题处理',code:'common-method'},
       {title:'Savon使用',code:'savon'},
       {title:'N+11查询检测工具bullet',code:'bullet'},
       {title:'异常通知',code:'exception-notification'}
       
     ]  
  },
  toDetail: function(e){
    var code = e.currentTarget.dataset.code
    var url = "../"+code+'/'+code
    wx.navigateTo({
      url: url
    })
  }

})
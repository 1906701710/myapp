//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    timestamp:""
  },
  onLoad(){
    this.setData({
      timestamp: app.globalDate.time
    })
  }
})

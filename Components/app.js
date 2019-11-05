//app.js
App({
  globalData: {
    systemInfo: null
  },
  onLaunch: function () {
    // 获取设备信息
    const res = wx.getSystemInfoSync()
    this.globalData.systemInfo = res
  }
})
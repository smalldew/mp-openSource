//app.js
App({
  globalData: {
    userInfo: null,
    systemInfo: '',
  },
  onLaunch: function () {
    this.getSystemInfo()
  },
  getSystemInfo() {
    const res  = wx.getSystemInfoSync()
    this.globalData.systemInfo = res
    console.log('systemInfo' + JSON.stringify(res))
  }
})
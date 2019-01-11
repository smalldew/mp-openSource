//app.js
App({
  globalData: {
    userInfo: null,
    statusBarHeight: '',
  },
  onLaunch: function () {
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.statusBarHeight = res.statusBarHeight
        console.log('statusBarHeight' +  JSON.stringify(res))
      }
    })
  },

})
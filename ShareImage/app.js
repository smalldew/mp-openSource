//app.js

App({
  globalData: {
    userData: '',
  },
  onLaunch: function () {

  },
  // 把图片存到本地
  saveImageToAlbum: function (tempFilePath_image) {
    var that = this
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              // 用户已经同意小程序使用相册
              that.saveImageToUserPhotosAlbum(tempFilePath_image)
            },
            fail() {
              wx.openSetting({
                success: (res) => { }
              })
            }
          })
        } else {
          // 用户已经同意小程序使用相册
          that.saveImageToUserPhotosAlbum(tempFilePath_image)
        }
      }
    })
  },
  // 把图片存储到用户手机相册里
  saveImageToUserPhotosAlbum: function (tempFilePath_image) {
    wx.saveImageToPhotosAlbum({
      filePath: tempFilePath_image,
      success: function (res) {
        wx.showToast({
          title: '保存图片成功',
          image: "https://wx-static.yangcong345.com/v_1_8_0_receiveVip_complete.png"
        })
      }, fail: function (err) {
        wx.showToast({
          title: '保存图片失败',
          image: "https://wx-static.yangcong345.com/v_1_8_0_receiveVip_close.png"
        })
      }
    })
  },
})
//index.js
//获取应用实例
const app = getApp()
let url_host = 'https://api-wx-test.yangcong345.com/'
let url_downloadMpcode = 'parents/vipRewardHelp/mpCode.jpeg'

Page({
  data: {
    toastImage_imageSrc: 'https://wx-static.yangcong345.com/v_1_8_0_assistVip_scan_group.png',
    xcxCode_tempFilePath: '',
    shareViewData: {
      title: '邀请好友助力，再多领7天会员',
      plantforms: [{
        'name': 'shareToMoments',
        'openType': '',
        'image': 'https://wx-static.yangcong345.com/v_1_8_0_shareView_platform_timeline.png',
        'text': '发送到朋友圈'
      },
      {
        'name': 'shareToFriends',
        'openType': 'share',
        'image': 'https://wx-static.yangcong345.com/v_1_8_0_shareView_pltform_friend.png',
        'text': '发送给好友'
      },
      {
        'name': 'faceToFace',
        'openType': '',
        'image': 'https://wx-static.yangcong345.com/v_1_8_0_shareView_platform_face.png',
        'text': '面对面扫一扫'
      },
      ],
    }
  },
  onReady: function () {
    let that = this
    that.toastImage = that.selectComponent("#toastImage")
    that.shareView = that.selectComponent("#shareView")
  },
  onLoad: function () {
    let that = this
    wx.downloadFile({
      url: 'https://api-wx-test.yangcong345.com/parents/vipRewardHelp/mpCode.jpeg?unionId=o8Xt4txUzphRXa4MUC8ROPl21dnM&pages/assistVip/assistVip',
      success(res) {
        that.setData({
          xcxCode_tempFilePath: res.tempFilePath
        })
      }
    })
  },  
  /**
   *  点击事件
   */
  clickShare() {
    let that = this
    that.shareView.show()
  },
  /**
   * 分享组件
   */
  // 点击某一个分享平台
  _clickShareViewPlatform: function (e) {
    let that = this
    if (e.detail === 'shareToFriends') {
      that._clickShareViewFriends()
    } else if (e.detail === 'shareToMoments') {
      that._clickShareViewMoments()
    } else if (e.detail === 'faceToFace') {
      that._clickShareViewFaces()
    }
  },
  // 点击发送到朋友圈
  _clickShareViewMoments: function (e) {
    let that = this
    that._clickShareViewCancel()
    that.setData({
      toastImage_bg_imageSrc: 'https://wx-static.yangcong345.com/v_1_8_0_assistVip_scan_help.png',
      toastImage_imageSrc: that.data.xcxCode_tempFilePath,
      toastImage_fg_width: 560,
      toastImage_fg_height: 800,
      toastImage_showSaveButton: true
    })
    that.toastImage.show()
  },
  // 点击发送给好友
  _clickShareViewFriends: function (e) {
    let that = this
    that._clickShareViewCancel()
    console.log('点击发送给好友')
  },
  // 点击面对面扫一扫
  _clickShareViewFaces: function (e) {
    let that = this
    that._clickShareViewCancel()
    that.setData({
      toastImage_bg_imageSrc: 'https://wx-static.yangcong345.com/v_1_8_0_assistVip_scan_face.png',
      toastImage_imageSrc: that.data.xcxCode_tempFilePath,
      toastImage_fg_width: 560,
      toastImage_fg_height: 750,
      toastImage_showSaveButton: false
    })
    that.toastImage.show()
  },
  // 点击取消
  _clickShareViewCancel: function (e) {
    let that = this
    that.shareView.hide()
  },
  /**
   * 弹窗组件
   */
  // 点击关闭弹窗
  _clickToastImageClose: function (e) {
    var that = this
    that.toastImage.hide()
  },
  // 点击保存图片
  _clickToastImageSave: function (e) {
    app.saveImageToAlbum(e.detail)
  },
})

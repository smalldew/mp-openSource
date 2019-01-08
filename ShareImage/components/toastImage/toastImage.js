// components/toastImage/toastImage.js
var ctx = null
var canvasToTempFilePath = null
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   // 图片背景地址
    bg_image: {
      type: String,
      value: ''
    },
   // 图片地址
    image: {
      type: String,
      value: ''
    },
    // 前景宽度
    toastImage_fg_width: {
      type: Number,
      value: 560
    },
    // 前景高度
    toastImage_fg_height: {
      type: Number,
      value: 800
    },
    // 是否显示按钮
    toastImage_showSaveButton: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 弹窗显示控制
    isShow: false
  },
  /**
   * 组件生命周期
   */
  detached: function () {

  },
  /**
   * 组件的方法列表 
   */
  methods: {
    //隐藏弹框
    hide: function () {
      this.setData({
        isShow: !this.data.isShow
      })
      ctx = null
    },
    //展示弹框
    show: function () {
      let that = this
      if (!ctx) {
        wx.showLoading({
          title: '绘制中...',
        })
        var mpCodeP = new Promise(function (resolve) {
          wx.getImageInfo({
            src: that.data.image,
            success: function (res) {
              resolve(res.path)
            }
          })
        })
        var bgP = new Promise(function (resolve) {
          wx.getImageInfo({
            src: 'https://wx-static.yangcong345.com/v_1_8_0_assistVip_scan_moments.png',
            success: function (res) {
              resolve(res.path)
            }
          })
        })
        Promise.all([mpCodeP, bgP]).then(function (result) {
          ctx = wx.createCanvasContext('shareCanvas', that)
          // 小程序码
          const qrImgSize = 170
          ctx.drawImage(result[0], (that.data.toastImage_fg_height / 2 - qrImgSize) / 2 - 60, (that.data.toastImage_fg_width / 2 - qrImgSize) / 2 + 60, qrImgSize, qrImgSize)
          ctx.drawImage(result[1], 0, 0, 280, 375)
          ctx.stroke()
          ctx.draw()
          // 把canvas绘制的图片
          wx.canvasToTempFilePath({
            canvasId: 'shareCanvas',
            success: function (res) {
              canvasToTempFilePath = res.tempFilePath
              wx.showToast({
                title: '绘制成功',
              })
            },
            fail: function () {
              wx.showToast({
                title: '绘制失败',
              })
            },
            complete: function () {
              that.setData({
                isShow: !that.data.isShow
              })
              wx.hideLoading()
              wx.hideToast()
            }
          }, that)
        })
      }
    },
    // 点击关闭
    _clickToastImageClose: function (e) {
      //触发成功回调
      this.triggerEvent("clickToastImageClose")
    },
    // 点击保存图片到本地
    _clickToastImageSave: function (e) {
      this.triggerEvent("clickToastImageSave", canvasToTempFilePath)
    }
  }
})

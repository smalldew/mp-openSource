//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad: function () {

  },
  onReady() {
    this.topHint = this.selectComponent("#topHint")
    this.toastView = this.selectComponent("#toastView")
  },
  /**
   * 组件事件 
   */
  _clickConfirmEvent(e) {
    this.toastView.hide()
  },
  _clickCancelEvent(e) {
    this.toastView.hide()
  },
  /**
   * 点击事件
   */
  // 点击展示tip
  clickShowTip() {
    this.topHint.show()
  },
  // 点击展示view
  clickShowView() {
    this.toastView.show()
  }
})

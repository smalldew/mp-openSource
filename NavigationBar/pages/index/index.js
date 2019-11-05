//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav: {
      title: '全局-自定义nav-主页-长名字',
      back: false,
      home: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  /**
   * 点击事件
   */
  // 跳转到子页面
  clickSubIndex() {
    wx.navigateTo({
      url: '../subIndex/subIndex',
    })
  },
  // 跳转自定义navigationBar页
  clickEnd() {
    wx.navigateTo({
      url: '../end/end',
    })
  },
  // 跳转到悬浮“返回首页”按钮
  clickBackHome(e) {
    wx.navigateTo({
      url: '../fixed/fixed',
    })
  }
})

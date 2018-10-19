// package/buy/buyDetail/buyDetail.js
import { fetch } from "../../../utils/fetch.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加一个2秒延迟
    setTimeout(function () {
      fetch('https://api-test.xxx.com/111').then((res) => {
        console.log('package/buy/buyDetail/buyDetail--fetchSuccess')
      }).catch((err) => {
        console.log('package/buy/buyDetail/buyDetail--fetchFail')
      })
    }, 2000)
    console.log('package/buy/buyDetail/buyDetail--onLoad--options-->' + JSON.stringify(options))
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
    console.log('package/buy/buyDetail/buyDetail--onShow')
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
  
  }
})
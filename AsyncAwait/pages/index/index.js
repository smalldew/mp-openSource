//index.js
import regeneratorRuntime from '../../utils/runtime.js'
const moment = require('../../utils/mp-moment')

//获取应用实例
const app = getApp()

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
    let that = this
    // 同步执行异步函数
    that.testAsync()
    // 异步执行异步函数
    // that.testSync()
  },
  async testAsync() {
    let that = this
    console.log(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') + ' testAsync start')
    console.log('show loading')

    let resultOne = await that.getValueOne();
    console.log(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') + resultOne)
    let resultTwo = await that.getValueTwo();
    console.log(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') + resultTwo)
    console.log('hide loading')
    console.log(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') + ' testAsync end')
  },
  async testSync() {
    let that = this
    console.log(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') + ' testSync start')
    console.log('show loading')

    let resultOne = that.getValueOne();
    let resultTwo = that.getValueTwo();


    let results = await Promise.all([resultOne, resultTwo])
    console.log(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') + results[0])
    console.log(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') + results[1])

    console.log('hide loading')
    console.log(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') + ' testSync end')

  },
  getValueOne() {
    let that = this
    let startTime = Date.now()

    return new Promise (function(resolve, reject) {
        setTimeout(function() {
          let endTime = Date.now()
          resolve(' 请求成功 one ' + moment(endTime - startTime) + 'ms')
        }, 1000)
    }) 
  },
  getValueTwo() {
    let that = this
    let startTime = Date.now()

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        let endTime = Date.now()
        resolve(' 请求成功 two ' + moment(endTime - startTime) + 'ms')
      }, 3000)
    }) 
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

  }
})
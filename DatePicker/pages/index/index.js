//index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkInDate: '',
    checkOutDate: '',
    isToday: false,
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
    // 初始化时间
    this.initDate()
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
   * 函数
   */
  // 初始化时间
  initDate() {
    var that = this

    var DATE_YEAR = new Date().getFullYear()
    var DATE_MONTH = new Date().getMonth() + 1
    var DATE_DAY = new Date().getDate()
    var TIME_NOW = DATE_YEAR + '-' + DATE_MONTH + '-' + DATE_DAY;
    var TIME_TOMORROW = DATE_YEAR + '-' + DATE_MONTH + '-' + (DATE_DAY + 1);

    wx.getStorage({
      key: 'ROOM_SOURCE_DATE',
      success: function (res) {
        if (TIME_NOW == res.data.checkInDate) {
          that.setData({
            isToday: true
          })
        } else {
          that.setData({
            isToday: false
          })
        }
        that.setData({
          checkInDate: res.data.checkInDate,
          checkOutDate: res.data.checkOutDate,
        })
      },
      fail: function (res) {
        wx.setStorage({
          key: 'ROOM_SOURCE_DATE',
          data: {
            checkInDate: TIME_NOW,
            checkOutDate: TIME_TOMORROW,
            totalDays: 1
          }
        });

        if (TIME_NOW) {
          that.setData({
            isToday: true
          })
        } else {
          that.setData({
            isToday: false
          })
        }
        that.setData({
          checkInDate: TIME_NOW,
          checkOutDate: TIME_TOMORROW,
        })
      }
    })
  }, 
  // 点击选择时间
  tapSelectDate: function (e) {
    wx.navigateTo({
      url: '/pages/selectDate/selectDate',
    })
  },
})
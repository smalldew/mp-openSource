// components/navigationBar/navigationBar.js
const app = getApp()
const statusBarHeight = app.globalData.systemInfo.statusBarHeight || 20

Component({

  properties: {
    text: {
      type: String,
      value: 'Wechat'
    },
    back: {
      type: Boolean,
      value: false
    },
    home: {
      type: Boolean,
      value: false
    }
  },
  data: {
    statusBarHeight: statusBarHeight + 'px',
    navigationBarHeight: (statusBarHeight + 44) + 'px'
  },

  methods: {
    backHome: function () {
      let pages = getCurrentPages()
      wx.navigateBack({
        delta: pages.length
      })
    },
    back: function () {
      wx.navigateBack({
        delta: 1
      })
    }
  }
})
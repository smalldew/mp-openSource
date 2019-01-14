// components/backHome/backHome.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickBackHome(e) {
      let pages = getCurrentPages()
      wx.navigateBack({
        delta: pages.length
      })
    }
  }
})

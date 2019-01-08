// components/shareView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    plantforms: {
      type: Array,
      value: ''
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
   * 组件的方法列表
   */
  methods: {
    //隐藏弹框
    hide: function () {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //展示弹框
    show: function () {
      if (this.data.plantforms.length <= 0){
        wx.showModal({
          title: '提示',
          content: '当前没有可分享平台',
          showCancel: false
        })
      } else {
        this.setData({
          isShow: !this.data.isShow
        })
      }
    },
    
    // 点击某一个平台
    _clickShareViewPlatform: function (e) {
      this.triggerEvent("clickShareViewPlatform", e.currentTarget.dataset.name)
    },
    // 点击取消
    _clickShareViewCancel: function (e) {
      //触发成功回调
      this.triggerEvent("clickShareViewCancel")
    }
  }
})

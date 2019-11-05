// components/topHint/topHint.js

// 获取应用实例
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 提示内容
    content: {
      type: String,
      value: '信息有误'
    },
    // 背景颜色
    background: {
      type: String,
      value: '背景颜色'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 动画
    animationData: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //展示弹框
    show () {
      let res = app.globalData.systemInfo
      this.createAnimation(res.windowWidth / 750)
    },
    createAnimation (scale) {
      let animation = wx.createAnimation({
        duration: 800,
        timingFunction: 'ease',
      })

      this.animation = animation

      this.setData({
        animationData: animation.export()
      })

      setTimeout(() => {
        animation.translate(0, 70 * scale).step()
        this.setData({
          animationData: animation.export()
        })
      }, 0)

      setTimeout(() => {
        animation.translate(0, -70 * scale).step()
        this.setData({
          animationData: animation.export()
        })
      }, 5000)
    }
  }
})

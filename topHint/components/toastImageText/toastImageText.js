// components/toastImageText/toastImageText.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 弹窗标题
    title: {           
      type: String, 
      value: '标题'     
    },
    // 弹窗内容
    content: {
      type: String,
      value: '弹窗内容'
    },
    // 弹窗图片
    image: {
      type: String,
      value: '弹窗内容'
    },
    // 弹窗确认按钮文字
    confirmText: {
      type: String,
      value: '确定'
    },
    // 弹窗取消按钮文字
    cancelText: {
      type: String,
      value: '取消'
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
    /*
     * 公有方法
     */
    //隐藏弹框
    hide: function () {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //展示弹框
    show: function () {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    /*
     * 内部私有方法建议以下划线开头
     * triggerEvent 用于触发事件
     */
    _confirmEvent: function (e) {
      //触发成功回调
      this.triggerEvent("confirmEvent", e);
    },
    _cancelEvent: function (e) {
      this.triggerEvent("cancelEvent", e);
    }
  }
})

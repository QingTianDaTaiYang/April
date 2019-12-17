// pages/animation/animation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animation: {}, // 动画
    mask: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideTabBar()
    let that = this
    setTimeout(function () {
      // 图标动画部分
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'linear',
      })
      this.animation = animation
      animation.opacity(1).step();
      // setTimeout(function () {
      //   animation.opacity(1).step();
      //   that.setData({
      //     animation: animation.export()
      //   })
      // }, 2000)

      setTimeout(function () {
        animation.opacity(0).step();
        that.setData({
          animation: animation.export(),
        })

        setTimeout(function () {
          that.setData({
            mask: false,
          })
          wx.switchTab({
            url: '../index/index'
          })
        }, 1500)

      }, 1500)
      that.setData({
        animation: animation.export()
      })
    }, 500)
  },

})
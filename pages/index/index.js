//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    img_width: 0,
    img_height: 0,
    windowHeight: 0, // 设备可是区域高度
    nav_top: 30,
  },

  onLoad: function () {

    let that = this

    that.setData({
      nav_top: app.globalData.statusBar
    })
    wx.getSystemInfo({ // 获取系统信息
      success(res) {
        console.log(res)
        let w = res.windowWidth
        that.setData({
          windowHeight: res.windowHeight
        })
        wx.getImageInfo({ // 优先对图片的宽高进行判断。长款相等就不裁切
          src: '../../img/bg_kv02.jpg',
          success(res) {
            console.log(res)
            let img_width = res.width
            let img_height = res.height
            let w_h = img_width / img_height
            console.log(w_h)
            that.setData({
              img_width: w,
              img_height: w / w_h,
            })
            
          }
        })
      }
    })

    

    
    
  },
  onShareAppMessage: function (e) {
    return {
      title: "四月是你的谎言",
      path: '/pages/animation/animation',
      imageUrl: "../../img/sh_share.png"
    }
  },
  goMycenter:function(){
    wx.navigateTo({
      url: '../mycenter/mycenter',
    })
  }
  
})

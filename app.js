//app.js
App({
  onLaunch: function (e) {
    let that = this
    // 获取设备信息，获取顶部导航栏高宽
    wx.getSystemInfo({
      success(res) {
        // console.log(res)
        that.globalData.statusBar = res.statusBarHeight; //状态栏高度
        // let custom = wx.getMenuButtonBoundingClientRect();//菜单按钮
        // console.log(custom)
        // // that.globalData.navWidth = custom.right - custom.left;//胶囊宽度
        // that.globalData.navHeight = custom.bottom - custom.top;//胶囊高度
        // //计算得到定义的状态栏高度
        // that.globalData.customBar = custom.bottom + custom.top - res.statusBarHeight;

        // 下面版本兼容旧版本
        that.globalData.navWidth = 87;//胶囊宽度
        that.globalData.navHeight = 32;//胶囊高度
        //计算得到定义的导航条高度
        if(res.platform.toLowerCase() == 'devtools' || res.platform.toLowerCase() == 'ios'){
          that.globalData.customBar = res.statusBarHeight + 40;
        }
        if(res.platform.toLowerCase() == 'android'){
          that.globalData.customBar = res.statusBarHeight + 48;
        }
        // console.log(that.globalData.customBar)
        // console.log(that.globalData.statusBar)
        // 获取设备显示宽度
        that.globalData.screenWidth = res.screenWidth; 
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
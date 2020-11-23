//index.js
//获取应用实例
const app = getApp()

// const config={
//   data:{

//   }
// }


Page({
  data: {
    motto: '欢迎进入小游戏',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    disable: false,
    gameList: ['2048']
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    //  this.setData({
    //  },function(){
    //   this.data.gameList.forEach(function(v){
    //     let game='start'+v;
    //     game=function(){
    //       this.data.disable=true;
    //       wx.navigateTo({
    //         url:"../"+v+"/game"
    //       })
    //     }

    //   })
    //  }

    //  )
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  start: function (e) {
    console.log(e);
    // this.data.gameList.forEach(function (v) {
      let v=this.data.gameList[0]
      //如果页面的值可以通过事件传给此处，加个判断
        this.setData({
          disable: true
        })
        wx.navigateTo({
          url: "../" + v + "/game"
        })
    // })
  }
})
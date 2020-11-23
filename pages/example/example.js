// pages/example/example.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    size:4
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //创建一个size*size大小的二维数组矩阵
      var cells=[];
      for(var x=0;x<this.data.size;x++){
        var row=cells[x]=[];
        for(var y=0;y<this.data.size;y++){
          row.push(null)
        }
      }
      console.log(cells)
    
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

  }
})
// miniprogram/pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  goNews: function () {
    // Alt+shift+f :格式化代码
    
    // 默认左上角带有 回到主页按钮
    // wx.navigateTo({
    //   url: '../news/news',
    // })

    // 默认左上角带有 返回按钮
    wx.redirectTo({
      url: '../news/news',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    console.log('带有回到主页按钮')

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('带有返回按钮')
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

import newsDetailData from '../../../data/news/newsDetailData.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // newsDetailData:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info('options:', options)
    console.info(newsDetailData)
    var newsid = options.id
    this.data.currentId = newsid
    this.setData({ newsDetailData: newsDetailData.newsDetailList[newsid]})


    // 设置缓存
    // wx.setStorageSync('name', {
    //   name1:'zhangsan',
    //   age:'16'
    // })
    // // 清除缓存
    // wx.removeStorageSync('name'); 
    // // 清除缓存-所有
    // wx.clearStorageSync();

    // 初始化收藏功能
    var CollectionData = wx.getStorageSync("Collection_Data")
    if (CollectionData){
      var Collection = CollectionData[newsid]
      this.setData({
        colleced: Collection
      })
    }else{
      var CollectionData = {}
      CollectionData[newsid] = false
      wx.setStorageSync("Collection_Data", CollectionData)

    }


  },

  // ------------------------自定义函数
  // 控制收藏功能
  onCollection:function(event){
    var CollectionData = wx.getStorageSync("Collection_Data")
    var Collection = CollectionData[this.data.currentId]
    Collection = !Collection;
    CollectionData[this.data.currentId] = Collection;
    wx.setStorageSync("Collection_Data", CollectionData)
    this.setData({
      colleced: Collection
    })
    wx.showToast({
      title: Collection?'收藏成功':'取消收藏',
      icon: 'success',
      duration: 2000
    })
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
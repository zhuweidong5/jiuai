// miniprogram/pages/news.js

var newsList = require('../../data/news/newsData.js')  //通过引入js的数据
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // movies: [
    //   { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
    //   { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
    //   { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
    //   { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    // ]  
    movies: [
      { url: '/images/swiper/banner1.png' },
      { url: '/images/swiper/banner2.png' },
      { url: '/images/swiper/banner3.jpg' },
    ] ,
    newsName:"湖北疫情",
    // news_content:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info(1)
    var news_content = [
      {
        name:'武汉',
        people:'1000万',
        data:'2020-01-21'
      },
      {
        name: '上海',
        people: '2000万',
        data: '2020-01-21'
      }
    ]
    // this.setData({ news_content: news_content })  //如果key 和 value 一样可以简写如下，并不用在data初始化了 
    // this.setData({news_content})
    this.setData({ news_content: newsList.newsList })  //通过引入js的数据
  },

  // 自定义函数
  // event就是当前对象
  gotoDetail:function(event){
    console.info('event:',event)
    var newsId = event.currentTarget.dataset.newsid;
    console.info('传：',newsId)
    wx.navigateTo({
      url: 'news-detail/news-detail?id='+ newsId,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.info(2)

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.info(3)

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.info(4)

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.info(5)

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.info(6)

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.info(7)

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.info(8)

  }
})
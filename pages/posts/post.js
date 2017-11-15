Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    posts:[],
    circular: true,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 700
  },
  onLoad(){
    this.setData({
      posts:require('../../data/posts-data.js')
    })
  },
  goToDetail(e){
    let postId = e.currentTarget.dataset.postId;
    console.log(`post id id ${postId}`);
    wx.navigateTo({
      url: '/pages/posts/post-detail/post-detail',
    })
  }
})
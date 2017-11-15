Page({

  /**
   * 页面的初始数据
   */
  data: {
    post:{}
  },
  onLoad(opt) {
    let postId = opt.postId;
    this.setData({
      post:require('../../../data/posts-data.js')[postId]
    })
  }
})
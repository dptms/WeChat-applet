Page({

  /**
   * 页面的初始数据
   */
  data: {
    post: {},
    postCollected: false
  },
  onLoad(opt) {
    let postId = opt.postId;
    this.setData({
      post: require('../../../data/posts-data.js')[postId]
    })
    // 获取收藏缓存信息
    let postsCollected = wx.getStorageSync('postsCollected')
    if (postsCollected) {
      if (!postsCollected[postId]) {
        postsCollected[postId] = false;
        wx.setStorageSync('postsCollected', postsCollected)
      }
      this.setData({
        postCollected: postsCollected[postId]
      })
    } else {
      postsCollected = {}
      postsCollected[postId] = false
      wx.setStorageSync('postsCollected', postsCollected)
    }
  },
  collect() {
    this.setData({
      postCollected: !this.data.postCollected
    })
    let postsCollected = wx.getStorageSync('postsCollected')
    postsCollected[this.data.post.postId] = this.data.postCollected
    wx.setStorageSync('postsCollected', postsCollected)
  }
})
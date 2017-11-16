Page({

  /**
   * 页面的初始数据
   */
  data: {
    post: {},
    postCollected: false,
    isPlayingMusic: false
  },
  onReady() {
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.src = this.data.post.music.url
    this.setData({
      innerAudioContext: innerAudioContext
    })
  },
  on_off_music() {
    if (this.data.isPlayingMusic){
      this.data.innerAudioContext.pause();
    }else{
      this.data.innerAudioContext.play();
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
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
    wx.showModal({
      title: this.data.postCollected ? '取消收藏' : '收藏',
      content: this.data.postCollected ? '是否取消收藏' : '是否收藏',
      confirmColor: '#405f80',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            postCollected: !this.data.postCollected
          })
          let postsCollected = wx.getStorageSync('postsCollected')
          postsCollected[this.data.post.postId] = this.data.postCollected
          wx.setStorageSync('postsCollected', postsCollected)
        }
      }
    })
  }
})
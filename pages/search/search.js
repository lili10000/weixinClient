
Page({
  data: {
    retnInfo:"",
    detail: "",
    date: ""
  },
  handleSelecteDate(e) {
    // wx.showToast({ title: `${e.detail.date}`, icon: false })
    this.setData({
      date: e.detail.date
    })
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    if (this.data.date == "") {
      this.setData({
        date: this.getNowDate()
      })
    }
  },
  submit: function () {
    // 或者，可以修改 this.data 之后马上用 setData 设置一下修改了的字段
    // console.log(this.data.date)
    if (this.data.date == ""){
      this.setData({
        date: this.getNowDate()
      })
    }
    // console.log(this.data.date)

    var inputUrl = 'https://magicboxdatacenter.gacicv.com:10000/dataServer/orderByDay?date=' + this.data.date
    // var inputUrl = 'https://localhost:10000?date=' + this.data.date
    var _this = this
    // console.log(inputUrl)

    wx.request({
      url: inputUrl,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.data)
        _this.setData({
          retnInfo : res.data.data.sum,
          detail: res.data.data.detail
        })
        console.log(_this.data)
      }
    })
  },
  getNowDate: function () {
    var date = new Date()
    var now = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    return now
  },

})




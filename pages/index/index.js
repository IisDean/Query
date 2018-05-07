
//获取应用实例
const app = getApp();
const assets = app.assets;

Page({
  data: {
    //轮播图
    bannerUrls: [
      assets + 'img/banner_01.jpg'
    ],
    imgwidth: 0,
    imgheight: 0,
    bannerMode: 'aspectFill',
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    //进度条
    progress: [10,50,90],
    progressIndex: 1,//当前信息填写进度
    progressAnimation: false,//进度条动画
    //表单
    broadband: ['这是个宽带', '大王卡'],
    broadbandIndex: 0,
    setMeal: ['这是个套餐','和家庭套餐'],
    setMealIndex : 0,
    userName: '',
    userMobile: '',
    referrerMobile: '',
    //温馨提示
    tipsText: '温馨提示：宽带套餐政策以当地营业厅现行政策为准！',
    //定位图标
    locationIcon: assets + 'img/location_icon.png',
    locationText: '',
  },
  //选择宽带
  pickerbroadband: function (e) {
    this.setData({
      broadbandIndex: e.detail.value
    })
  },
  //选择套餐
  pickersetmeal: function (e) {
    this.setData({
      setMealIndex: e.detail.value
    })
  },
  //填写姓名
  inputUserName: function(e){
    this.setData({
      userName: e.detail.value
    })
  },
  //填写号码
  inputUserMobile: function (e) {
    this.setData({
      userMobile: e.detail.value
    })
  },
  //填写推荐人号码
  inputReferrerMobile: function (e) {
    this.setData({
      referrerMobile: e.detail.value
    })
  },
  //完成第一步
  submitMsg: function(e) {
    this.setData({
      progressIndex: this.data.progressIndex += 1
    });
    if( this.data.progressIndex == 2 ){
      wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function (res) {
          var latitude = res.latitude
          var longitude = res.longitude
          wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            scale: 28
          })
        }
      })
    }
  } 
})
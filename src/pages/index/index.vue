<template>
<div class="container">
    <div class="index">
      <!-- location box -->
    <view class="index_header">
      <view class="index_header_position">
        <image  class="index_header_position_img" :src="index_header.arrow" v-if="index_header.arrow"></image>
        <view class="index_header_position_text">
          <text>深圳市海关大厦深圳市海关大厦</text>
        </view>
        <image class="index_header_position_arrow" src="/static/images/first/top_ic_xlxz@2x.png"></image>
      </view>
      <view class="index_header_msg">
        <image class="index_header_msg_img" src="/static/images/first/top_ic_xxx@2x.png"></image>
      </view>
    </view>
    <!-- input box -->
    <view class="index_input">
      <input type="text" placeholder="输入商家/商品名称">
    </view>
    <!-- index swiper -->
    <swiper class="index_swiper">
      <block>
        <swiper-item>
          <image mode="aspectFit" src="/static/images/first/bnt_banner@2x.png"/>
        </swiper-item>
      </block>
    </swiper>
    <!-- index menu -->
    <view class="index_menu">
      <view class="index_menu_item" v-for="(item,index) in menu" :key="index">
        <navigator url="/">
          <image :src="item.img"></image>
          <view class="index_menu_item_text">
            <text>{{item.text}}</text>
          </view>
        </navigator>
      </view>
    </view>
    <!-- 优惠专区 -->
    <div class="discount">
      <index-title :img="discount.img" :title_b="discount.title_b" :title_l="discount.title_l"></index-title>
      <div class="discount_item">
        <index-activities bgImg="/static/images/first/tab_bnt_bj_xs@2x.png" activitiesImg="/static/images/first/tab_bnt_xszk@2x.png" activitiesTitle="好店专享折扣 " activitiesDetail="限时秒杀，手到擒来"></index-activities>
        <index-activities bgImg="/static/images/first/tab_bnt_bj_mlj@2x.png" activitiesImg="/static/images/first/tab_bnt_mlj@2x.png" activitiesTitle="满减店铺推荐  " activitiesDetail="大额满减，每日特价"></index-activities>
        <index-activities bgImg="/static/images/first/tab_bnt_bj_tc@2x.png" activitiesImg="/static/images/first/tab_bnt_yhtc@2x.png" activitiesTitle="餐餐巨实惠 " activitiesDetail="热销套餐，畅快来袭"></index-activities>
      </div>
    </div>
    <!-- 附近商家 -->
     <div class="nearby">
      <index-title :img="nearby.img" :title_b="nearby.title_b" :title_l="nearby.title_l"></index-title>
      <div class="nearby_tab">
        <div class="nearby_tab_item" v-for="(tab,index) in tabs" :key="index">
          <div class="nearby_tab_item_title" :id="index" @click="tabClick"  :class="{'tabs_active':activeindex == index}">
            {{tab}}
          </div>
        </div>
        <div  :class="navbarSliderClass" class="slider_toggle"></div>
      </div>
      <div class="business-components">
        <business-component businessImg="/static/images/first/tab_bnt_bj_mlj@2x.png" businessTitle="葱哥烤鱼饭(宝安店)" star="5" businessCount="9999" sDelivery="15" deliver="3" time="43" distance="1.9" discountTitle="满立减" :discountItem="activity"></business-component>
      <business-component businessImg="/static/images/first/tab_bnt_bj_mlj@2x.png" businessTitle="葱哥烤鱼饭(宝安店)" star="4" businessCount="9999" sDelivery="15" deliver="3" time="43" distance="1.9"></business-component>
      <business-component businessImg="/static/images/first/tab_bnt_bj_mlj@2x.png" businessTitle="葱哥烤鱼饭(宝安店)" star="3" businessCount="9999" sDelivery="15" deliver="3" time="43" distance="1.9" discountTitle="满立减" :discountItem="activity"></business-component>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import indexTitle from "@/components/title"
  import indexActivities from "@/components/indexActivities"
  import businessComponent from "@/components/businessComponent.vue"
export default {
  data () {
    return {
      index_header:{
        arrow:"/static/images/first/top_ic_dw@2x.png",
      },
      activity:[
        {
          a:"满20减10"
        },
        {
          a:"满30减25"
        }
      ],
      tabs:['综合评价','销量最高','距离最近','好评最多'],
      activeindex:0,
      discount:{
        img:"/static/images/first/tab_icon_youhui@2x.png",
        title_b:"优惠专区",
        title_l:"寻找特色美食"
      },
      nearby:{
        img:"/static/images/first/tab_icon_fujin@2x.png",
        title_b:"附近商家",
        title_l:"因你,味道可以延续"
      },
      menu:[
        {
          img:"/static/images/first/home_ic_meishi@2x.png",
          text:"美食"
        },
        {
          img:"/static/images/first/home_ic_zc@2x.png",
          text:"正餐"
        },
        {
          img:"/static/images/first/home_ic_jianc@2x.png",
          text:"简餐"
        },
        {
          img:"/static/images/first/home_ic_yexiao@2x.png",
          text:"夜宵"
        },
        {
          img:"/static/images/first/home_ic_yinliao@2x.png",
          text:"饮料"
        },
        {
          img:"/static/images/first/home_ic_shuiguo@2x.png",
          text:"水果"
        },
        {
          img:"/static/images/first/home_ic_xiaochi@2x.png",
          text:"小吃"
        },
        {
          img:"/static/images/first/home_ic_qbfl@2x.png",
          text:"全部分类"
        }
      ]
    }
  },

components: {
  indexTitle,
  indexActivities,
  businessComponent
},
  methods: {
    getLocation(lat,lng){
      let that = this;
      qqMap.reverseGeocoder({
        location:{
          latitude: lat,
          longitude: lng
        },
        success:function(res){
          console.log(res);
        },
        fail:function(err){
          console.log(err);
        },
        complete:function(res){
          console.log(res);
        }
      })
    },
    tabClick(e){
      this.activeindex = Number(e.currentTarget.id);
    }
  },
computed: {
  navbarSliderClass() {
    if(this.activeindex === 0){
      return 'navbar_side_0'
    }else if(this.activeindex === 1){
      return 'navbar_side_1'
    } else if(this.activeindex === 2){
      return 'navbar_side_2'
    }else if(this.activeindex === 3){
      return 'navbar_side_3'
    }
  }
},
  created () {
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 纬度
        var longitude = res.longitude // 经度
        console.log(res);
        // that.getLocation(latitude,longitude);
      }
    })

// wx.getSetting({
//   success:(res)=>{
//     console.log(JSON.stringify(res));
//     if(res.authSetting['scope.userLocation']!=undefined||res.authSetting['sope.userLocation']){
//       wx.showModal({
//         title:"请求授权当前位置",
//         content:"需要获取您的地理位置",
//         success:function(res){
//           if(res.cancel){
//             wx.showToast({
//               title:"拒绝授权",
//               icon:"none",
//               duration:1000
//             })
//           }else if(res.confirm){
//             wx.openSetting({
//               success:function(data){
//                 if(data.authSetting['scope.userLocation'] == true){
//                   wx.showToast({
//                     title:"授权成功",
//                     icon:"success",
//                     duration:1000
//                   })
//                 }
//               }
//             })
//           }else{
//             wx.showToast({
//               title:"授权失败",
//               icon:"none",
//               duration:1000
//             })
//           }
//         }
//       })
//     }else if(res.authSetting['scope.userLocation'] == undefined){
//       
//     }else{
//       
//     }
//     
//   }
// })
// 







  }
}
</script>

<style scoped>
  /* container */
  .container{
    width: 100%;
    height: 100%;
  }
  /* index */
.index{
    width: 690rpx;
    height: auto;
    margin:0 30rpx;
}
  /* index header*/
.index_header{
  width: 690rpx;
  height: 88rpx;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.index_header_position{
  width: auto;
  height: 88rpx;
  display: flex;
  flex-flow: row nowrap;
}
.index_header_position_img{
  width: 38rpx;
  height: 38rpx;
  margin: 25rpx 0;
}
.index_header_position_text{
  width: 100rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  text-wrap: nowrap;
  font-size: 30rpx;
  line-height: 88rpx;
  height: 88rpx;
  margin-left: 10rpx;
  width: auto;
}
.index_header_position_arrow{
  width: 16rpx;
  height: 10rpx;
  margin-left: 10rpx;
  margin-top: 42rpx;
}
.index_header_msg{
    width: auto;
    height: 88rpx;
}
.index_header_msg_img{
  width: 38rpx;
  height: 38rpx;
  margin:25rpx 0;
}
  /* index input*/
  .index_input{
    height: 88rpx;
    text-align: center;
  }
  .index_input ._input{
    width: 690rpx;
    height: 66rpx;
    line-height: 66rpx;
    font-size: 28rpx;
    color:#999;
    background: #E5E5E5;
    border-radius: 33rpx;
    margin: 11rpx 0;
  }
  /* index swiper*/
  .index_swiper{
    width: 690rpx;
    height: 260rpx;
  }
  .index_swiper ._image{
    width: 690rpx;
    height: 260rpx;
  }
  /* index menu*/
  .index_menu{
    width: 690rpx;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60rpx;
  }
  .index_menu .index_menu_item{
    width: 160rpx;
    height: 140rpx;
  }
  .index_menu .index_menu_item ._navigator{
    width: 160rpx;
    height: 140rpx;
    margin-top: 40rpx;
  }
  .index_menu .index_menu_item ._navigator ._image{
    width: 80rpx;
    height: 80rpx;
    margin-left: 40rpx;
  }
  .index_menu .index_menu_item ._navigator .index_menu_item_text{
    width: 100%;
    color:#333;
    font-size: 24rpx;
    text-align: center;
    line-height: 30rpx;
  }
  /* index discount*/
  .discount{
    width: 690rpx;
    height: auto;
  }
  .discount_item{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  /* index nearby*/
.nearby{
  width: 690rpx;
  height: auto;
}
.nearby .nearby_tab{
  width: 690rpx;
  height: 60rpx;
  line-height: 60rpx;
  position: relative;
}
.nearby_tab_item{
  padding:0 15rpx;
  float: left;
}
 .nearby_tab_item_title{
   font-size: 28rpx;
   color: #999999;
 }
 .nearby_tab_item_title.tabs_active{
   font-size: 32rpx;
   color: #000000;
 }
.slider_toggle{
  width: 50rpx;
  height: 6rpx;
  background: #FFBA17;
  left: 50rpx;
  bottom: 0;
  border-radius: 6rpx;
  clear: both;
  transition: transform .3s linear;
}
.navbar_side_0{
  transform: translateX(50rpx);
}
.navbar_side_1{
  transform: translateX(195rpx);
}
.navbar_side_2{
  transform: translateX(340rpx);
}
.navbar_side_3{
  transform: translateX(480rpx);
}
</style>

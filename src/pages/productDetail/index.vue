<template>
  <div class="p_detail">
    <!-- p_detail_header -->
    <div class="p_detail_header">
      <div class="p_detail_header_c">
        <div class="p_detail_header_c_t">
          <image class="p_detail_header_c_img" src="/static/images/first/tab_bnt_bj_mlj@2x.png"></image>
          <div class="p_detail_header_c_title">
            <div class="p_detail_header_c_title_b">
              果实先生(新安店)
            </div>
            <div class="p_detail_header_c_title_l">
              <text>起送￥15</text>
              <text>|</text>
              <text>配送￥3</text>
              <text>|</text>
              <text>月售9989</text>
            </div>
          </div>
          <div class="p_detail_header_c_rate">
            <image class="p_detail_header_c_rate_img" src="/static/images/first/meal_ic_pingfen@2x.png">
              <text class="p_detail_header_c_rate_text1">4.7</text>
              <text class="p_detail_header_c_rate_text2">评分</text>
            </image>
          </div>
        </div>
        <div class="p_detail_header_discount">
          <div class="discount_item" v-for="(discount,index) in discountArr" :key="index">{{discount}}</div>
        </div>
        <div class="p_detail_header_discount_coupon">
          <image class="p_detail_header_discount_coupon_img" src="/static/images/first/meal_ic_youhuiquan@2x.png"></image>
          <text class="p_detail_header_discount_coupon_text1 p_detail_header_discount_coupon_text">共￥10</text>
          <text class="p_detail_header_discount_coupon_text2 p_detail_header_discount_coupon_text">店铺</text>
          <text class="p_detail_header_discount_coupon_text3 p_detail_header_discount_coupon_text">领取</text>
        </div>
        <div class="p_detail_header_notice">
          <div class="notice_text">
            <text>公告：欢迎光临，很高兴为您服务~</text>
          </div>
          <image class="notice_img" src="/static/images/first/common_xiala@2x.png"></image>
        </div>
      </div>
    </div>
    <!-- p_detail_title -->
    <div class="p_detail_title">
      <div class="p_detail_title_item" v-for="(tab,index) in title" :key="index">
        <div class="p_detail_title_item_title" :id="index" @click="tabClick" :class="{'tabs_active':activeindex == index}">
          {{tab}}
        </div>
      </div>
      <div :class="navbarSliderClass" class="slider_toggle"></div>
    </div>
    <!-- navbar_content -->
    <div class="navbar_content">
      <div class="navbar_content_1" v-if="activeIndex != 0">
        <scroll-view class="navbar_content_1_scroll" :scroll-y="true" @scrolltolower="scrolltolower" @scroll="scroll"
          scroll-with-animation="true">
          <div class="navbar_content_1_title" v-for="(navItem,index) in list"  :id="index" :key="index" :class="{'active_list':activeListIndex == index}" @click="toggleList">
            <image v-if="navItem.img" class="navbar_content_1_title_img" :src="navItem.img"></image>
            <view class="navbar_content_1_title_text"><text>{{navItem.text}}</text></view>
          </div>
        </scroll-view>
        <scroll-view class="navbar_content_1_scroll_content" :scroll-y="true" @scrolltolower="scrolltolower" @scroll="scroll" scroll-with-animation="true">
          
        </scroll-view>
      </div>
      <div class="navbar_content_1" v-if="activeIndex != 1">
        <scroll-view class="navbar_content_1_scroll" :scroll-y="true" @scrolltolower="scrolltolower" @scroll="scroll"
          scroll-with-animation="true">
          <div class="navbar_content_1_title" v-for="(navItem,index) in list"  :id="index" :key="index" :class="{'active_list':activeListIndex == index}" @click="toggleList">
            <image v-if="navItem.img" class="navbar_content_1_title_img" :src="navItem.img"></image>
            <view class="navbar_content_1_title_text"><text>{{navItem.text}}</text></view>
          </div>
        </scroll-view>
      </div>
      <div class="navbar_content_1" v-if="activeIndex != 2">
        <scroll-view class="navbar_content_1_scroll" :scroll-y="true" @scrolltolower="scrolltolower" @scroll="scroll"
          scroll-with-animation="true">
          <div class="navbar_content_1_title" v-for="(navItem,index) in list"  :id="index" :key="index" :class="{'active_list':activeListIndex == index}" @click="toggleList">
            <image v-if="navItem.img" class="navbar_content_1_title_img" :src="navItem.img"></image>
            <view class="navbar_content_1_title_text"><text>{{navItem.text}}</text></view>
          </div>
        </scroll-view>
      </div>
    </div>
  </div>
</template>

<script>
  // Use Vuex
  import store from './store'

  export default {
    data() {
      return {
        discountArr: ["20减10", "40减15", "60减30", "90减45"],
        title: ["菜单", "评价", "商家"],
        activeindex: 0,
        activeListIndex: 0,
        list:[
          {
            img:"/static/images/first/meal_ic_cd_rx@2x.png",
            text:"热销"
          },
          {
            img:"/static/images/first/meal_ic_cd_rx@2x.png",
            text:"折扣"
          },
          {
            img:"/static/images/first/meal_ic_cd_rx@2x.png",
            text:"优惠"
          },
          {
            img:"/static/images/first/meal_ic_cd_rx@2x.png",
            text:"水果现切"
          },
          {
            text:"国产美味"
          },
          {
            text:"进口生鲜"
          }
        ]
      }
    },
    computed: {
      navbarSliderClass() {
        if (this.activeindex === 0) {
          return 'slider_toggle_0'
        } else if (this.activeindex === 1) {
          return 'slide_toggle_1'
        } else if (this.activeindex === 2) {
          return 'slide_toggle_2'
        }
      }
    },
    methods: {
      tabClick(e) {
        console.log(e);
        this.activeindex = Number(e.currentTarget.id);
        // console.log(this.activeindex);
      },
      scrolltolower() {
        // console.log(5);
      },
      scroll(e) {
        // console.log(6);
        // console.log(e);
      },
      toggleList(e){
        this.activeListIndex = Number(e.currentTarget.id);
      }
    }
  }
</script>

<style>
  .p_detail {
    width: 750rpx;
    height: 368rpx;
  }

  .p_detail_header {
    width: 750rpx;
    height: 368rpx;
    background: linear-gradient(180deg, #fec855 0%, #FFFFFF 50%, #FFFFFF 100%);
  }

  .p_detail_header_c {
    width: 690rpx;
    height: 290rpx;
    margin-left: 30rpx;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rpx 2rpx 8rpx 0rpx rgba(0, 0, 0, 0.05);
    border-radius: 10rpx;
    padding-top: 37rpx;
  }

  .p_detail_header_c_t {
    width: 630rpx;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    margin-left: 30rpx;
    margin-bottom: 35rpx;
  }

  .p_detail_header_c_img {
    width: 90rpx;
    height: 90rpx;
    border-radius: 4rpx;
    margin-right: 24rpx;
  }

  .p_detail_header_c_title {
    width: 477rpx;
    height: 90rpx;
  }

  .p_detail_header_c_title_b {
    font-size: 36rpx;
    font-weight: bold;
    color: #000000;
  }

  .p_detail_header_c_title_l {
    font-size: 24rpx;
    font-weight: 500;
    color: #999999;
  }

  .p_detail_header_c_title_l ._text {
    margin-right: 16rpx;
  }

  .p_detail_header_c_rate {
    position: relative;
    width: 64rpx;
    height: 72rpx;
  }

  .p_detail_header_c_rate_img {
    width: 64rpx;
    height: 72rpx;
  }

  .p_detail_header_c_rate_text1 {
    position: absolute;
    top: 8rpx;
    left: 14rpx;
    font-size: 24rpx;
    line-height: 28rpx;
    color: #fff;
    text-align: center;
  }

  .p_detail_header_c_rate_text2 {
    position: absolute;
    bottom: 12rpx;
    left: 8rpx;
    font-size: 24rpx;
    line-height: 28rpx;
    color: #fff;
    text-align: center;
  }

  /* discount */
  .p_detail_header_discount {
    margin: 0 30rpx;
    width: 690rpx;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 15rpx;
  }

  .discount_item {
    height: 34rpx;
    padding: 0 10rpx;
    text-align: center;
    line-height: 34rpx;
    font-size: 20rpx;
    border: 1rpx solid rgba(255, 74, 74, 1);
    border-radius: 2rpx;
    color: #FF4A4A;
    margin-right: 20rpx;
  }

  /* coupon */
  .p_detail_header_discount_coupon {
    width: 256rpx;
    height: 50rpx;
    position: relative;
    margin-bottom: 10rpx;
    margin-left: 30rpx;
  }

  .p_detail_header_discount_coupon_img {
    width: 256rpx;
    height: 50rpx;
    position: absolute;
    top: 0;
    left: 0;
  }

  .p_detail_header_discount_coupon_text {
    font-size: 26rpx;
    color: #FFFFFF;
    line-height: 50rpx;
    text-align: center;
  }

  .p_detail_header_discount_coupon_text2 {
    margin: 0 32rpx;
  }

  /* notice */
  .p_detail_header_notice {
    width: 630rpx;
    height: 50rpx;
    margin: 0 30rpx;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .notice_text {
    font-size: 24rpx;
    color: #999999;
  }

  .notice_img {
    width: 16rpx;
    height: 10rpx;
  }

  /* title */
  .p_detail_title {
    width: 750rpx;
    height: 88rpx;
    line-height: 88rpx;
    border-bottom: 1rpx solid #e5e5e5;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }

  .p_detail_title_item {
    margin-left: 35rpx;
    margin-right: 50rpx;
  }

  .p_detail_title_item_title {
    font-size: 34rpx;
    color: #999999;
  }

  .p_detail_title_item_title.tabs_active {
    color: #000000;
  }

  .slider_toggle {
    width: 50rpx;
    height: 6rpx;
    background: #FFBA17;
    position: absolute;
    bottom: 0;
    left: 40rpx;
    transition: transform .2s ease-in;
  }

  .slider_toggle.slider_toggle_0 {
    transform: translateX(0rpx);
  }

  .slider_toggle.slide_toggle_1 {
    transform: translateX(150rpx);
  }

  .slider_toggle.slide_toggle_2 {
    transform: translateX(300rpx);
  }

  /* navbar content */
  .navbar_content {
    width: 2250rpx;
    height: 777rpx;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .navbar_content .navbar_content_1 {
    width: 750rpx;
    height: auto;
  }

  .navbar_content_1_scroll {
    width: 200rpx;
    height: 777rpx;
    background: #F5F5F5;
  }

  .navbar_content_1_title {
    width: 200rpx;
    height: 100rpx;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
  }
    .navbar_content_1_title.active_list{
    background: #FFFFFF;
    }
  .navbar_content_1_title.active_list .navbar_content_1_title_text{
    font-size: 34rpx;
    color: #000000;
  }
  .navbar_content_1_title .navbar_content_1_title_img {
    width: 26rpx;
    height: 28rpx;
  }

  .navbar_content_1_title .navbar_content_1_title_text{
    text-align: center;
    font-size: 30rpx;
    color: #666666;
  }
</style>

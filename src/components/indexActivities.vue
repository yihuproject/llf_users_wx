<template>
  <div class="activities">
    <image  class="activities_img" :src="bgImg"></image>
    <image  class="activities_img_title" :src="activitiesImg"></image>
    <view class="activities_title">
      <view  class="activities_titleb">
        <text>{{activitiesTitle}}</text>
      </view>
      <view  class="activities_titlel">
        <text>{{activitiesDetail}}</text>
      </view>
    </view>
  </div>
</template>

<script>
  export default{
    data () {
      return {
      }
    },
    props: {
      bgImg: {
        type: String,
        default: ""
      },
      activitiesImg:{
        type: String,
        default: ""
      },
      activitiesTitle:{
        type: String,
        default: ""
      },
      activitiesDetail:{
        type: String,
        default: ""
      }
    },
  }
</script>

<style scoped>
  .activities{
    width: 210rpx;
    height: 240rpx;
    position: relative;
  }
  .activities_img{
    width: 210rpx;
    height: 240rpx;
  }
  .activities_img_title{
    width: 108rpx;
    height: 36rpx;
    position: absolute;
    top: 0;
    left: 0;
  }
  .activities_title{
    width: 180rpx;
    height: 55rpx;
    padding: 12rpx 0;
    position: absolute;
    bottom: 20rpx;
    left: 15rpx;
    background:rgba(255,255,255,1);
    opacity:0.94;
    border-radius:4px;
  }
  .activities_titleb{
    color:#262626;
    font-size: 22rpx;
    text-align: center;
    font-weight: bold;
  }
  .activities_titlel{
    color:#999999;
    font-size: 18rpx;
    text-align: center;
  }
</style>

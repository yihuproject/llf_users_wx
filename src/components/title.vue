<template>
  <div class="title">
    <image :src="img"></image>
    <view class="title_b"><text>{{title_b}}</text></view>
    <view class="title_l"><text>{{title_l}}</text></view>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        
      }
    },
    props: {
      img: {
        type: String,
        default: ""
      },
      title_b: {
        type: String,
        default: ""
      },
      title_l: {
        type: String,
        default: ""
      },
    },
  }
</script>

<style>
  .title{
    width: auto;
    height: 88rpx;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .title ._image{
    width: 38rpx;
    height: 38rpx;
    margin-top: 25rpx;
    margin-right:19rpx;
  }
  .title .title_b{
    font-size:38rpx;
    color:#000;
    line-height: 88rpx;
    margin-right:19rpx;
    vertical-align: middle;
    font-weight: bold;
  }
  .title .title_l{
    font-size:24rpx;
    color:#333;
    line-height: 100rpx;
    vertical-align: bottom;
    margin-right:19rpx;
  }
</style>

<template>
  <navigator class="business" url="/pages/productDetail/main">
      <image class="business_img" :src="businessImg"></image>
      <div class="business_store">
        <view class="business_center">
          <view class="business_center_title">
            <text>{{businessTitle}}</text>
          </view>
          <view class="business_center_rate">
            <view class="business_center_rate_star">
              <div class="star_show" v-for="(s,index) in Ratemax" :key="index" :class="{'wx_rate_active':index<star}">
                <div class="weui-rate-item-def"></div>
              </div>
            </view>
            <view class="business_center_rate_count">月售{{businessCount}}</view>
          </view>
          <view class="business_center_foot">
            <text>起送￥{{sDelivery}}</text>
            <text class="business_center_foot_line">|</text>
            <text>配送￥{{deliver}}</text>
          </view>
        </view>
        <view class="business_right">
            <text>{{time}}分钟 | {{distance}}km</text>
        </view>
      </div>
      <div class="business_discount" v-if="discountTitle">
        <view class="business_discount_title">{{discountTitle}}</view>
        <view class="business_discount_activity">
          <view class="business_discount_activity_item" v-for="(a_item,index) in discountItem" :key="index">{{a_item.a}}</view>
        </view>
      </div>
  </navigator>
</template>

<script>
  export default{
    data(){
      return {
        Ratemax:5
      }
    },
    mounted(){
      console.log(this.star);
    },
    props: {
      businessImg: {
        type: String,
        default: ""
      },
      businessTitle: {
        type: String,
        default: ""
      },
      star: {
        type: Number,
        default: ""
      },
      businessCount: {
        type: Number,
        default: ""
      },
      sDelivery: {
        type: Number,
        default: ""
      },
      deliver: {
        type: Number,
        default: ""
      },
      time: {
        type: Number,
        default: ""
      },
      distance: {
        type: Number,
        default: ""
      },
      discountTitle:{
        type: String,
        default: ""
      },
      discountItem:{
        type:Object,
        default:""
      }
    },
  }
</script>

<style>
  .business{
    width: 690rpx;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: 20rpx;
  }
  .business_store{
    width: 550rpx;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .business .business_img{
    width: 124rpx;
    height: 124rpx;
    margin-top: 20rpx;
  }
  .business_store .business_center{
    height: 124rpx;
    margin-top: 20rpx;
  }
  .business_store .business_center .business_center_title{
    font-size: 34rpx;
    color:#000000;
    font-weight: bold;
    line-height: 40rpx;
  }
  .business_store .business_center .business_center_rate{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    line-height: 40rpx;
  }
  .business_store .business_center .business_center_rate .business_center_rate_star{
    display: flex;
    margin-top: 10rpx;
  }
  .star_show .weui-rate-item-def {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAsVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADHx8cAAADt7e2ysrJ6enoAAADu7u7MzMzBwcGHh4cAAAAAAADa2trS0tLExMS+vr42NjYAAADv7+/r6+vq6uro6Ojm5ubKysq8vLwAAADr6+vf39/c3NzPz8+1tbWrq6vo6Ojm5ubOzs6vr6+RkZHj4+Pi4uLV1dW4uLienp6ampplZWVWVlbv7+8EiCYnAAAAOnRSTlMAPCsDJgsGOg4hNyMapgj3jGQX/K2eah4Sx7eim0ow/fHv6uGqlzTz0820j4Xo5LGJcNzYvZR7eFpV7G3f4gAAAcpJREFUSMeVVulyskAQdBZwWQ4F5FREjUeiMdd3JvP+DxZCUVskzMrSf+mu3pqZnmGigG1PxoGxcXw7DK1xBsvLKAsLcANjLMwXxNjU589gg7iAmb7BAWv4rr7BAmvMYapr4GODlabF9MugseB6Fu4KW5SZnsEcW2y5oSEQCUocNSwMfo8ST86wRVZiB4/ewPtzj++6gr3j2bSJYUcuc9Zvj3v8hl9BunaYG3VkhhWJmpq+xucdkrg7H16/ZCKyapmA8OoXdziIp8K/hiDqQQjuURPbwGwKHzzr8feBmDTw4EGH/wCyxhEUw/wCoolEDn+G+EvIv60V/nKbH3P7x55wDrf4vmP1cnlK1PzkNCPmqCpV/GNFRs+oLor3MMWQWyEt+FBF2wtowb9ctV6WiicJheC0V8xEpUgzII050IL8DRVQHJeM7px6FbBCOXj0qeDbDmfXzffziVzy753YHx3n2Mn5mmpddJXRLXlmGBkvZdj/U61z47aICRdGU2bBk3l7KajWVb+xxmIFrvSfurBqbsWZUW2rP238li4lJhw2tSsnbn+KGIM569XChJhsnff3AozsqMVgGfRbx1JJ77uztN860775syIFn72pvWujU85XAAAAAElFTkSuQmCC);
  }
  .wx_rate_active .weui-rate-item-def {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAilBMVEUAAAD/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyr/uyoEd/G7AAAALXRSTlMA+fUzFQ/vioT9vJE9tqNmLRsL2KuYe005JiID6ebhoJtxbF/qzMSxWx9FQgn3q32nAAABYUlEQVRIx5XV2XKDMAwFUJt9h5BAyL5vbe///14zNMShWNg+T8wgwSAZiRGShJmJUrN4G7CNEm7AzCS+ABAuDBJmeMr04xchnvhSO2GHVqUbv+Ro8YlmQoUXXy9+wrsEy9FKiPEW6MQ7lkjwXKbm40Ot9wJh/aNMCNBzVDz+++ihZ5Mn8lK5TR5Ha0htojhvxOeX9slPt1Dapv7JLhnzQxgIfbbaw0C1EnVREp0/QNOBvZw4NPA7e5tbULLmvbnlQcFrWI+9xqhNMfgvR3s3fUh+tClIF0d6nK4gRC41UAkPJpeDMCfnF4EaN+RXX+XxLt3klTThCwRqudQgUKMgBYFaFR5IU+kWwafzGZ9kR+MOwavLsvYUrYtFFQO3LXNgjY7xSxcev9/vxLw7fsP48u8erya9M7/nVOuSdk5ly0EtsnbSFUwQs2ZWSLf8DUAu2eWpzQh2hB37L2vYiGTfXf0Cn7ynb0Flqc0AAAAASUVORK5CYII=);
  }
  .business_store .business_center .business_center_rate .business_center_rate_count{
    font-size: 24rpx;
    color:#333333;
  }
  .business_store .business_center_foot{
    font-size: 24rpx;
    color:#333333;
  }
  .business_store .business_center_foot .business_center_foot_line{
    color:#999999;
    font-size: 24rpx;
    margin:0 15rpx;
  }
  .business_store .business_right{
    font-size: 24rpx;
    color: #999999;
    line-height: 164rpx;
  }
  .business_discount{
    width: 550rpx;
    margin-left: 140rpx;
    border-top:2rpx solid rgba(229,229,229,1);
  }
  .business_discount .business_discount_title{
    width:98rpx;
    height:34rpx;
    border:1rpx solid rgba(255,133,60,1);
    border-radius:2rpx;
    font-size:20rpx;
    color:rgba(255,133,60,1);
    text-align:center;
    margin-top: 22rpx;
  }
  .business_discount .business_discount_activity{
    width: auto;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-top: 10rpx;
  }
  .business_discount .business_discount_activity .business_discount_activity_item{
    width: 88rpx;
    height: 34rpx;
    line-height: 34rpx;
    border:1rpx solid rgba(255,74,74,1);
    border-radius:2rpx;
    font-size:20rpx;
    color:rgba(255,74,74,1);
    text-align:center;
    margin-right: 13rpx;
    padding:0 12rpx;
  }
  
  .star_show{
    position: relative;
    width: 22rpx;
    height: 22rpx;
    flex: 0 1 auto;
    margin-right: 6rpx;
  }
</style>

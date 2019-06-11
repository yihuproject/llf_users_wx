import Vue from 'vue'
import App from './App'
// import QQMapWX from "/static/map/qqmap-wx.js/qqmap-wx-jssdk.js"
// console.log(QQMapWX)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

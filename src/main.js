import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from '@/router'

new Vue({
  render: h => h(App),
  //注冊路由，底下的寫法是KV一致省略Ｖ（router小寫的）
  //註冊路由信息：當這裡書寫router的時候，組件上都擁有$route,$router屬性
  router
}).$mount('#app')

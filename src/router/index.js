// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)

// 引入路由組件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 配置路由
export default new VueRouter({
  //配置路由
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { show: true }
    },
    {
      path: '/search/:keyword',
      component: Search,
      meta: { show: true },
      name: 'search'
    },
    {
      path: '/login',
      component: Login,
      meta: { show: false }
    },
    {
      path: '/Register',
      component: Register,
      meta: { show: false }
    },
    // 重定向，在項目跑起來的時候，訪問/，立馬定向到首頁
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
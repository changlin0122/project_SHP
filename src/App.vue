<template>
  <div>
    <Header></Header>
    <!-- 路由組件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home,Search是顯示的，在Login,Register隱藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// 引入
import Header from "./components/Ｈeader";
import Footer from "./components/Footer";
export default {
  nanme: "",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
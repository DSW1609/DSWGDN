<template>
  <div id="app">
    <transition mode="out-in" enter-active-class="animated slideInDown">
      <keep-alive exclude="Detail">
        <router-view />
      </keep-alive>
    </transition>
    <!-- 顶部导航栏 -->
    <Nhead />
    <!-- 导航栏 -->
    <NavBar v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "components/navbar/NavBar";
import Nhead from "components/nhead/Nhead";
export default {
  name: "App",
  data() {
    return {
      isShow: true
    };
  },
  components: {
    NavBar,
    Nhead
  },
  watch: {
    $route(to, from) {
      if (this.$route.path == "/detail") {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  }
};
</script>

<style>
@import "assets/css/base.css";
body::-webkit-scrollbar {
  display: none;
}
</style>

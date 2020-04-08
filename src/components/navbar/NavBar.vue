<template>
  <ul class="navbar">
    <li
      v-for="(t,index) in navbar"
      :key="index"
      @click="navClick(index)"
      @mouseover="navMover(index)"
      @mouseout="navMout(index)"
    >
      <router-link :to="router[index]">
        <img :src="index == cIndex||index==mIndex ? imgAcSrc : imgPathSrc" alt />
        <div class="item" :style="index == cIndex||index==mIndex ? WidthA : WidthD">{{t}}</div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      navbar: ["首页", "路线", "课程"],
      // 路由切换
      router: ["/index", "/way", { path: "/detail", query: { id: 0 } }],
      WidthD: {
        width: "0px"
      },
      WidthA: {
        width: "80px"
      },
      // 默认显示
      cIndex: 0,
      // 触碰中显示
      mIndex: 0
    };
  },
  methods: {
    navClick(index) {
      this.cIndex = index;
    },
    navMover(index) {
      this.mIndex = index;
    },
    navMout() {
      this.mIndex = this.cIndex;
    }
  },
  computed: {
    imgPathSrc() {
      return require("assets/img/index/tt.svg");
    },
    imgAcSrc() {
      return require("assets/img/index/tt_ac.svg");
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 50px;
  height: 180px;
  right: 1.5vw;
  z-index: 999;
  top: -50px;
  bottom: 0;
  margin: auto;
  transition: 0.3s;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 16px 0 rgba(28, 31, 33, 0.1);
}
li {
  position: relative;
  list-style: none;
  width: 50px;
  text-align: center;
  margin-top: 5px;
}
li img {
  position: relative;
  width: 50px;
}
.item {
  position: absolute;
  height: 30px;
  background: #4286f4;
  color: #fff;
  top: 0;
  right: 55px;
  transition: 0.35s;
  top: 10px;
  overflow: hidden;
  line-height: 30px;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
</style>
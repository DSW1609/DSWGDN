<template>
  <el-carousel :interval="5000" height="400" @change="((pre) => {change(pre)})" arrow="always">
    <el-carousel-item v-for="(S,index) in Img" :key="index">
      <img :src="S" alt />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: {
    Img: {
      type: Array,
      default: []
    }
  },
  methods: {
    change(pre) {
      this.$emit("C_Change", pre);
    }
  }
};
</script>

<style>
.el-carousel__indicators--horizontal {
  left: 75%;
  transform: none;
}
.el-carousel__container {
  height: 400px;
}
.el-carousel__container img {
  width: 100%;
  height: 100%;
}
.el-carousel__arrow {
  transform: scale(1.5);
  top: 45%;
}
</style>

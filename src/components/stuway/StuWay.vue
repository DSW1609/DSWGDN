<template>
  <div>
    <div class="StuWay" v-for="(S,index) in StuWay" :key="index">
      <!-- 左侧图片 -->
      <img :src="S.Img" class="S_Im" alt />
      <img :src="S.Img" class="S_Im2" alt />
      <img :src="S.Img" class="S_Im3" alt />
      <!-- 右侧详情 -->
      <div class="Stu_R">
        <!-- 标题 -->
        <div class="Stu_Tit">{{S.Tit}}</div>
        <!-- 介绍 -->
        <div class="Stu_J">{{S.J}}</div>
        <!-- 步骤 -->
        <div class="Stu_B Stu_J">{{S.B}}</div>
        <!-- 收藏 -->
        <div class="Stu_S Stu_J">
          <img src="~assets/img/way/SC.svg" alt />
          {{S.S}}人收藏
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    StuWay: {}
  }
};
</script>

<style scoped>
.Stu_S img {
  position: relative;
  float: left;
  width: 20px;
  margin-right: 3px;
}
.Stu_J {
  position: relative;
  color: #333;
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
}
.Stu_B,
.Stu_S {
  float: left;
  margin-top: 15px;
  margin-right: 20px;
  color: #666;
}
.Stu_Tit {
  position: relative;
  font-size: 16px;
  font-weight: bold;
}
.Stu_R {
  position: absolute;
  left: 165px;
  top: 20px;
  width: 390px;
  height: 130px;
}
.S_Im3 {
  position: absolute;
  top: 25px;
  left: 0;
  transform: scale(0.9);
  opacity: 0.3;
  border-radius: 8px;
}
.S_Im2 {
  position: absolute;
  top: 18px;
  left: 0;
  transform: scale(0.95);
  opacity: 0.6;
  border-radius: 8px;
}
.S_Im {
  position: absolute;
  top: 10px;
  border-radius: 8px;
  z-index: 888;
  cursor: pointer;
  transition: 0.3s;
}
.S_Im:hover {
  top: 6px;
}
.StuWay {
  position: relative;
  float: left;
  width: 580px;
  height: 180px;
  color: #000;
  cursor: pointer;
}
.StuWay:hover {
  color: #f20d0d;
}
</style>
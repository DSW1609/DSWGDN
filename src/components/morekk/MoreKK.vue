<template>
  <div class="MoreKK">
    <!-- 标题 -->
    <div class="M_Tit">
      {{An[0].tit}}
      <em>{{An[0].titem}}</em>
    </div>
    <!-- 下方多个按钮块 -->
    <div class="M_BC" v-if="An[0].Z==0">
      <!-- 单个按钮块 -->
      <div class="M_BC_Item" v-for="(An,index) in An[0].AN" :key="index">
        <!-- 左侧logo -->
        <img :src="An.src" class="M_BC_Im" />
        <!-- 标题 -->
        <div class="M_B_Tit">{{An.tit}}</div>
        <!-- 副标题 -->
        <div class="M_B_MT">{{An.Ftit}}</div>
      </div>
    </div>
    <!-- 不包含图片 -->
    <div class="M_BC2" v-if="An[0].Z==1">
      <!-- 单个按钮块 -->
      <div
        class="M_BC_Item M2_BC_Item"
        :style="{backgroundImage: 'url('+ src+')',backgroundColor:An.BC,backgroundSize:'50px'}"
        v-for="(An,index) in An[0].AN"
        :key="index"
      >
        <!-- 标题 -->
        <div class="M_B2_Tit">{{An.tit}}</div>
        <!-- 副标题 -->
        <div class="M_B2_MT">{{An.Ftit}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require("assets/img/morekk/SYY.png")
    };
  },
  props: {
    An: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
.M2_BC_Item:hover {
  flex: 2;
}
.M_B_MT,
.M_B2_MT {
  position: absolute;
  top: 45px;
  left: 75px;
  font-size: 12px;
  color: #333;
}
.M_B2_MT {
  position: relative;
  left: 0;
  top: 30px;
  font-size: 14px;
  color: #fff;
}
.M_B_Tit,
.M_B2_Tit {
  position: absolute;
  top: 20px;
  left: 75px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #000;
}
.M_B2_Tit {
  position: relative;
  left: 0;
  font-size: 20px;
  color: #fff;
}
.M_BC_Im {
  position: relative;
  width: 50px;
  height: 50px;
  top: 15px;
  left: 15px;
}
.M_BC_Item {
  position: relative;
  flex: 1;
  border-radius: 6px;
  background: #f3f5f6;
  margin-right: 15px;
  cursor: pointer;
  transition: 0.3s;
}
.M_BC_Item:hover {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}
.M_BC,
.M_BC2 {
  position: relative;
  display: flex;
  width: 1165px;
  height: 80px;
  margin-top: 24px;
}
.M_BC2 {
  text-align: center;
  height: 90px;
}
.M_Tit em {
  position: relative;
  font-style: normal;
  font-size: 14px;
  color: #555;
  margin-left: 5px;
  top: -1px;
  font-weight: normal;
}
.M_Tit {
  position: relative;
  height: 30px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
}
.MoreKK {
  position: relative;
  top: 50px;
  width: 1150px;
  height: 180px;
  margin: 0 auto;
}
</style>
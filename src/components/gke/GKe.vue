<template>
  <div>
    <!-- 单个网课 -->
    <div class="K_Item" v-for="(k,index) in Ke" :key="index">
      <!-- 图片部分 -->
      <div class="K_Item_Im">
        <!-- 左上标签 -->
        <span class="K_Item_BLT" :style="{background:k.BC}">{{k.BLT}}</span>
        <!-- 左下标签群 -->
        <div class="K_Item_LB" v-if="k.LB">
          <span class="K_Item_BLB" v-for="(b,index) in k.LB" :key="index">{{b}}</span>
        </div>
        <!-- 图片 -->
        <img :src="k.Src" alt />
      </div>
      <!-- 标题 -->
      <div class="Ke_Tit">{{k.Tit}}</div>
      <!-- 课程信息 -->
      <div class="Ke_Xx">
        <!-- 等级 -->
        <span>{{k.Level}}</span>
        <!-- 人数 -->
        <span>
          <img src="~assets/img/goodke/PP.svg" alt />
          {{k.Pp}}
        </span>
        <!-- 评价 -->
        <span class="Ke_p">{{k.Pj}}</span>
      </div>
      <!-- 价格 -->
      <div class="Ke_Pc">￥{{k.Pc}}.00</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Ke: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
.Ke_Pc {
  position: relative;
  width: 96%;
  left: 2%;
  margin-top: 10px;
  color: #f1373d;
  font-weight: bold;
  font-size: 16px;
}
.Ke_p {
  position: absolute;
  right: 0;
}
.Ke_Xx img {
  position: relative;
  width: 16px;
  top: 2.5px;
  left: 2px;
}
.Ke_Xx {
  position: relative;
  width: 96%;
  left: 2%;
  margin-top: 20px;
}
.Ke_Xx span {
  margin-right: 10px;
  color: #333;
  font-size: 13px;
}
.Ke_Tit {
  position: relative;
  width: 96%;
  left: 2%;
  height: 30px;
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
  line-height: 24px;
}
.K_Item_BLB {
  float: left;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  margin-left: 5px;
  padding: 3px 6px;
  border-radius: 5px;
  font-size: 14px;
}
.K_Item_LB {
  position: absolute;
  bottom: 10px;
}
.K_Item_BLT {
  position: absolute;
  padding: 2px 10px;
  border: 2px solid #fff;
  border-radius: 15px;
  top: 10px;
  left: -10px;
  font-size: 14px;
  color: #fff;
}
.K_Item_Im img {
  width: 100%;
  border-radius: 8px;
}
.K_Item_Im {
  position: relative;
  width: 270px;
  height: 150px;
  margin: 0 auto;
}
.K_Item {
  position: relative;
  float: left;
  width: 270px;
  height: 270px;
  margin-top: 20px;
  margin-right: 22px;
  color: #000;
  transition: 0.3s;
  cursor: pointer;
}
.K_Item:hover {
  color: #f1373d;
}
</style>
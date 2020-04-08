<template>
  <div class="N_Head">
    <!-- LOGO -->
    <router-link to="/index">
      <div class="N_Head_Logo">
        <img src="~assets/img/head/NEWLINGGAN.png" alt />
        <!-- 文字 -->
        <div class="N_Head_Te">
          新的灵感
          <br />
          <em>DSWNEWLG</em>
        </div>
      </div>
    </router-link>
    <!-- 菜单 -->
    <div class="N_Head_Menu">
      <li v-for="(M,index) in N_Menu" :key="index">{{M}}</li>
    </div>
    <!-- 搜索 -->
    <div class="N_Head_Ss">
      <!-- 搜索图标 -->
      <img src="~assets/img/head/Ss.svg" alt />
      <input type="text" class="N_H_In" placeholder="请输入关键字... Vue Python 王嘉辉 DSW" />
    </div>
    <!-- 右侧 -->
    <div class="N_Head_R">
      <span class="N_DLD">下载APP</span>
      <span class="N_BC">
        <img src="~assets/img/head/BC.svg" alt />
        购物车
      </span>
      <span>登录</span>
      <i>/</i>
      <span>注册</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 菜单
      N_Menu: ["免费课程", "实战课堂", "金职位", "专栏", "大家问", "手记"]
    };
  }
};
</script>

<style scoped>
.N_BC {
  border: 1px solid #d9dde1;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
}
.N_BC img {
  position: relative;
  width: 15px;
  top: 2px;
  margin-right: 5px;
}
.N_Head {
  position: fixed;
  width: 100vw;
  height: 65px;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  top: 0;
}
.N_Head_Logo {
  position: absolute;
  width: 150px;
  height: 45px;
  left: 20px;
  top: 10px;
  transform: scale(0.8);
}
.N_Head_Logo img {
  width: 45px;
  height: 45px;
  border-radius: 30px;
}
.N_Head_Te {
  position: absolute;
  top: 8px;
  left: 55px;
  color: #333;
  font-weight: bold;
  font-size: 21px;
  line-height: 16px;
}
.N_Head_Te em {
  font-style: normal;
  font-size: 14px;
}
.N_Head_Menu {
  position: absolute;
  height: 45px;
  left: 180px;
  top: 10px;
}
.N_Head_Menu li {
  list-style: none;
  float: left;
  font-size: 15px;
  line-height: 45px;
  margin-right: 10px;
  transition: 0.3s;
  padding: 0px 10px;
}
.N_Head_Menu li:hover {
  background: #4286f4;
  color: #fff;
  cursor: pointer;
}
.N_Head_Ss {
  position: absolute;
  width: 330px;
  height: 40px;
  top: 12.5px;
  background: #e9e9e9;
  left: 650px;
  border-radius: 10px;
}
.N_H_In {
  position: absolute;
  width: 300px;
  height: 36px;
  top: 2px;
  left: 2px;
  outline: none;
  border: none;
  background: #e9e9e9;
  font-size: 14px;
  text-indent: 15px;
}
.N_Head_Ss img {
  position: absolute;
  right: 8px;
  top: 9px;
  width: 22px;
}
.N_Head_R {
  position: absolute;
  right: 18px;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  top: 12.5px;
}
.N_Head_R span {
  margin-right: 18px;
}
.N_Head_R i {
  position: absolute;
  margin-left: -10px;
  color: #ccc;
}
.N_Head_R span:hover {
  color: #4286f4;
  cursor: pointer;
}
</style>
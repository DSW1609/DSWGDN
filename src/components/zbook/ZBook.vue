<template>
  <div>
    <!-- 单个专栏书籍 -->
    <div class="Z_Book" v-for="(Z,index) in ZBook" :key="index">
      <!-- 左侧图片 -->
      <img class="Z_B_Im" :src="Z.Img" alt />
      <!-- 下方标签 -->
      <span class="Z_B_Sp">试读</span>
      <!-- 右侧信息 -->
      <div class="Z_B_R">
        <!-- 标题 -->
        <div class="Z_B_Tit">{{Z.Tit}}</div>
        <!-- 章节 -->
        <div class="Z_B_J">共{{Z.Z}}节 · {{Z.Buy}}人已购买</div>
        <!-- 作者 -->
        <div class="Z_B_At">{{Z.At}}</div>
        <!-- 价格 -->
        <div class="Z_B_Pc">￥ {{Z.Pc}}.00</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ZBook: [
        {
          // 图片
          Img: require("assets/img/way/z1.jpg"),
          // 标题
          Tit: "解锁前端面试体系核心攻略",
          // 章节
          Z: 50,
          // 购买人数
          Buy: 159,
          // 作者
          At: "DSW1609/大型互联网公司业务栈Owner",
          // 价格
          Pc: 78
        },
        {
          // 图片
          Img: require("assets/img/way/z2.jpg"),
          // 标题
          Tit: "实战派 MySQL 高阶应用指南",
          // 章节
          Z: 50,
          // 购买人数
          Buy: 159,
          // 作者
          At: "DSW1609/大型互联网公司业务栈Owner",
          // 价格
          Pc: 78
        },
        {
          // 图片
          Img: require("assets/img/way/z3.jpg"),
          // 标题
          Tit: "Web前端开发修炼指南",
          // 章节
          Z: 50,
          // 购买人数
          Buy: 159,
          // 作者
          At: "DSW1609/大型互联网公司业务栈Owner",
          // 价格
          Pc: 78
        },
        {
          // 图片
          Img: require("assets/img/way/z4.jpg"),
          // 标题
          Tit: "高薪之路--Python 面试题精选集",
          // 章节
          Z: 50,
          // 购买人数
          Buy: 159,
          // 作者
          At: "DSW1609/大型互联网公司业务栈Owner",
          // 价格
          Pc: 78
        },
        {
          // 图片
          Img: require("assets/img/way/z5.jpg"),
          // 标题
          Tit: "面试官系统精讲Java源码及大厂真题",
          // 章节
          Z: 50,
          // 购买人数
          Buy: 159,
          // 作者
          At: "DSW1609/大型互联网公司业务栈Owner",
          // 价格
          Pc: 78
        },
        {
          // 图片
          Img: require("assets/img/way/z6.jpg"),
          // 标题
          Tit: "给程序员的职场情商课",
          // 章节
          Z: 50,
          // 购买人数
          Buy: 159,
          // 作者
          At: "DSW1609/大型互联网公司业务栈Owner",
          // 价格
          Pc: 78
        }
      ]
    };
  }
};
</script>

<style scoped>
.Z_B_Pc {
  position: relative;
  height: 26px;
  font-size: 18px;
  color: #3e7eff;
  margin-top: 15px;
  font-weight: bold;
}
.Z_B_At {
  position: relative;
  height: 26px;
  font-size: 13px;
  color: #333;
  margin-top: 10px;
}
.Z_B_J {
  position: relative;
  height: 26px;
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid #ccc;
}
.Z_B_R {
  position: absolute;
  width: 240px;
  left: 118px;
  top: 0;
}
.Z_B_Tit {
  position: relative;
  height: 50px;
  color: #000;
  font-size: 16px;
  font-weight: bold;
}
.Z_B_Sp {
  position: absolute;
  left: 10px;
  top: 130px;
  padding: 2px 4px;
  background: #3e7eff20;
  color: #3e7eff;
  font-size: 12px;
  font-weight: bold;
}
.Z_Book {
  position: relative;
  float: left;
  width: 400px;
  height: 200px;
  cursor: pointer;
}
.Z_B_Im {
  position: relative;
  width: 104px;
  height: 118px;
}
</style>
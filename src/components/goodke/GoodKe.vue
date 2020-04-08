<template>
  <!-- 新上好课 -->
  <div class="NewGoodKe">
    <!-- 标题 -->
    <div class="K_Tit">新上好课</div>
    <!-- 单个网课 -->
    <GKe :Ke="Ke" />
  </div>
</template>

<script>
import GKe from "components/gke/GKe";
export default {
  data() {
    return {
      // 课程数据
      Ke: [
        {
          // 左上标签
          BLT: "热门",
          // 标签颜色
          BC: "#f02f36",
          // 图片路径
          Src: require("assets/img/goodke/gd1.png"),
          // 左下标签群
          LB: ["ios", "C"],
          // 标题
          Tit: "编程必备基础-音视频小白系统入门课",
          // 等级
          Level: "入门",
          // 人数
          Pp: 243,
          // 评价
          Pj: "7人评价",
          // 价格
          Pc: 249.0
        },
        {
          // 左上标签
          BLT: "新课",
          // 标签颜色
          BC: "#fb8f0c",
          // 图片路径
          Src: require("assets/img/goodke/gd2.png"),
          // 左下标签群
          LB: ["Javascript", "Java"],
          // 标题
          Tit: "大学计算机必修课新讲--编译原理+操作系统+图形学",
          // 等级
          Level: "中级",
          // 人数
          Pp: 317,
          // 评价
          Pj: "11人评价",
          // 价格
          Pc: 339.0
        },
        {
          // 左上标签
          BLT: "新课",
          // 标签颜色
          BC: "#fb8f0c",
          // 图片路径
          Src: require("assets/img/goodke/gd3.png"),
          // 标题
          Tit: "基于Spark2.x,聚焦算法原理,开发企业级个性化推荐系统",
          // 等级
          Level: "中级",
          // 人数
          Pp: 32,
          // 评价
          Pj: "0人评价",
          // 价格
          Pc: 328.0
        },
        {
          // 左上标签
          BLT: "升级",
          // 标签颜色
          BC: "#974cec",
          // 图片路径
          Src: require("assets/img/goodke/gd4.png"),
          // 左下标签群
          LB: ["Python", "爬虫"],
          // 标题
          Tit: "畅销三年的Python分布式爬虫课程Scrapy打造搜索引擎(2020版)",
          // 等级
          Level: "中级",
          // 人数
          Pp: 4485,
          // 评价
          Pj: "1413人评价",
          // 价格
          Pc: 388.0
        },
        {
          // 左上标签
          BLT: "新课",
          // 标签颜色
          BC: "#fb8f0c",
          // 图片路径
          Src: require("assets/img/goodke/gd5.png"),
          // 标题
          Tit: "Typescript+React高仿Antd从零到一打造自己的组件库",
          // 等级
          Level: "高级",
          // 人数
          Pp: 385,
          // 评价
          Pj: "14人评价",
          // 价格
          Pc: 388.0
        },
        {
          // 左上标签
          BLT: "热门",
          // 标签颜色
          BC: "#f03238",
          // 图片路径
          Src: require("assets/img/goodke/gd6.png"),
          // 左下标签群
          LB: ["React.JS", "Vue.js"],
          // 标题
          Tit: "前端框架及项目面试 聚焦Vue/React/Webpack",
          // 等级
          Level: "中级",
          // 人数
          Pp: 711,
          // 评价
          Pj: "23人评价",
          // 价格
          Pc: 399.0
        },
        {
          // 左上标签
          BLT: "新课",
          // 标签颜色
          BC: "#fb8f0c",
          // 图片路径
          Src: require("assets/img/goodke/gd7.png"),
          // 左下标签群
          LB: ["数学"],
          // 标题
          Tit: "转为程序员设计的高等数学课",
          // 等级
          Level: "中级",
          // 人数
          Pp: 60,
          // 评价
          Pj: "6人评价",
          // 价格
          Pc: 265.0
        },
        {
          // 左上标签
          BLT: "升级",
          // 标签颜色
          BC: "#974cec",
          // 图片路径
          Src: require("assets/img/goodke/gd8.png"),
          // 左下标签群
          LB: ["SpringBoot", "SSM"],
          // 标题
          Tit: "Java主流技术栈 SSM+SpringBoot商铺系统",
          // 等级
          Level: "中级",
          // 人数
          Pp: 60,
          // 评价
          Pj: "6人评价",
          // 价格
          Pc: 299.0
        }
      ]
    };
  },
  components: {
    GKe
  }
};
</script>

<style scoped>
.NewGoodKe {
  position: relative;
  width: 1200px;
  height: 300px;
  margin: 0 auto;
  top: 30px;
  left: 25px;
  margin-bottom: 100px;
}
.K_Tit {
  font-size: 24px;
  color: #000;
  font-weight: bold;
}
</style>
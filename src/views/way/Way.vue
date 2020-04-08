<template>
  <div class="STUWAY">
    <!-- 居中内容 -->
    <div class="S_Ct">
      <!-- 标题 -->
      <div class="S_Tit">学习路线</div>
      <!-- 查看更多 -->
      <div class="S_More">查看更多 &gt;</div>
      <!-- 学习路线 -->
      <el-tabs v-model="activeName">
        <el-tab-pane :label="T" v-for="(T,index) in Tabs" :key="index">
          <!-- 路线列表 -->
          <StuWay :StuWay="StuWay[index]" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="S_Ct S_Ct2">
      <!-- 标题 -->
      <div class="S_Tit S_Tit2">热门课程</div>
      <!-- 学习路线 -->
      <el-tabs>
        <el-tab-pane :label="B" v-for="(B,indez) in Tabs2" :key="indez">
          <GKe :Ke="Ke[indez]" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 分割线 -->
    <div class="IM_FGX"></div>
    <div class="S_Ct S_Ct3">
      <!-- 标题 -->
      <div class="S_Tit">新课专栏</div>
      <!-- 查看更多 -->
      <div class="S_More">查看更多 &gt;</div>
      <div class="S_ZC">
        <ZBook />
      </div>
    </div>
  </div>
</template>
<script>
import StuWay from "components/stuway/StuWay";
import GKe from "components/gke/GKe";
import ZBook from "components/zbook/ZBook";
export default {
  data() {
    return {
      activeName: "0",
      Tabs: [
        "热门",
        "前端",
        "后端",
        "移动端",
        "计算机基础",
        "大数据",
        "测试",
        "人工智能"
      ],
      Tabs2: ["实战课程", "免费课程"],
      StuWay: {
        0: [
          {
            // 图片
            Img: require("assets/img/way/w1.jpg"),
            // 标题
            Tit: "计算机基础学习路线",
            // 介绍
            J:
              "本路线精选程序员必修的计算机基础核心知识,有序打基础职场走更远。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "9643"
          },
          {
            // 图片
            Img: require("assets/img/way/w2.jpg"),
            // 标题
            Tit: "Go语言从入门到达人之路",
            // 介绍
            J:
              "零基础入门Go语言，在掌握基础语法后向并发提升，并用Go去构建微服务、上手区块链项目。",
            // 步骤
            B: "5步骤·8门课",
            // 收藏
            S: "4647"
          },
          {
            // 图片
            Img: require("assets/img/way/w3.jpg"),
            // 标题
            Tit: "MySQL数据库直通车：从入门到面试",
            // 介绍
            J:
              "一举吃透最耗时的数据库，学会数据库的基本使用、业务库的设计与架构，面试收尾升华所学。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "4958"
          },
          {
            // 图片
            Img: require("assets/img/way/w4.jpg"),
            // 标题
            Tit: "微信小程序从0基础到精通",
            // 介绍
            J: "一站式掌握小程序生态，打造站内零基础精通小程序的最佳路径",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "21781"
          },
          {
            // 图片
            Img: require("assets/img/way/w5.jpg"),
            // 标题
            Tit: "前端面试求职跳槽通关路线",
            // 介绍
            J:
              "路线伴随Web前端工程师一路成长，彻底搞懂不同阶段的面试重点，高效拿下offer。",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "9158"
          },
          {
            // 图片
            Img: require("assets/img/way/w6.jpg"),
            // 标题
            Tit: "Python爬虫工程师养成计划",
            // 介绍
            J:
              "路线从零起步，系统培养爬虫工程师，步步为营打造爬虫工程师的核心竞争力。",
            // 步骤
            B: "3步骤·3门课",
            // 收藏
            S: "14294"
          }
        ],
        1: [
          {
            // 图片
            Img: require("assets/img/way/w4.jpg"),
            // 标题
            Tit: "微信小程序从0基础到精通",
            // 介绍
            J: "一站式掌握小程序生态，打造站内零基础精通小程序的最佳路径",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "21781"
          },
          {
            // 图片
            Img: require("assets/img/way/w5.jpg"),
            // 标题
            Tit: "前端面试求职跳槽通关路线",
            // 介绍
            J:
              "路线伴随Web前端工程师一路成长，彻底搞懂不同阶段的面试重点，高效拿下offer。",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "9158"
          },
          {
            // 图片
            Img: require("assets/img/way/w6.jpg"),
            // 标题
            Tit: "Python爬虫工程师养成计划",
            // 介绍
            J:
              "路线从零起步，系统培养爬虫工程师，步步为营打造爬虫工程师的核心竞争力。",
            // 步骤
            B: "3步骤·3门课",
            // 收藏
            S: "14294"
          },
          {
            // 图片
            Img: require("assets/img/way/w1.jpg"),
            // 标题
            Tit: "计算机基础学习路线",
            // 介绍
            J:
              "本路线精选程序员必修的计算机基础核心知识,有序打基础职场走更远。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "9643"
          },
          {
            // 图片
            Img: require("assets/img/way/w2.jpg"),
            // 标题
            Tit: "Go语言从入门到达人之路",
            // 介绍
            J:
              "零基础入门Go语言，在掌握基础语法后向并发提升，并用Go去构建微服务、上手区块链项目。",
            // 步骤
            B: "5步骤·8门课",
            // 收藏
            S: "4647"
          },
          {
            // 图片
            Img: require("assets/img/way/w3.jpg"),
            // 标题
            Tit: "MySQL数据库直通车：从入门到面试",
            // 介绍
            J:
              "一举吃透最耗时的数据库，学会数据库的基本使用、业务库的设计与架构，面试收尾升华所学。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "4958"
          }
        ],
        2: [
          {
            // 图片
            Img: require("assets/img/way/w1.jpg"),
            // 标题
            Tit: "计算机基础学习路线",
            // 介绍
            J:
              "本路线精选程序员必修的计算机基础核心知识,有序打基础职场走更远。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "9643"
          },
          {
            // 图片
            Img: require("assets/img/way/w2.jpg"),
            // 标题
            Tit: "Go语言从入门到达人之路",
            // 介绍
            J:
              "零基础入门Go语言，在掌握基础语法后向并发提升，并用Go去构建微服务、上手区块链项目。",
            // 步骤
            B: "5步骤·8门课",
            // 收藏
            S: "4647"
          },
          {
            // 图片
            Img: require("assets/img/way/w3.jpg"),
            // 标题
            Tit: "MySQL数据库直通车：从入门到面试",
            // 介绍
            J:
              "一举吃透最耗时的数据库，学会数据库的基本使用、业务库的设计与架构，面试收尾升华所学。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "4958"
          },
          {
            // 图片
            Img: require("assets/img/way/w4.jpg"),
            // 标题
            Tit: "微信小程序从0基础到精通",
            // 介绍
            J: "一站式掌握小程序生态，打造站内零基础精通小程序的最佳路径",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "21781"
          },
          {
            // 图片
            Img: require("assets/img/way/w5.jpg"),
            // 标题
            Tit: "前端面试求职跳槽通关路线",
            // 介绍
            J:
              "路线伴随Web前端工程师一路成长，彻底搞懂不同阶段的面试重点，高效拿下offer。",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "9158"
          },
          {
            // 图片
            Img: require("assets/img/way/w6.jpg"),
            // 标题
            Tit: "Python爬虫工程师养成计划",
            // 介绍
            J:
              "路线从零起步，系统培养爬虫工程师，步步为营打造爬虫工程师的核心竞争力。",
            // 步骤
            B: "3步骤·3门课",
            // 收藏
            S: "14294"
          }
        ],
        3: [
          {
            // 图片
            Img: require("assets/img/way/w4.jpg"),
            // 标题
            Tit: "微信小程序从0基础到精通",
            // 介绍
            J: "一站式掌握小程序生态，打造站内零基础精通小程序的最佳路径",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "21781"
          },
          {
            // 图片
            Img: require("assets/img/way/w5.jpg"),
            // 标题
            Tit: "前端面试求职跳槽通关路线",
            // 介绍
            J:
              "路线伴随Web前端工程师一路成长，彻底搞懂不同阶段的面试重点，高效拿下offer。",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "9158"
          },
          {
            // 图片
            Img: require("assets/img/way/w6.jpg"),
            // 标题
            Tit: "Python爬虫工程师养成计划",
            // 介绍
            J:
              "路线从零起步，系统培养爬虫工程师，步步为营打造爬虫工程师的核心竞争力。",
            // 步骤
            B: "3步骤·3门课",
            // 收藏
            S: "14294"
          },
          {
            // 图片
            Img: require("assets/img/way/w1.jpg"),
            // 标题
            Tit: "计算机基础学习路线",
            // 介绍
            J:
              "本路线精选程序员必修的计算机基础核心知识,有序打基础职场走更远。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "9643"
          },
          {
            // 图片
            Img: require("assets/img/way/w2.jpg"),
            // 标题
            Tit: "Go语言从入门到达人之路",
            // 介绍
            J:
              "零基础入门Go语言，在掌握基础语法后向并发提升，并用Go去构建微服务、上手区块链项目。",
            // 步骤
            B: "5步骤·8门课",
            // 收藏
            S: "4647"
          },
          {
            // 图片
            Img: require("assets/img/way/w3.jpg"),
            // 标题
            Tit: "MySQL数据库直通车：从入门到面试",
            // 介绍
            J:
              "一举吃透最耗时的数据库，学会数据库的基本使用、业务库的设计与架构，面试收尾升华所学。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "4958"
          }
        ],
        4: [
          {
            // 图片
            Img: require("assets/img/way/w1.jpg"),
            // 标题
            Tit: "计算机基础学习路线",
            // 介绍
            J:
              "本路线精选程序员必修的计算机基础核心知识,有序打基础职场走更远。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "9643"
          },
          {
            // 图片
            Img: require("assets/img/way/w2.jpg"),
            // 标题
            Tit: "Go语言从入门到达人之路",
            // 介绍
            J:
              "零基础入门Go语言，在掌握基础语法后向并发提升，并用Go去构建微服务、上手区块链项目。",
            // 步骤
            B: "5步骤·8门课",
            // 收藏
            S: "4647"
          },
          {
            // 图片
            Img: require("assets/img/way/w3.jpg"),
            // 标题
            Tit: "MySQL数据库直通车：从入门到面试",
            // 介绍
            J:
              "一举吃透最耗时的数据库，学会数据库的基本使用、业务库的设计与架构，面试收尾升华所学。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "4958"
          },
          {
            // 图片
            Img: require("assets/img/way/w4.jpg"),
            // 标题
            Tit: "微信小程序从0基础到精通",
            // 介绍
            J: "一站式掌握小程序生态，打造站内零基础精通小程序的最佳路径",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "21781"
          },
          {
            // 图片
            Img: require("assets/img/way/w5.jpg"),
            // 标题
            Tit: "前端面试求职跳槽通关路线",
            // 介绍
            J:
              "路线伴随Web前端工程师一路成长，彻底搞懂不同阶段的面试重点，高效拿下offer。",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "9158"
          },
          {
            // 图片
            Img: require("assets/img/way/w6.jpg"),
            // 标题
            Tit: "Python爬虫工程师养成计划",
            // 介绍
            J:
              "路线从零起步，系统培养爬虫工程师，步步为营打造爬虫工程师的核心竞争力。",
            // 步骤
            B: "3步骤·3门课",
            // 收藏
            S: "14294"
          }
        ],
        5: [
          {
            // 图片
            Img: require("assets/img/way/w4.jpg"),
            // 标题
            Tit: "微信小程序从0基础到精通",
            // 介绍
            J: "一站式掌握小程序生态，打造站内零基础精通小程序的最佳路径",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "21781"
          },
          {
            // 图片
            Img: require("assets/img/way/w5.jpg"),
            // 标题
            Tit: "前端面试求职跳槽通关路线",
            // 介绍
            J:
              "路线伴随Web前端工程师一路成长，彻底搞懂不同阶段的面试重点，高效拿下offer。",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "9158"
          },
          {
            // 图片
            Img: require("assets/img/way/w6.jpg"),
            // 标题
            Tit: "Python爬虫工程师养成计划",
            // 介绍
            J:
              "路线从零起步，系统培养爬虫工程师，步步为营打造爬虫工程师的核心竞争力。",
            // 步骤
            B: "3步骤·3门课",
            // 收藏
            S: "14294"
          },
          {
            // 图片
            Img: require("assets/img/way/w1.jpg"),
            // 标题
            Tit: "计算机基础学习路线",
            // 介绍
            J:
              "本路线精选程序员必修的计算机基础核心知识,有序打基础职场走更远。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "9643"
          },
          {
            // 图片
            Img: require("assets/img/way/w2.jpg"),
            // 标题
            Tit: "Go语言从入门到达人之路",
            // 介绍
            J:
              "零基础入门Go语言，在掌握基础语法后向并发提升，并用Go去构建微服务、上手区块链项目。",
            // 步骤
            B: "5步骤·8门课",
            // 收藏
            S: "4647"
          },
          {
            // 图片
            Img: require("assets/img/way/w3.jpg"),
            // 标题
            Tit: "MySQL数据库直通车：从入门到面试",
            // 介绍
            J:
              "一举吃透最耗时的数据库，学会数据库的基本使用、业务库的设计与架构，面试收尾升华所学。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "4958"
          }
        ],
        6: [
          {
            // 图片
            Img: require("assets/img/way/w1.jpg"),
            // 标题
            Tit: "计算机基础学习路线",
            // 介绍
            J:
              "本路线精选程序员必修的计算机基础核心知识,有序打基础职场走更远。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "9643"
          },
          {
            // 图片
            Img: require("assets/img/way/w2.jpg"),
            // 标题
            Tit: "Go语言从入门到达人之路",
            // 介绍
            J:
              "零基础入门Go语言，在掌握基础语法后向并发提升，并用Go去构建微服务、上手区块链项目。",
            // 步骤
            B: "5步骤·8门课",
            // 收藏
            S: "4647"
          },
          {
            // 图片
            Img: require("assets/img/way/w3.jpg"),
            // 标题
            Tit: "MySQL数据库直通车：从入门到面试",
            // 介绍
            J:
              "一举吃透最耗时的数据库，学会数据库的基本使用、业务库的设计与架构，面试收尾升华所学。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "4958"
          },
          {
            // 图片
            Img: require("assets/img/way/w4.jpg"),
            // 标题
            Tit: "微信小程序从0基础到精通",
            // 介绍
            J: "一站式掌握小程序生态，打造站内零基础精通小程序的最佳路径",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "21781"
          },
          {
            // 图片
            Img: require("assets/img/way/w5.jpg"),
            // 标题
            Tit: "前端面试求职跳槽通关路线",
            // 介绍
            J:
              "路线伴随Web前端工程师一路成长，彻底搞懂不同阶段的面试重点，高效拿下offer。",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "9158"
          },
          {
            // 图片
            Img: require("assets/img/way/w6.jpg"),
            // 标题
            Tit: "Python爬虫工程师养成计划",
            // 介绍
            J:
              "路线从零起步，系统培养爬虫工程师，步步为营打造爬虫工程师的核心竞争力。",
            // 步骤
            B: "3步骤·3门课",
            // 收藏
            S: "14294"
          }
        ],
        7: [
          {
            // 图片
            Img: require("assets/img/way/w4.jpg"),
            // 标题
            Tit: "微信小程序从0基础到精通",
            // 介绍
            J: "一站式掌握小程序生态，打造站内零基础精通小程序的最佳路径",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "21781"
          },
          {
            // 图片
            Img: require("assets/img/way/w5.jpg"),
            // 标题
            Tit: "前端面试求职跳槽通关路线",
            // 介绍
            J:
              "路线伴随Web前端工程师一路成长，彻底搞懂不同阶段的面试重点，高效拿下offer。",
            // 步骤
            B: "4步骤·5门课",
            // 收藏
            S: "9158"
          },
          {
            // 图片
            Img: require("assets/img/way/w6.jpg"),
            // 标题
            Tit: "Python爬虫工程师养成计划",
            // 介绍
            J:
              "路线从零起步，系统培养爬虫工程师，步步为营打造爬虫工程师的核心竞争力。",
            // 步骤
            B: "3步骤·3门课",
            // 收藏
            S: "14294"
          },
          {
            // 图片
            Img: require("assets/img/way/w1.jpg"),
            // 标题
            Tit: "计算机基础学习路线",
            // 介绍
            J:
              "本路线精选程序员必修的计算机基础核心知识,有序打基础职场走更远。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "9643"
          },
          {
            // 图片
            Img: require("assets/img/way/w2.jpg"),
            // 标题
            Tit: "Go语言从入门到达人之路",
            // 介绍
            J:
              "零基础入门Go语言，在掌握基础语法后向并发提升，并用Go去构建微服务、上手区块链项目。",
            // 步骤
            B: "5步骤·8门课",
            // 收藏
            S: "4647"
          },
          {
            // 图片
            Img: require("assets/img/way/w3.jpg"),
            // 标题
            Tit: "MySQL数据库直通车：从入门到面试",
            // 介绍
            J:
              "一举吃透最耗时的数据库，学会数据库的基本使用、业务库的设计与架构，面试收尾升华所学。",
            // 步骤
            B: "4步骤·4门课",
            // 收藏
            S: "4958"
          }
        ]
      },
      Ke: {
        0: [
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
          },
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
          }
        ],
        1: [
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
          },
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
      }
    };
  },
  components: {
    StuWay,
    GKe,
    ZBook
  }
};
</script>

<style>
.IM_FGX {
  position: absolute;
  width: 100%;
  height: 1px;
  margin-top: 70px;
  background: #fff;
  box-shadow: 0 3px 3px 0 rgba(7, 17, 27, 0.2);
}
.S_ZC {
  position: relative;
  width: 110%;
  left: 1%;
  height: 500px;
  margin-top: 60px;
}
.el-tabs__header {
  margin: 0 0 20px;
}
.S_Tit {
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  color: #f20d0d;
  top: 18px;
}
.S_More {
  position: absolute;
  font-size: 14px;
  top: 18px;
  right: 20px;
  cursor: pointer;
  z-index: 999;
}
.S_More:hover {
  color: #f20d0d;
}
.el-tabs__nav-wrap::after {
  background: none;
}
.el-tabs__nav {
  left: 140px;
}
.el-tabs__item {
  height: 36px;
}
.el-tabs__item:hover {
  color: #f20d0d;
}
.el-tabs__item.is-active {
  color: #f20d0d;
}
.el-tabs__active-bar {
  height: 3px;
  background-color: #f20d0d;
}
.STUWAY {
  position: relative;
  width: 100vw;
  height: 500px;
  background: linear-gradient(#fe9d01, #fff);
}
.S_Ct {
  position: relative;
  width: 1180px;
  top: 90px;
  padding-bottom: 10px;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  padding-left: 20px;
  padding-top: 10px;
  margin-bottom: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
.S_Ct2 {
  width: 1210px;
  box-shadow: none;
}
.S_Ct2 .el-tabs__header {
  margin: 0 0 8px;
}
.S_Ct3 {
  width: 1200px;
  box-shadow: none;
}
</style>
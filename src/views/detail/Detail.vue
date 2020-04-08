<template>
  <div class="Detail">
    <div class="D_Ct" v-for="(D,index) in Detail[KeId]" :key="index">
      <!-- 背景 -->
      <div class="D_Head_Bg">
        <img class="D_H_B" :src="D.Bsrc" alt />
      </div>
      <!-- 标题 -->
      <div class="D_Dit">
        <!-- 标题 -->
        {{D.Tit}}
        <br />
        <!-- 小标题 -->
        <em v-html="D.Stit"></em>
      </div>
      <!-- 详情信息部分 -->
      <div class="D_Min">
        <!-- 背景图 -->
        <img src="~assets/img/detail/F_Bg.png" alt />
        <!-- 限时优惠 -->
        <div class="D_Min_Date">限时优惠 截止至{{D.Date}}</div>
        <!-- 价格 -->
        <div class="D_Pc">
          <div class="D_Lp">￥{{D.Pc}}.00</div>
          <!-- 原价 -->
          <div class="D_Lp D_Lp2">原价￥{{D.Lp}}.00</div>
          <!-- 付款方式 -->
          <div class="D_Lp D_Lp_F">花呗付款</div>
          <div class="D_Lp D_Lp_F D_Lp_F2">京东白条</div>
        </div>
        <!-- 下方课程信息 -->
        <div class="D_Level">
          <!-- 单个信息 -->
          <div class="D_Item">
            难度
            <em></em>
            {{D.Level}}
          </div>
          <div class="D_Item">
            时长
            <em></em>
            {{D.Time}}小时
          </div>
          <div class="D_Item">
            学习人数
            <em></em>
            {{D.Pp}}
          </div>
          <div class="D_Item">
            综合评分
            <em></em>
            {{D.Sco}}.00
          </div>
        </div>
        <!-- 购买 -->
        <div class="D_Buy">立即购买</div>
        <div class="D_Buy D_SCar">加购物车</div>
      </div>
    </div>
    <!-- 课程目录 -->
    <div class="D_M">
      <!-- 单个目录 -->
      <div
        class="D_M_Item"
        v-for="(M,indez) in Ke"
        :key="indez"
        :class="{D_M_In:KeS==indez}"
        @click="MClick(indez)"
      >{{M}}</div>
    </div>
    <!-- 放主图！ -->
    <div class="D_Z" v-for="(D,indey) in Detail[KeId]" :key="indey">
      <img :src="D.Isrc" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      // 保存传来的参数
      KeId: 0,
      // 轮播图点击详情
      Detail: {
        0: [
          {
            // 背景图
            Bsrc: require("assets/img/detail/b1.png"),
            // 主图
            Isrc: require("assets/img/index/ITEM1.jpg"),
            // 标题
            Tit: "React+TypeScript高仿AntDesign开发企业级UI组件库",
            // 副标题
            Stit:
              "用当下主流前端技术“造一次轮子”，解决初中级到高级前端的跃迁难题",
            // 限时优惠
            Date: "4月14日",
            // 价格
            Pc: "388",
            // 原价
            Lp: "448",
            // 难度
            Level: "高级",
            // 时长
            Time: "17",
            // 人数
            Pp: "406",
            // 评分
            Sco: "10"
          }
        ],
        1: [
          {
            Bsrc: require("assets/img/detail/b2.png"),
            Isrc: require("assets/img/index/ITEM2.jpg"),
            // 标题
            Tit: "Java架构师成长直通车",
            // 副标题
            Stit: "国内外一线大厂技术大咖与慕课网组成专家团队12个月磨一剑",
            // 限时优惠
            Date: "不限期",
            // 价格
            Pc: "5950",
            // 原价
            Lp: "6600",
            // 难度
            Level: "高级",
            // 时长
            Time: "220",
            // 人数
            Pp: "1120",
            // 评分
            Sco: "10"
          }
        ],
        2: [
          {
            Bsrc: require("assets/img/detail/b3.png"),
            Isrc: require("assets/img/index/ITEM3.jpg"),
            // 标题
            Tit: "大学计算机必修课新讲--编译原理+操作系统+图形学",
            // 副标题
            Stit:
              "围绕核心脉络重学计算机底层知识，学到大学教不到的，学会大学教不会的",
            // 限时优惠
            Date: "4月18日",
            // 价格
            Pc: "339",
            // 原价
            Lp: "399",
            // 难度
            Level: "中级",
            // 时长
            Time: "18",
            // 人数
            Pp: "339",
            // 评分
            Sco: "10"
          }
        ],
        3: [
          {
            Bsrc: require("assets/img/detail/b4.png"),
            Isrc: require("assets/img/index/ITEM4.jpg"),
            // 标题
            Tit: "从Java后端到Web全栈",
            // 副标题
            Stit:
              "王嘉辉亲授，Web领域市场呼声最高的的主流技术栈逐一精讲<br />技术与业务深度融合，电商项目前后端开发的教科书级别案例<br />赋能Java从业者拥有更强的职场适应力和工作竞争力",
            // 限时优惠
            Date: "不限期",
            // 价格
            Pc: "3380",
            // 原价
            Lp: "3680",
            // 难度
            Level: "高级",
            // 时长
            Time: "120",
            // 人数
            Pp: "1150",
            // 评分
            Sco: "10"
          }
        ]
      },
      // 课程介绍
      Ke: ["课程介绍", "章节目录", "售前咨询", "用户评价"],
      // 保存课程点击索引
      KeS: 0
    };
  },
  methods: {
    MClick(indez) {
      this.KeS = indez;
    }
  },
  created() {
    // 接收传来的参数
    this.KeId = this.$route.query.id;
  }
};
</script>

<style scoped>
.D_Z {
  position: relative;
  width: 1150px;
  height: 480px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 140px;
  border-radius: 10px;
  box-shadow: 0 8px 16px 0 rgba(28, 31, 33, 0.1);
  margin-bottom: 50px;
}
.D_Z img {
  width: 100%;
  height: 100%;
}
.D_M_In {
  color: #f20d0d;
}
.D_M_In::after {
  content: "";
  position: absolute;
  width: 26px;
  height: 3px;
  background: #f20d0d;
  bottom: 0;
  margin-left: -7.7%;
}
.D_M_Item {
  flex: 1;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
}
.D_M {
  position: relative;
  display: flex;
  width: 600px;
  height: 35px;
  top: 110px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0 auto;
}
.D_Buy {
  position: absolute;
  right: 220px;
  letter-spacing: 1px;
  top: 50%;
  transform: translateY(-50%);
  width: 160px;
  height: 48px;
  background: #f01414;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 48px;
  color: #fff;
  border-radius: 48px;
  transition: 0.3s;
}
.D_SCar {
  right: 45px;
  background: #fde7e7;
  color: #f01414;
}
.D_Buy:hover {
  cursor: pointer;
  opacity: 0.9;
}
.D_Item {
  position: relative;
  float: left;
  padding-right: 20px;
  margin-left: 20px;
}
.D_Item em {
  width: 6px;
  display: inline-block;
}
.D_Item::after {
  content: "";
  position: absolute;
  right: 0;
  width: 3px;
  height: 3px;
  background: #333;
  border-radius: 3px;
  top: 50%;
  transform: translateY(-50%);
}
.D_Level {
  position: absolute;
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #333;
  top: 70px;
  left: 20px;
}
.D_Lp_F {
  width: 68px;
  height: 25px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 25px;
  background: linear-gradient(90deg, #6c61d3 0, #53a0fd 100%);
  margin-left: 13px;
  border-radius: 25px;
  font-weight: normal;
  letter-spacing: 1px;
  top: 5px;
}
.D_Lp_F2 {
  background: linear-gradient(90deg, #ff323f 0, #f76469 100%);
}
.D_Lp2 {
  font-size: 15px;
  margin-left: 10px;
  top: 10px;
  color: #999;
  text-decoration: line-through;
}
.D_Lp {
  position: relative;
  float: left;
}
.D_Pc {
  position: absolute;
  left: 225px;
  top: 30px;
  font-weight: bold;
  color: #f01460;
  font-size: 34px;
}
.D_Min_Date {
  position: absolute;
  width: 186px;
  height: 34px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  line-height: 34px;
  color: #fff;
  border-radius: 17px;
  left: 30px;
  top: 30px;
  background: linear-gradient(to right, #ff0668, #ff7702);
}
.D_Min {
  position: relative;
  width: 1150px;
  height: 130px;
  margin: 0 auto;
  border-radius: 15px;
  margin-top: -65px;
  overflow: hidden;
  box-shadow: 0 8px 16px 0 rgba(28, 31, 33, 0.1);
}
.D_Min img {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.D_Dit {
  position: absolute;
  text-align: center;
  width: 100%;
  font-size: 46px;
  color: #fff;
  top: 75px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: 1px;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.D_Dit em {
  position: relative;
  font-style: normal;
  font-size: 18px;
  top: 10px;
}
.D_Head_Bg {
  position: relative;
  width: 100%;
  min-height: 300px;
  top: 0;
  z-index: -1;
}
.D_H_B {
  width: 100%;
  min-height: 300px;
}
.D_Ct {
  position: relative;
  width: 100%;
  top: 65px;
}
</style>
<template>
  <div>
    <!-- 弹出菜单与轮播图部分 -->
    <div class="N_Imp" :style="{background:C_BC[pre]}">
      <!-- 居中内容 -->
      <div class="N_Imp_Ctt">
        <!-- 左侧弹出菜单 -->
        <div class="N_Imp_L" @mouseleave="elOut">
          <el-row v-for="(CITEM,index) in C_MENU" :key="index">
            <el-col :span="24">
              <div class="grid-content bg-purple-dark" @mouseenter="elMover(index)">{{CITEM}}</div>
            </el-col>
          </el-row>
          <!-- 弹出菜单 -->
          <transition mode="out-in" enter-active-class="animated fadeInRight">
            <div class="N_IL_TC" v-show="isShowMenu">
              <!-- 标题 -->
              <div class="N_IL_Tit">{{IL_Menu[M_Ix].Tit}}</div>
              <!-- 下方选项 -->
              <div class="N_IL_Menu">
                <span v-for="(MU,index) in IL_Menu[M_Ix].Menu" :key="index">{{MU}}</span>
              </div>
              <!-- 底部卖课 -->
              <div class="N_B_Ke">
                <!-- 单门课 -->
                <div class="B_Ke_One" v-for="(k,indez) in IL_Menu[0].Ke" :key="indez">
                  <!-- 课图片 -->
                  <div class="B_K_Im">
                    <img :src="k.src" alt />
                  </div>
                  <!-- 右侧内容 -->
                  <div class="B_K_R">
                    <!-- 标题 -->
                    <div class="B_K_Tit">{{k.tit}}</div>
                    <!-- 详细信息 -->
                    <div class="B_K_X">
                      <!-- 价格 -->
                      <div class="K_X">￥{{k.price}}</div>
                      <!-- 等级 -->
                      <div class="K_X">{{k.level}}</div>
                      <!-- 人数 -->
                      <div class="K_X">{{k.pp}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <!-- 右侧轮播图 -->
        <div class="N_Imp_R">
          <Carousel @C_Change="C_Change" :Img="Src" @click.native="CalClick" />
        </div>
      </div>
    </div>
    <!-- 单行多行按钮 零基础就业 -->
    <MoreKK :An="JY" />
    <!-- 单行多行按钮 职场提升-->
    <MoreKK :An="TS" />
    <!-- 分割线 -->
    <div class="IM_FGX"></div>
    <!-- 新上好课 -->
    <div class="GoodKe">
      <Goodke />
    </div>
  </div>
</template>

<script>
import Carousel from "components/carousel/Carousel";
import MoreKK from "components/morekk/MoreKK";
import Goodke from "components/goodke/GoodKe";

export default {
  data() {
    return {
      // 当前幻灯片的索引
      pre: 0,
      // 保存菜单索引
      M_Ix: 0,
      // 定义背景颜色
      C_BC: [
        "linear-gradient(#fe9d01,#fff)",
        "linear-gradient(#7767e3,#fff)",
        "linear-gradient(#9a51fa,#fff)",
        "linear-gradient(#3077c5,#fff)",
        "linear-gradient(#da5011,#fff)"
      ],
      // 定义轮播图路径
      Src: [
        require("assets/img/index/ITEM1.jpg"),
        require("assets/img/index/ITEM2.jpg"),
        require("assets/img/index/ITEM3.jpg"),
        require("assets/img/index/ITEM4.jpg")
      ],
      // 定义菜单
      C_MENU: [
        "前沿 / 区块链 / 人工智能",
        "前端 / 小程序 / JS",
        "后端 / JAVA / Python",
        "移动 / Android / iOS",
        "云计算 / 大数据 / 容器",
        "运维 / 测试 / 数据库",
        "UI设计 / 3D动画 / 游戏"
      ],
      // 是否显示隐藏菜单
      isShowMenu: false,
      // 定义隐藏框标题下方菜单
      IL_Menu: [
        {
          Tit: "前沿技术",
          Menu: [
            "微服务",
            "区块链",
            "以太坊",
            "机器学习",
            "深度学习",
            "计算机视觉",
            "自然语言处理",
            "数据分析",
            "挖掘"
          ],
          Ke: [
            {
              tit: "Python3入门人工智能 掌握机器学习",
              src: require("assets/img/index/To/to1.jpg"),
              price: "448.00",
              level: "初级",
              pp: "259"
            },
            {
              tit: "Python3入门人工智能 掌握机器学习",
              src: require("assets/img/index/To/to2.jpg"),
              price: "448.00",
              level: "初级",
              pp: "259"
            },
            {
              tit: "Python3入门人工智能 掌握机器学习",
              src: require("assets/img/index/To/to3.jpg"),
              price: "448.00",
              level: "初级",
              pp: "259"
            },
            {
              tit: "Python3入门人工智能 掌握机器学习",
              src: require("assets/img/index/To/to4.jpg"),
              price: "448.00",
              level: "初级",
              pp: "259"
            }
          ]
        },
        {
          Tit: "前端开发",
          Menu: [
            "HTML/CSS",
            "JavaScript",
            "Vue.js",
            "React.JS",
            "Angular",
            "Node.js",
            "jQuery",
            "Bootstrap",
            "Sass/Less",
            "WebApp",
            "前端工具",
            "CSS",
            "CSS3"
          ]
        },
        {
          Tit: "后端开发",
          Menu: [
            "Java",
            "SpringBoot",
            "Spring Cloud",
            "SSM",
            "Python",
            "爬虫",
            "Django",
            "Tornado",
            "Go",
            "PHP",
            "C",
            "C++",
            "C#",
            "Ruby"
          ]
        },
        {
          Tit: "移动开发",
          Menu: ["Android", "iOS", "React native", "WEEX"]
        },
        {
          Tit: "云计算&大数据",
          Menu: [
            "大数据",
            "Hadoop",
            "Spark",
            "Hbase",
            "Storm",
            "云计算",
            "AWS",
            "Docker",
            "Kubernetes"
          ]
        },
        {
          Tit: "运维&测试",
          Menu: [
            "运维",
            "自动化运维",
            "运维工具",
            "中间件",
            "Linux",
            "测试",
            "功能测试",
            "性能测试",
            "自动化测试",
            "接口测试",
            "安全测试"
          ]
        },
        {
          Tit: "UI设计&多媒体",
          Menu: [
            "UI设计&多媒体",
            "动效动画",
            "设计基础",
            "设计工具",
            "APPUI设计",
            "产品交互",
            "Photoshop",
            "Unity 3D",
            "Cocos2d-x"
          ]
        }
      ],
      // 定义就业数据
      JY: [
        {
          tit: "零基础就业",
          titem: "从入门到具备1年开发经验",
          // 指示
          Z: 0,
          // 按钮数据
          AN: [
            {
              // 图标
              src: require("assets/img/morekk/path1.png"),
              // 标题
              tit: "Web前端工程师",
              // 副标题
              Ftit: "从未接触编程也可以学好"
            },
            {
              // 图标
              src: require("assets/img/morekk/path2.png"),
              // 标题
              tit: "Java工程师",
              // 副标题
              Ftit: "综合就业排名第一"
            },
            {
              // 图标
              src: require("assets/img/morekk/path3.png"),
              // 标题
              tit: "Python工程师",
              // 副标题
              Ftit: "应用领域最为广泛"
            },
            {
              // 图标
              src: require("assets/img/morekk/path4.png"),
              // 标题
              tit: "Android工程师",
              // 副标题
              Ftit: "移动应用市场第一"
            },
            {
              // 图标
              src: require("assets/img/morekk/path5.png"),
              // 标题
              tit: "PHP工程师",
              // 副标题
              Ftit: "Web开发首选语音"
            }
          ]
        }
      ],
      // 定义提升数据
      TS: [
        {
          tit: "职场提升",
          titem: "1年以上开发经验系统成长",
          // 指示
          Z: 1,
          // 按钮数据
          AN: [
            {
              // 标题
              tit: "从Java后端到全栈",
              // 副标题
              Ftit: "浓缩从工程师到CTO的10年成长历程",
              //背景颜色
              BC: "#0e52cc"
            },
            {
              // 标题
              tit: "大前端一前端高级进阶",
              // 副标题
              Ftit: "覆盖前端全栈+全周期+多端应用的体系大课",
              //背景颜色
              BC: "#e05017"
            },
            {
              // 标题
              tit: "Java架构师",
              // 副标题
              Ftit: "跟随千万级项目从0到100一起成长",
              //背景颜色
              BC: "#4231ba"
            }
          ]
        }
      ]
    };
  },
  components: {
    Carousel,
    MoreKK,
    Goodke
  },
  methods: {
    // 接收轮播图索引
    C_Change(pre) {
      this.pre = pre;
    },
    // 轮播图点击事件
    CalClick() {
      this.$router.push({ name: "Detail", query: { id: this.pre } });
    },
    // 列表触摸事件
    elMover(index) {
      // 切换菜单数据
      this.M_Ix = index;
      // 显示隐藏弹窗
      this.isShowMenu = true;
    },
    // 列表触摸移出事件
    elOut() {
      // 显示隐藏弹窗
      this.isShowMenu = false;
    }
  }
};
</script>

<style scoped>
.GoodKe {
  position: relative;
  width: 100%;
  height: 700px;
  top: 60px;
  background: #f8fafc;
}
.IM_FGX {
  position: absolute;
  width: 100%;
  height: 1px;
  margin-top: 55px;
  background: #fff;
  box-shadow: 0 3px 3px 0 rgba(7, 17, 27, 0.2);
}
.K_X {
  float: left;
  margin-right: 10px;
}
.B_K_Tit {
  width: 240px;
  height: 30px;
  line-height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.B_K_R {
  position: absolute;
  width: 240px;
  height: 60px;
  left: 90px;
}
.B_K_Im {
  position: absolute;
  width: 80px;
  height: 80px;
  top: 5px;
}
.B_K_Im img {
  width: 80px;
  border-radius: 5px;
}
.B_Ke_One {
  position: relative;
  float: left;
  width: 330px;
  height: 60px;
  margin-left: 10px;
  margin-top: 20px;
}
.N_B_Ke {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 180px;
  background: #f8fafc;
}
.N_IL_TC {
  position: absolute;
  width: 700px;
  height: 400px;
  background: #fff;
  left: 210px;
  top: 0;
  z-index: 999;
  padding-left: 20px;
  padding-top: 20px;
}
.N_IL_Tit {
  position: relative;
  color: #333;
  font-weight: bold;
}
.N_IL_Menu {
  position: relative;
  height: 30px;
  margin-top: 10px;
  font-size: 14px;
  line-height: 30px;
}
.N_IL_Menu span {
  margin-right: 18px;
}
.N_IL_Menu span:hover {
  color: #4286f4;
  cursor: pointer;
}
.el-row {
  top: 26px;
}
.el-col {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 195px;
  margin-left: 15px;
  height: 50px;
  line-height: 50px;
  color: rgba(255, 255, 255, 0.6);
  transition: 0.3s;
  text-indent: 10px;
  font-size: 14px;
}
.el-col::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  right: 10px;
  top: 22px;
  transform: rotate(90deg);
  border-width: 0 5px 6px;
  border-style: solid;
  border-color: transparent transparent rgba(255, 255, 255, 0.6);
}
.el-col:hover {
  background: #6b7176;
  cursor: pointer;
  color: #fff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.N_Imp {
  position: relative;
  width: 100vw;
  height: 500px;
  top: 65px;
}
.N_Imp_Ctt {
  position: relative;
  width: 1150px;
  height: 400px;
  margin: 0 auto;
  top: 30px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
}
.N_Imp_L {
  position: absolute;
  width: 210px;
  height: 400px;
  background: #2b333b;
}
.N_Imp_R {
  position: absolute;
  right: 0;
  top: 0;
  width: 940px;
  height: 400px;
}
</style>
import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const Index = () => import('views/index/Index')
const Way = () => import('views/way/Way')
const Detail = () => import('views/detail/Detail')

// 安装插件
Vue.use(VueRouter)

// 创建router
const routes = [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/way',
    component: Way
  },
  {
    path: '/detail',
    name: "Detail",
    component: Detail
  }
]

const router = new VueRouter({
  // 模式
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
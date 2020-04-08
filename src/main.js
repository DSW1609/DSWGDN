import Vue from 'vue'
import App from './App.vue'
import router from './router'
import animate from "animate.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0); //切换路由之后滚动条始终在最顶部
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  animate,
}).$mount('#app')
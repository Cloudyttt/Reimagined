import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "@/store";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "normalize.css";
import "@/styles/index.scss"; // global css
/*//引入svg组件
import IconSvg from 'components/SvgIcon/index'
//全局注册icon-svg
Vue.component('svg-icon', IconSvg)*/
import "@/icons"; // icon

Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

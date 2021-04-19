import Vue from "vue";
import VueMeta from "vue-meta";
import VueRouter from "vue-router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faBook, faHome } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub, faTelegram, faBook, faHome);

import "@/assets/css/index.css";
import App from "@/App.vue";
import router from "./router";
import Loading from "@/components/Loading.vue";

const NOTION_BLOG_ID = process.env.NOTION_BLOG_ID || "aa3d6401e1484aab8a81e04cbd7cbda8";

Vue.config.productionTip = false;
Vue.prototype.$siteName = "Lynn's Blog";
Vue.prototype.$NOTION_BLOG_ID = NOTION_BLOG_ID;

Vue.use(VueMeta);
Vue.use(VueRouter);
Vue.component("font-awesome", FontAwesomeIcon);
Vue.component("Loading", Loading);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");

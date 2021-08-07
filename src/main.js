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

Vue.config.productionTip = false;
Vue.prototype.$siteName = "Lynn's Blog";
Vue.prototype.$DATABASE_ID = process.env.DATABASE_ID;
Vue.prototype.$NOTION_API_KEY = process.env.NOTION_API_KEY; // official api key // TODO
Vue.prototype.$NOTION_API_URL = process.env.NOTION_API_URL; // unofficial api worker url

Vue.use(VueMeta);
Vue.use(VueRouter);
Vue.component("font-awesome", FontAwesomeIcon);
Vue.component("Loading", Loading);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");

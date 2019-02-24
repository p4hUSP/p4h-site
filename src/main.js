import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '@/assets/style/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faUniversity,
  faGraduationCap,
  faChalkboardTeacher
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebook,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUniversity,
  faGraduationCap,
  faChalkboardTeacher,
  faFacebook,
  faGithub,
  faMedium,
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

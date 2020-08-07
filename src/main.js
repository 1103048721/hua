import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import BaiduMap from 'vue-baidu-map'
 
Vue.use(BaiduMap, {
    ak: 'F7KZtGcyjj7KxDFeNkBUNqTVIvXoieZL'
});
Vue.prototype.$axios = axios
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

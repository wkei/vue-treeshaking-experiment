import Vue from 'vue'
import App from './app.vue'

import 'vui/base.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

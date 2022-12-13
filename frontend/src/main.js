import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false
const compiler = require('vue-template-compiler')

new Vue({
  compiler,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

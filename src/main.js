import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'es6-promise/auto'
import store from './store'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: colors.green.darken2,
    errorMessage: colors.red.lighten1
  }
})

new Vue({
  store,
  router,
  // axios,
  localStorage,
  render: h => h(App),
}).$mount('#app')


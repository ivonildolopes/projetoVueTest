import Vue from 'vue'
import Router from 'vue-router'
import ConsultaCDA from './views/ConsultaCDA'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'consulta',
      component: ConsultaCDA
    }
  ]
})

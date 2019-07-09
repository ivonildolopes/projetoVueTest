import Vue from 'vue'
import Vuex from 'vuex'
import consulta from './modules/consulta'
import util from './modules/util'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    consulta,
    util
  }
})
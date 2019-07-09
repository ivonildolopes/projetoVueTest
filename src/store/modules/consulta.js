import store from '../index'
import service from '@/services/index'
import mockService from '@/services/mock'

const state = {
  exibeResultado: false,
  dividasEncontradas: []
}

const getters = {
  // getExibeResultado: state => { return state.exibeResultado }
}

const mutations = {
  CONSULTA(state, data) {
    console.log('Enviando data: '+data)
    mockService.getCDAs(data)
    .then(function (response) {
      console.log('RESPONSE: '+response);
      state.exibeResultado = true
      state.dividasEncontradas = response
      store.commit("util/SEND_MESSAGE", ["success", "Consulta realizada com sucesso"])
    })
    .catch(function (error) {
      console.log('ERROR: '+error);
      state.exibeResultado = false
      store.commit("util/SEND_MESSAGE", ["error", 'ERRO: '+error])
    })
  }
}

const actions = {
  consultar({ commit }, data) {
    commit("CONSULTA", data)
  },
  novaConsulta({ state }) {
    state.exibeResultado = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
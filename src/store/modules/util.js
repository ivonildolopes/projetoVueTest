const state = {
  loading: false,
  snackBar: {
    show: false,
    color: '',
    text: ''
  }
}

const mutations = {
  SEND_MESSAGE(state, [type, text] ) {
    state.snackBar = { color: type, text: text, show: true }
  }
}

const actions = {
  sendMessage( { commit }, messageArray ) {
    commit('SEND_MESSAGE', messageArray)
  },
  closeSnack({ state }) {
    state.snackBar.show = false
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

/**
 * Created by yanglei on 2018/2/26.
 */
import Vue from 'vue'

const state = {
  userInfo: {}
}

const mutation_types = {
  'UPDATE_USERINFO': 'UPDATE_USERINFO'
}

const getters = {
  userInfo(state) {
    return state.userInfo
  }
}

const actions = {
  updateUserInfo({ state, commit }, payload) {
    commit(mutation_types.UPDATE_USERINFO, payload.userInfo)
    if (!payload.noSave) {
      window.localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
    }
  }
}

const mutations = {
  [mutation_types.UPDATE_USERINFO](state, payload) {
    for (let key in payload) {
      if (payload.hasOwnProperty(key)) {
        Vue.set(state.userInfo, key, payload[key])
      }
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

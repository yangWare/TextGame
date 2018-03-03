/**
 * Created by yanglei on 2018/2/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './userInfo/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInfo
  }
})

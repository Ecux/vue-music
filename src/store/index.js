import Vue from 'vue'
import Vuex from 'vuex'
import Sidebar from './modules/sidebar'
import MenuList from './modules/menulist'
import AudioInfo from './modules/audio'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    allInfo: []
  },
  getters: {
    getAllInfo: state => state.allInfo
  },
  mutations: {
    setAllInfo (state, obj) {
      state.allInfo = obj
    }
  },
  actions: {
    set_AllInfo ({ commit }, obj) {
      commit('setAllInfo', obj)
    }
  },

  modules: {
    sideBar: Sidebar,
    menuList: MenuList,
    audioInfo: AudioInfo
  }
})

export default store

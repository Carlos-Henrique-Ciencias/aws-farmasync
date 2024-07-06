import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
      localStorage.setItem('authenticated', 'true');
    },
    logout({ commit }) {
      commit('setUser', null);
      localStorage.setItem('authenticated', 'false');
    }
  },
  modules: {}
});

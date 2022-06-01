import { createStore } from 'vuex';
import {
  getUserFromCookie,
  getAuthFromCookie,
  saveUserToCookie,
  saveAuthToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';

const store = createStore({
  state() {
    return {
      username: getUserFromCookie() || '',
      token: getAuthFromCookie() || '',
    };
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = '';
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data);

      // Vuex's state
      commit('setUsername', data.user.username);
      commit('setToken', data.token);

      // cookie
      saveUserToCookie(data.user.username);
      saveAuthToCookie(data.token);

      return data;
    },
  },
});

export default store;

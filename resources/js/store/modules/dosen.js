import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../axios-auth'
import globalAxios from 'axios'
import router from '../../router'


Vue.use(Vuex)

const dosen = {
  state: {
    dosens: null,
    pagination: {
      current_page: null,
      last_page_url: null,
      next_page_url: null,
      prev_page_url: null,
      last_page: null,
      per_page: null,
      path: null,
      total:null
    },
    user: {
      name: null,
      userId: null
    },
    matkul: {
      name: null,
      userId: null,
    },
    error: {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,

    },
    display: 'none'
  },
  mutations: {
    storeDsn(state, data) {
      state.dosens = data.dosen
      //pagination
      state.pagination.current_page = data.current_page,
      state.pagination.last_page_url = data.last_page_url,
      state.pagination.next_page_url = data.next_page_url,
      state.pagination.prev_page_url = data.prev_page_url,
      state.pagination.last_page = data.last_page,
      state.pagination.per_page = data.per_page,
      state.pagination.path = data.path
      state.pagination.total = data.total
      state.display = data.display
      state.user.name = null
      state.user.email = null
      state.user.password = null
      state.user.password_confirmation = null
      state.error.name = null
      state.error.email = null
      state.error.password = null
      state.error.password_confirmation = null
    },
    getDsn(state, data) {
      state.dosens = data.dosen
      //pagination
      state.pagination.current_page = data.current_page,
        state.pagination.last_page_url = data.last_page_url,
        state.pagination.next_page_url = data.next_page_url,
        state.pagination.prev_page_url = data.prev_page_url,
        state.pagination.last_page = data.last_page,
        state.pagination.per_page = data.per_page,
        state.pagination.path = data.path,
        state.pagination.total = data.total,
        state.display = 'none'
    },
    error(state, errors) {
      state.error.email = errors.name,
        state.error.email = errors.email,
        state.error.password = errors.password,
        state.error.password_confirmation = errors.password_confirmation
    },
    show(state, data) {
      state.display = data.display
    },
    dsnuser(state) {
      state.user.name = null
      state.user.email = null
      state.user.password = null
      state.user.password_confirmation = null
      state.error.name = null
      state.error.email = null
      state.error.password = null
      state.error.password_confirmation = null
    },
    getDsnAll(state, data) {
      state.dosens = data.dosen
    }
  },
  actions: {
    dsnGet({ state, commit }, param) {
      const token = localStorage.getItem('token')
      const url = param || '/api/dsn'
      axios({
        url: url,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: 'Bearer ' + token
        }
      })
        .then((res) => {
          commit('getDsn', {
            dosen: res.data.data,
            //pagination
            current_page: res.data.current_page,
            last_page_url: res.data.last_page_url,
            next_page_url: res.data.next_page_url,
            prev_page_url: res.data.prev_page_url,
            last_page: res.data.last_page,
            per_page: res.data.per_page,
            path: res.data.path,
            total: res.data.total
          })
        }).catch(error => {
          console.log(error);
        })
    },
    dsndisplay({ commit }, param) {
      commit('show', {
        display: param,
      })
    },
    dsnDelete({ commit, dispatch }, dsnId) {
      const token = localStorage.getItem('token')
      axios({
        url: '/api/user/' + dsnId,
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }).then((res) => {
        dispatch('dsnGet')
      })
    },
    dsnResetForm({ commit }) {
      commit('dsnuser', {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      })
    },
    dsnStore({ state, commit }, param) {
      const token = localStorage.getItem('token')
      axios({
        url: '/api/auth/register',
        method: 'POST',
        params: {
          name: param.name,
          email: param.email,
          password: param.password,
          password_confirmation: param.password_confirmation,
          role: 2
        },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }).then((res) => {
        commit('storeDsn', {
          mahasiswa: res.data.data,
          //pagination
          current_page: res.data.current_page,
          last_page_url: res.data.last_page_url,
          next_page_url: res.data.next_page_url,
          prev_page_url: res.data.prev_page_url,
          last_page: res.data.last_page,
          per_page: res.data.per_page,
          path: res.data.path,
          total: res.data.total,
          display: 'none',
        })
      }).catch(error => {
        commit('error', {
          name: error.response.data.errors.name,
          email: error.response.data.errors.email,
          password: error.response.data.errors.password,
          password_confirmation: error.response.data.errors.password_confirmation,
          display: 'block',
        })
      })
    },
    adminDosenAll({ state, commit }) {
      const token = localStorage.getItem('token')
      axios({
        url: '/api/dosenall',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: 'Bearer ' + token
        }
      })
        .then((res) => {
          commit('getDsnAll', {
            dosen: res.data,
          })
        }).catch(error => {
          console.log(error);
        })
    }
  },
  getters: {
    dsnGetDsn(state) {
      return state.dosens
    },
    dsnpagination(state) {
      return state.pagination
    },
    dsnerror(state) {
      return state.error
    },
    dsndisplay(state) {
      return state.display
    },
    dsnuser(state) {
      return state.user
    }
  },
}

export default dosen

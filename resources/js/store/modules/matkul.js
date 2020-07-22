import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../axios-auth'
import globalAxios from 'axios'
import router from '../../router'


Vue.use(Vuex)

const matkul = {
  state: {
    matkuls: null,
    pagination: {
      current_page: null,
      last_page_url: null,
      next_page_url: null,
      prev_page_url: null,
      last_page: null,
      per_page: null,
      path: null,
      total : null
    },
    display: 'none',
    matkul: {
      id: null,
      name: null,
      userId: null
    },
  },
  mutations: {
    getMatkul(state, data) {
      state.matkuls = data.matkul
      //pagination
      state.pagination.current_page = data.current_page,
        state.pagination.last_page_url = data.last_page_url,
        state.pagination.next_page_url = data.next_page_url,
        state.pagination.prev_page_url = data.prev_page_url,
        state.pagination.last_page = data.last_page,
        state.pagination.per_page = data.per_page,
        state.pagination.path = data.path,
        state.pagination.total = data.total
    },
    show(state, data) {
      state.display = data.display
    },
    resetForm(state) {
      state.matkul.name = null,
        state.matkul.userId = null
      state.display = 'none'
    }
  },
  actions: {
    adminResetMatkul({ commit }) {
      commit('resetForm')
    },
    adminMtklDelete({ state, commit, dispatch }, param) {
      const token = localStorage.getItem('token')
      axios({
        url: '/api/matkul/' + param,
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }).then((res) => {
        dispatch('adminGetMatkul')
      })
    },
    adminMtklUpdate({ commit, dispatch }, param) {
      const token = localStorage.getItem('token')
      axios({
        url: '/api/matkul/' + param.id,
        method: 'PUT',
        params: {
          name_matkul: param.name,
          user_id: param.userId
        },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }).then((res) => {
        dispatch('adminResetMatkul')
        dispatch('adminGetMatkul')
      }).catch(error => {
        this.errors.name = error.response.data.errors.name_matkul[0]
        this.errors.dosen = error.response.data.errors.user_id
      })
    },
    adminMtklStore({ commit, dispatch }, param) {
      const token = localStorage.getItem('token')

      axios({
        url: '/api/matkul/create',
        method: 'POST',
        params: {
          name_matkul: param.name,
          user_id: param.userId,
        },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }).then((res) => {
        dispatch('adminResetMatkul')
        dispatch('adminGetMatkul')

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
    adminGetMatkul({ state, commit }, param) {
      const token = localStorage.getItem('token')
      let url = param || '/api/matkuls'
      axios({
        url: url,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }).then((res) => {
        commit('getMatkul', {
          matkul: res.data.data,
          //pagination
          current_page: res.data.current_page,
          last_page_url: res.data.last_page_url,
          next_page_url: res.data.next_page_url,
          prev_page_url: res.data.prev_page_url,
          last_page: res.data.last_page,
          per_page: res.data.per_page,
          path: res.data.path,
          total : res.data.total
        })
      }).catch(error => {
        console.log(error);
      })
    },
    mtkldisplay({ commit }, param) {
      commit('show', {
        display: param,
      })
    },
  },
  getters: {
    adminGetMatkul(state) {
      return state.matkuls
    },
    adminMatkul(state) {
      return state.matkul
    },
    matkulpagination(state) {
      return state.pagination

    }
  }
}

export default matkul

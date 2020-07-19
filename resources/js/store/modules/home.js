import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../axios-auth'
import globalAxios from 'axios'
import router from '../../router'


Vue.use(Vuex)

const home = {
state : {
  matkul      : null,
  presents    : null,
  pagination  : {
    current_page  : null,
    last_page_url  : null,
    next_page_url  : null,
    prev_page_url  : null,
    last_page  : null,
    per_page  : null,
    path  : null
  }
 },
mutations: {
  dosenMatkul(state, matkulData){
   state.matkul = matkulData.matkul
  },
  storePresents(state,data){
    state.presents  = data.present
    //pagination
    state.pagination.current_page = data.current_page,
    state.pagination.last_page_url= data.last_page_url,
    state.pagination.next_page_url= data.next_page_url,
    state.pagination.prev_page_url= data.prev_page_url,
    state.pagination.last_page    = data.last_page,
    state.pagination.per_page     = data.per_page,
    state.pagination.path         = data.path
  },
 },
actions : {
  getmatkuls ({commit},) {
  const id = localStorage.getItem('localId')
  const token = localStorage.getItem('token')
  axios({
    url     : '/api/dosen/matkuls/'+id,
    method  : 'GET',
    headers : {
        'Content-Type'  : 'application/json',
        'Accept'        : 'application/json',
        Authorization   : 'Bearer '+token
    }
  })
   .then(res => {
    commit('dosenMatkul', {
      matkul: res.data.data
    })
   }).catch(error => console.log(error))
  },
  dosenGetPresent({state,commit},path){
      const token = localStorage.getItem('token')
      axios({
        url     : path,
        method  : 'GET',
        headers : {
            'Content-Type'  : 'application/json',
            'Accept'        : 'application/json',
            Authorization   : 'Bearer '+token
        }
      })
      .then((res) =>{
          commit('storePresents',{
            present: res.data.data,
            //pagination
            current_page    : res.data.current_page,
            last_page_url   : res.data.last_page_url,
            next_page_url   : res.data.next_page_url,
            prev_page_url   : res.data.prev_page_url,
            last_page       : res.data.last_page,
            per_page        : res.data.per_page,
            path            : res.data.path,
          })  
      }).catch(error => {
              console.log(error);
      })
      },
  },
getters : {
  dosenMatkul(state) {
   return state.matkul
  },
  presents(state){
    return state.presents
  },
  pagination(state){
    return state.pagination
  }
 }
}

export default home

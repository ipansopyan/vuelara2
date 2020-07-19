import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../axios-auth'
import globalAxios from 'axios'
import router from '../../router'


Vue.use(Vuex)

const mahasiswa = {
state : {
  mahasiswas : null,
  pagination  : {
    current_page  : null,
    last_page_url  : null,
    next_page_url  : null,
    prev_page_url  : null,
    last_page  : null,
    per_page  : null,
    path  : null
  },
  user : {
    name  : null,
    email : "",
    password  : "",
    password_confirmation : "",
  },
  error : {
    name  : null,
    email:  null,
    password:  null,
    password_confirmation:  null,

  },
  display : 'none'
 },
mutations: {
  storeMhs(state, data){
   state.mahasiswas = data.mahasiswa
   //pagination
   state.pagination.current_page = data.current_page,
   state.pagination.last_page_url= data.last_page_url,
   state.pagination.next_page_url= data.next_page_url,
   state.pagination.prev_page_url= data.prev_page_url,
   state.pagination.last_page    = data.last_page,
   state.pagination.per_page     = data.per_page,
   state.pagination.path         = data.path
   state.display                 = data.display
   state.user.name = null
   state.user.email = null
   state.user.password = null
   state.user.password_confirmation = null
   state.error.name  = null
   state.error.email  = null
   state.error.password  = null
   state.error.password_confirmation  = null
  },
  getMhs(state, data){
    state.mahasiswas = data.mahasiswa
    //pagination
    state.pagination.current_page = data.current_page,
    state.pagination.last_page_url= data.last_page_url,
    state.pagination.next_page_url= data.next_page_url,
    state.pagination.prev_page_url= data.prev_page_url,
    state.pagination.last_page    = data.last_page,
    state.pagination.per_page     = data.per_page,
    state.pagination.path         = data.path
   },
  error(state,errors){
    state.error.email = errors.name,
    state.error.email = errors.email,
    state.error.password = errors.password,
    state.error.password_confirmation = errors.password_confirmation
  },
  show(state,data){
    state.display  = data.display
  },
  mhsuser(state){
    state.user.name = null
    state.user.email = null
    state.user.password = null
    state.user.password_confirmation = null
    state.error.name  = null
    state.error.email  = null
    state.error.password  = null
    state.error.password_confirmation  = null
  }
 },
actions : {
  display({commit},param){
    commit('show',{
      display : param,
    })
  },
  mhsDelete({commit,dispatch},mhsId){
    const token = localStorage.getItem('token')
        axios({
            url     : '/api/user/'+mhsId,
            method  : 'delete',
            headers : {
                'Content-Type'  : 'application/json',
                'Accept'        : 'application/json',
                Authorization   : 'Bearer '+token
        }
        }).then((res) => {
          dispatch('mhsGet')
        })
  },
  mhsResetForm({commit}){
    commit('mhsuser',{
      name : null,
      email : null,
      password : null,
      password_confirmation : null,
      name  : null,
      email  : null,
      password  : null,
      password_confirmation  : null
    })
  },
  mhsGet({state,commit},param){
    const token = localStorage.getItem('token')
    const url = param || '/api/mhs'
    axios({
      url     : url,
      method  : 'GET',
      headers : {
          'Content-Type'  : 'application/json',
          'Accept'        : 'application/json',
          Authorization   : 'Bearer '+token
      }
    })
    .then((res) =>{      
        commit('getMhs',{
          mahasiswa: res.data.data,
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
  mhsStore({state,commit},param){
    axios({
      url     : '/api/auth/register',
      method  : 'POST',
      params  : {
          name                    : param.name,
          email                   : param.email,
          password                : param.password,
          password_confirmation   : param.password_confirmation,
          role                    : 1
          },
          headers : {
              'Content-Type'  : 'application/json',
              'Accept'        : 'application/json',
          }
      }).then((res) =>{
        commit('storeMhs',{
          mahasiswa: res.data.data,
          //pagination
          current_page    : res.data.current_page,
          last_page_url   : res.data.last_page_url,
          next_page_url   : res.data.next_page_url,
          prev_page_url   : res.data.prev_page_url,
          last_page       : res.data.last_page,
          per_page        : res.data.per_page,
          path            : res.data.path,
          display         : 'none',
        })
      }).catch(error => {        
          commit('error',{
            name  : error.response.data.errors.name,
            email  : error.response.data.errors.email,
            password  : error.response.data.errors.password,
            password_confirmation  : error.response.data.errors.password_confirmation,
            display : 'block',
          })
    })
  },
},
getters : {
  mhsGetMhs(state) {
   return state.mahasiswas
  },
  mhspagination(state){
    return state.pagination
  },
  mhserror(state){
    return state.error
  },
  display(state){
    return state.display
  },
  mhsuser(state){
    return state.user
  }
 },
}

export default mahasiswa

import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../axios-auth'
import globalAxios from 'axios'
import router from '../../router'



Vue.use(Vuex)

const auth = {
 state : {
  token : null,
  role : null,
  name  : null,
  id    : null

 },
 mutations: {
  authUser(state,  userData) {
   state.token = userData.token
   state.role = userData.role
   state.name = userData.name
   state.id = userData.id
  },

 },
 actions : {
  signin({state,commit}, authData) {
   axios.post('/api/auth/login', {
    email : authData.email,
    password : authData.password,
   })
   .then(res => {
    commit('authUser', {
     token: res.data.token,
     role: res.data.role,
     name: res.data.email,
     id : res.data.id,     
    })
    
    const now = new Date()
    const expirationDate = new Date(now.getTime() + res.data.expires_in * 1000)
    localStorage.setItem('token',res.data.token)
    localStorage.setItem('userId',res.data.role)
    localStorage.setItem('localId',res.data.id)
    localStorage.setItem('name',res.data.name)
    localStorage.setItem('expirationDate', expirationDate)
    
    if (state.role == 3) {
    router.push({path : '/admin'})
    } else if (state.role == 2) {
     router.push({name : 'dosen'})
    }
    
    
   })
   .catch(error => console.log(error)
   )
  },
  signup({commit},authData) {
   axios.post('/api/auth/register', {
    name : authData.name,
    email : authData.email,
    password : authData.password,
    password_confirmation : authData.password_confirmation,
   })
   .then(res => {
    commit('authUser', {
     token: res.data.access_token
    })
   }).catch(error => console.log(error)
   )
  },
  tryAutoLogin ({state,commit}) {     
   const token = localStorage.getItem('token')
   const role = localStorage.getItem('userId')
   const name = localStorage.getItem('name')
   const id = localStorage.getItem('localId')
   if (!token) {
     return
   }
   const expirationDate = localStorage.getItem('expirationDate')
   const now = new Date()
   if (now >= expirationDate) {
     return
   }
   commit('authUser', {
    token: token,
    role : role,
    name : name,
    id   : id,
  })

   globalAxios.post('/api/auth/me' + '?token=' +token)
   .then(res => {
     if (res.data.data.role != localStorage.getItem('userId')) {
      localStorage.removeItem('token')     
      localStorage.removeItem('userId')     
      localStorage.removeItem('name')     
      localStorage.removeItem('localId')     
     }
   }).catch(error => console.log(error))  
  },
  fetchUser({commit,state}) {   
   globalAxios.post('/api/auth/me' + '?token=' +state.token)
   .then(res => {
    commit('authUser', {
      token: res.data.token,
      role : res.data.data.role,
      name : res.data.data.name
    })
   }).catch(error => console.log(error))
 },
},
 getters : {
  name (state) {
   return state.name
  },
  role (state) {
   return state.role
  } 
 },
}

export default auth
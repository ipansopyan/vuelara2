import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../axios-auth'
import globalAxios from 'axios'
import router from '../../router'


Vue.use(Vuex)

const dosen = {
 state : {
  matkul : null
 },
 mutations: {
  dosenMatkul(state, matkulData){
   state.matkul = matkulData.matkul
  }
 },
 actions : {
  getmatkuls ({commit, state},) {
  const id = localStorage.getItem('localId') 
  axios.get('/api/dosen/matkuls/'+id)
   .then(res => {
    commit('dosenMatkul', {
      matkul: res.data.data
    })
   }).catch(error => console.log(error))
  }
},
getpresent({state,commit}){

},
 getters : {
  dosenMatkul(state) {
   return state.matkul
  } 
 }
}

export default dosen

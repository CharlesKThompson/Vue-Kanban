import vue from 'vue'
import axios from 'axios'
import vuex from 'vuex'
import router from 'router'

var api = axios.create({
    baseURL: "//localhost:3000/api/",
    timeout: 3000,
    withCredentials: true
 });
 
 var auth = axios.create({
    baseURL: "//localhost:3000/auth/",
    timeout: 3000,
    withCredentials: true
 });
 
 vue.use(vuex)

 var store = new vuex.Store ({
     state: {
         user: {},
         board: {},
         list: {},
         task: {},
         comment: {}

     },
     mutations: {
        setUser (state, user) {
            state.user = user
        }
     },
     actions: {
         //Login and Register actions ===================================================================
         login ({commit, dispatch}, payload) {
            auth.post('login', payload)
            .then(user => {
                commit('setUser', user.data)
                router.push({name: 'Home'})
                console.log(user.data)
            })
            .catch(err => {
                commit('handleError', err)
            })
         },
         createUser ({commit, dispatch}, payload) {
             auth.post('createUser', payload)
            .then(user => {
                commit('setUser', user.data)
                router.push({name: 'Home'})
                console.log(user.data)
            })
            .catch(err => {
                commit('handleError', err)
            })
         }
     }
 })

 export default store
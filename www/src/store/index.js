import vue from 'vue'
import axios from 'axios'
import vuex from 'vuex'
import router from '../router'

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

var store = new vuex.Store({
    state: {
        user: {},
        boards: {},
        activeBoard: {},
        lists: {},
        activeList: {},
        tasks: {},
        comments: {}

    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        // TO ADD ONE NEW BOARD
        addBoard(state, payload) {
            state.boards.unshift(payload)
        },
        //TO SET ALL BOARDS FOR USER
        getBoards(state, payload) {
            state.boards = payload
        },
        // TO SET ACTIVE BOARD
        setActiveBoard(state, board) {
            state.activeBoard = board
        },
        // TO ADD ONE NEW LIST
        addList(state, payload) {
            state.lists.unshift(payload)
        },
        //TO SET ALL LISTS FOR USER
        getLists(state, payload) {
            state.lists = payload
        },
        // TO SET ACTIVE LIST
        setActiveList(state, list) {
            state.activeList = list
        },
    },
    actions: {
        //BOARD ACTIONS
        addBoard({ commit, dispatch }, payload) {
            api.post("boards/", payload)
            .then(results => {
                dispatch("getBoards", results.data)
            })
        },
        getBoards({ commit, dispatch }, payload) {
            api.get("boards/")
            .then(result => {
                console.log(result)
                commit("getBoards", result.data)
            })
            .catch(err => { console.log(err) })
        },
        setActiveBoard({ commit, dispatch }, payload) {
            debugger
            api.get("boards/" + payload._id)
            .then(result => {
                commit('setActiveBoard', { id: payload, data: result.data })
                router.push({ name: 'Board' })
                console.log(result)
                commit('setActiveBoard', result.data)
            })
            .catch(err => { console.log(err) })
        },
        removeBoard({ commit, dispatch }, payload) {
            api.delete("boards/" + payload._id)
            .then(result => {
                dispatch("getBoards")
            })
        },
        //LIST ACTIONS
        addList({ commit, dispatch }, payload) {
            api.post("boards/", payload)
            .then(results => {
                dispatch("getLists", results.data)
            })
        },
        getLists({ commit, dispatch }, payload) {
            api.get("boards/" + payload._id + '/lists')
            .then(result => {
                console.log(result)
                commit("getLists", result.data)
            })
            .catch(err => { console.log(err) })
        },
        setActiveList({ commit, dispatch }, payload) {
            console.log(payload)
            api.get("boards/" + payload._id + '/lists/'  + list._id )
            .then(result => {
                commit('setActiveList', { id: payload, data: result.data })
                router.push({ name: 'List' })
                console.log(result)
                commit("setActiveList", result.data)
            })
            .catch(err => { console.log(err) })
        },
        removeList({ commit, dispatch }, payload) {
            api.delete("lists/" + payload._id)
            .then(result => {
                dispatch("getLists")
            })
        },
        //Login and Register actions ===================================================================
        login({ commit, dispatch }, payload) {
            auth.post('login', payload)
                .then(user => {
                    commit('setUser', user.data)
                    router.push({ name: 'Home' })
                    console.log(user.data)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        createUser({ commit, dispatch }, payload) {
            auth.post('createUser', payload)
                .then(user => {
                    commit('setUser', user.data)
                    router.push({ name: 'Home' })
                    console.log(user.data)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        logout({ commit, dispatch }, payload) {
            auth.delete('logout')
                .then(res => {
                    commit('setUser', {})
                    // router.push({ name: 'Login' })
                    console.log(res)
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        authenticate({ commit, dispatch }) {
            auth.get('authenticate')
                .then(res => {
                    console.log("You are signed in", res.data)
                    commit('setUser', res.data)
                })
                .catch(err => {
                    console.error(err);
                })
        },

    }
})

export default store
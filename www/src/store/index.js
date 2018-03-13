import vue from 'vue'
import axios from 'axios'
import vuex from 'vuex'
import router from '../router'

var production = !window.location.host.includes('localhost')
var baseURL = production ? '//kanbanception.herokuapp.com/' : '//localhost:3000/'

var api = axios.create({
    baseURL: baseURL + "api/",
    timeout: 5000,
    withCredentials: true
});

var auth = axios.create({
    baseURL: baseURL + "auth/",
    timeout: 5000,
    withCredentials: true
});

vue.use(vuex)

var store = new vuex.Store({
    state: {
        user: {},
        boards: {},
        activeBoard: {},
        lists: {},
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
        // TO ADD ONE NEW TASK
        addTask(state, payload) {
            state.tasks.unshift(payload)
        },
        // TO GET TASKS
        getTasks(state, payload) {
            vue.set(state.tasks, payload.listId, payload.results)
        },
        // TO ADD COMMENT
        addComment(state, payload) {
            state.comments.unshift(payload)
        },
        // TO GET COMMENTS
        getComments(state, payload) {
            vue.set(state.comments, payload.taskId, payload.results)
        }
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
                    commit("getBoards", result.data)
                })
                .catch(err => { console.log(err) })
        },
        setActiveBoard({ commit, dispatch }, payload) {
            api.get("boards/" + payload._id)
                .then(result => {
                    commit('setActiveBoard', { id: payload, data: result.data })
                    router.push({ name: 'Board' })
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
        //LIST ACTION
        addList({ commit, dispatch }, payload) {
            api.post('boards/' + payload.boardId + '/lists/', payload)
                .then(results => {
                    dispatch("getLists", { _id: payload.boardId })
                })
        },
        getLists({ commit, dispatch }, payload) {
            api.get('boards/' + payload._id + '/lists/')
                .then(result => {
                    commit("getLists", result.data)
                })
                .catch(err => { console.log(err) })
        },

        removeList({ commit, dispatch }, payload) {
            api.delete('boards/' + payload.boardId + '/lists/' + payload._id)
                .then(result => {
                    dispatch("getLists", { _id: payload.boardId })
                })
                .catch(err => { console.log(err) })
        },

        //TASK ACTIONS---------------------------------------
        //REMOVE TASK
        removeTask({ commit, dispatch }, payload) {
            api.delete('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/' + payload._id)
                .then(results => {
                    console.log(results)
                    var foundTasks = {
                        results: results.data,
                        listId: payload.listId
                    }
                    dispatch("getTasks", foundTasks)
                })
                .catch(err => { console.log(err) })
        },

        //MOVE TASK
        moveTask({ commit, dispatch }, payload) {
            api.put('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/' + payload._id, payload)
                .then(results => {
                    debugger
                    console.log(results)
                    var foundTasks = {
                        results: results.data,
                        listId: payload.listId
                    }
                    dispatch("getTasks", foundTasks) 
                })
                .catch(err => { console.log(err) })
        },


        //ADD TASK
        addTask({ commit, dispatch }, payload) {
            api.post('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/', payload)
                .then(results => {
                    console.log(results)
                    var foundTasks = {
                        results: results.data,
                        listId: payload.listId
                    }
                    dispatch("getTasks", foundTasks)
                })
                .catch(err => { console.log(err) })
        },

        //GET TASKS
        getTasks({ commit, dispatch }, payload) {
            api.get('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/')
                .then(result => {

                    var foundTasks = {
                        results: result.data,
                        listId: payload.listId
                    }
                    commit("getTasks", foundTasks)
                })
                .catch(err => { console.log(err) })
        },

        //COMMENT ACTIONS---------------------------
        //REMOVE COMMENT
        removeComment({ commit, dispatch }, payload) {

            api.delete('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/' + payload.taskId + '/comments/' + payload._id)
                .then(results => {
                    console.log(results)
                    var foundComments = {
                        results: results.data,
                        listId: payload.listId,
                        taskId: payload.taskId
                    }
                    dispatch("getComments", foundComments)
                })
                .catch(err => { console.log(err) })
        },

        //GET COMMENTS
        getComments({ commit, dispatch }, payload) {
            api.get('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/' + payload.taskId + '/comments/')
                .then(results => {
                    var foundComments = {
                        results: results.data,
                        listId: payload.listId,
                        taskId: payload.taskId
                    }
                    commit('getComments', foundComments)
                })
                .catch(err => { console.log(err) })
        },

        //ADD COMMENT
        addComment({ commit, dispatch }, payload) {
            api.post('boards/' + payload.boardId + '/lists/' + payload.listId + '/tasks/' + payload.taskId + '/comments/', payload)
                .then(results => {
                    console.log(results)

                    var foundComments = {
                        results: results.data,
                        listId: payload.listId,
                        taskId: payload.taskId
                    }
                    dispatch("getComments", foundComments)
                })
                .catch(err => (console.log(err)))
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
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Board from '@/components/Board'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/boards/:boardId',
            name: 'Board',
            component: Board
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },

    ]
})
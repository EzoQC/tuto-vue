import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/New',
            name: 'ToDoCreation',
            component: () => import('./views/ToDoCreation.vue')
        },
        {
            path: '/List',
            name: 'ToDoList',
            component: () => import('./views/ToDoList.vue')
        }
    ]
});

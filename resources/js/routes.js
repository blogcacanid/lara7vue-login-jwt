import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import LoginComponent from './components/LoginComponent'
import HomeComponent from './components/HomeComponent'
import LogoutComponent from './components/LogoutComponent'
import store from './store'

const routes = [
    {
        path: '/',
        redirect: { name: 'login' }
    },
    {
        path: '/home',
        name: 'home',
        component: HomeComponent,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent
    },
    {
        path: '/logout',
        name: 'logout',
        component: LogoutComponent
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {

    // check if the route requires authentication and user is not logged in
    if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
        // redirect to login page
        next({ name: 'login' })
        return
    }

    // if logged in redirect to dashboard
    if(to.path === '/login' && store.state.isLoggedIn) {
        next({ name: 'home' })
        return
    }

    next()
});

export default router
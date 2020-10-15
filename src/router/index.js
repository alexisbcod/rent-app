import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from '../firebase'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/view',
        name: 'View',
        component: () =>
            import ('../views/View.vue'),
        meta: { requiresAuth: true }
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    const rutaApp = to.matched.some(record => record.meta.requiresAuth)

    if (rutaApp) {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                next()
            } else {
                next({ name: 'Login' })
            }
        })
    } else {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                next({ name: 'Home' })
            } else {
                next()
            }
        })
    }

})

export default router
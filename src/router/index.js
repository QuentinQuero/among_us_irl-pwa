import Vue from 'vue';
import Router from 'vue-router'
import LoginPage from "@/components/unloggedModules/Pages/LoginPage";
import SignUpPage from "@/components/unloggedModules/Pages/SignUpPage";
import HomePage from "@/components/homeModule/Pages/HomePage";

Vue.use(Router);

// Define all routes
let router = new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
            meta: {
                guest: true
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUpPage,
            meta: {
                guest: true
            }
        },
        {
            path: '/home',
            name: 'home',
            component: HomePage,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if(to.matched.some(record => record.meta.is_admin)) {
                if(user.is_admin === 1){
                    next()
                }
                else{
                    next({ name: 'userboard'})
                }
            }else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('jwt') == null){
            next()
        }
        else{
            next({ name: 'userboard'})
        }
    }else {
        next()
    }
})

export default router;
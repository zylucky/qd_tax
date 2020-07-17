import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// layout
import Layout from '@/layout'

export const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/index',
        children: [
            {
                path: 'index',
                name: 'index',
                component: ()=> import('@/views/index/index')
            }
        ],
        meta: {
            title: '首页'
        }
    }
]

const createRouter = () => new Router({
    // mode: 'history',
    scrollBehavior: ()=> ({y: 0}),
    routes: constantRoutes
})

const router = createRouter()

// 动态添加路由重置路由
export function resetRouter(){
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router
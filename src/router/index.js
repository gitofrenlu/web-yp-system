
import index from '@/components/index'
import category from '@/components/category'
import good from '@/components/goods'
import order from '@/components/order'

import login from '@/components/login'

import Home from '@/components/home'

const title = "远鹏粮油"
let routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '/',
                component: order,
                meta:{title:title}
            },
            {
                path: '/index',
                component: order,
                meta:{title:title}
            },
            {
                path: '/category',
                component: category,
                meta:{title:title}
            },
            {
                path: '/goods',
                component: good,
                meta:{title:title}
            },
            {
                path: '/order',
                component: order,
                meta:{title:title}
            },
        ]
    },
    {
        path: '/login',
        component: login,
        meta:{title:title}
    }
];

export default routes;
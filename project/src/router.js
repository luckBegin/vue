import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Index from './views/index.vue';
Vue.use(Router)
export default new Router({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/flow',
			name: 'flow',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/flow.vue')
		}, {
			path: '/place',
			name: 'place',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/place.vue')
		}, {
			path: '/metting',
			name: 'metting',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/metting.vue')
		}, {
			path: '/album',
			name: 'album',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/album.vue')
		}, {
			path: '/award',
			name: 'award',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/award.vue')
		},{
            path: '/awardIndex',
            name: 'awardIndex',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/awardIndex.vue')
        },{
			path: '/proxy',
			name: 'proxy',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/proxy.vue')
		},{
            path: '/proxy2',
            name: 'proxy2',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/proxy2.vue')
        }
	]
})

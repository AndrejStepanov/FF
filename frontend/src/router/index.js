import Vue from 'vue'
import Router from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import PMainTest from '@/pages/mainTest/p-main-test'
import PObjectView from '@/pages/objectView/p-object-view'
import PObjectWork from '@/pages/objectWork/p-object-work'
import pTestArm from '@/pages/testArm/p-test-arm'

Vue.use(Router)

let router = new Router({
	mode: 'history',
	routes: [
		{	path: '/',						name: 'p-main-test',	component: PMainTest,	meta: {	linkId:1, guest: true	}	},
		{	path: '/Работа с объектами',	name: 'p-object-work',	component: PObjectWork,	meta: {	linkId:2, requiresAuth: true	}	},
		{	path: '/Просмотр объектов',		name: 'p-object-view',	component: PObjectView,	meta: {	linkId:3, requiresAuth: true,	isAdmin: true}	},
		{	path: '/Тестовый арм',			name: 'p-test-arm',		component: pTestArm,	meta: {	linkId:4, requiresAuth: true,	}	},
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			VueScrollTo.scrollTo("#app", 500, { offset: savedPosition.y })
			return savedPosition
		} else 
		VueScrollTo.scrollTo("#app")
	},
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		/*if (localStorage.getItem('jwt') == null) 
			next({ path: '/login',	params: {nextUrl: to.fullPath	} })
		else {*/
			/*let user = JSON.parse(localStorage.getItem('user'))
			if (to.matched.some(record => record.meta.isAdmin)) {
				if (user.isAdmin == 1)
					next()
				else 
					next({name: 'p-main-test'	})
			} else */
				next()
		/*}*/
	} else if (to.matched.some(record => record.meta.guest)) {
		if (localStorage.getItem('jwt') == null) 
			next()
		else 
			next({	name: 'p-main-test' })
	} else 
		next({	name: 'p-main-test' })
})

export default router

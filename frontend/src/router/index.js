import Vue from 'vue'
import Router from 'vue-router'
import PMainTest from '@/pages/p-main-test'
import PObjectView from '@/pages/p-object-view'
import PObjectWork from '@/pages/p-object-work'
/*import Login from '@/components/Login'
import Register from '@/components/Register'
import UserBoard from '@/components/UserBoard'
import Admin from '@/components/Admin'*/

Vue.use(Router)

let router = new Router({
	mode: 'history',
	routes: [
		{	path: '/',						name: 'p-main-test',	component: PMainTest,	meta: {	linkId:1, guest: true	}	},
		//{	path: '/login',					name: 'p-main-test',	component: PMainTest,	meta: {	linkId:, guest: true	}	},
		{	path: '/Работа с объектами',	name: 'p-object-work',	component: PObjectWork,	meta: {	linkId:2, requiresAuth: true	}	},
		{	path: '/Просмотр объектов',		name: 'p-object-view',	component: PObjectView,	meta: {	linkId:3, requiresAuth: true,	isAdmin: true}	},
	]
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
		next()
})

export default router

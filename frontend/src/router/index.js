import Vue from 'vue'
import Router from 'vue-router'
import VueScrollTo from 'vue-scrollto'


Vue.use(Router)

let router = new Router({
	mode: 'history',
	routes: [],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			VueScrollTo.scrollTo("#app", 500, { offset: savedPosition.y })
			return savedPosition
		} else 
		VueScrollTo.scrollTo("#app")
	},
})
/*
router.beforeEach((to, from, next) => { //начинка перекочевала в App.vue
	if(to.name==null)
		next({name:'p-main-test'})
	else
		next()
})*/

export default router

import Vue from 'vue'
import app from './App.vue'

import  h from './helpers/functions'
Object.defineProperty(Vue.prototype, '$h', { value: h })

import router from './router'

import  VueTheMask    from 'vue-the-mask'
Vue.use(VueTheMask )

window.io = require('socket.io-client')
import echo from 'laravel-echo'
window.echo = new echo({ broadcaster: 'socket.io',	host: window.location.hostname + ':6001'})

import moment from 'moment'
Object.defineProperty(Vue.prototype, '$moment', { value: moment })

import merge from 'lodash/merge'
import isEqual from 'lodash/isEqual'
Object.defineProperty(Vue.prototype, '$_', { value: {merge,isEqual} })


if(Array.prototype.equals)
	console.warn('Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there\'s a framework conflict or you\'ve got double inclusions in your code.');
else
	Array.prototype.equals = function (array) {
		if (!array)
			return false;
		if (this.length != array.length)
			return false;
		return isEqual(this, array)
	}

import {appTheme, curTheme, vuetify} from './helpers/vuetify'

import vuex from 'vuex'

import msg from './stores/s-msg'
import profile from './stores/s-profile'
import dialog from './stores/s-dialog'
import param from './stores/s-param'
import layout from './stores/s-layout'

Vue.use(vuex)
let store = new vuex.Store({modules: {	profile,msg, dialog, param,layout} })

import vueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(vueAxios, axios)

window.axios = axios.create({
	baseURL: process.env.NODE_ENV === 'production' ? '/' :process.env.VUE_APP_API_DEV_HREF,
	headers: {}
})

//ПОСЛЕ ОТПРАВКИ КАЖДОГО ЗАПРОСА
window.axios.interceptors.request.use(config => {
	const token = store.state.profile.token
	if (token && config.url !="oauth/token") 
		config.headers.Authorization = store.state.profile.tokenType+' '+token		
	else if ('Authorization' in config.headers )
		delete config.headers.Authorization
	return config
},
	error => Promise.reject(error)
)


//ПОСЛЕ ПОЛУЧЕНИЯ КАЖДОГО ОТВЕТА
window.axios.interceptors.response.use(res => {
	// после каждого получения ответа
	if (process.env.NODE_ENV !== 'production')
		console.log('[RES]=>', res)
	//store._actions['login/checkPermitionsOnCurrentPath'][0]()//check perm and redirect
	/*if (res.status == 401) 
		snack('Недостаточно прав для этого действия', 'error')*/

	return res
})

window._vue =  new Vue({el:'#app', router ,vuetify, store, render: h=> h(app),
	mounted() {
		this.$h.appThemeInit( {appTheme, curTheme, numeral:require('numeral'), _vm:this})
	},
})
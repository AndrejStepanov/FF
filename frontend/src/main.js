import Vue from 'vue'
import app from './App.vue'

import  h from './helpers/functions'
Object.defineProperty(Vue.prototype, '$h', { value: h })

const nvl = h.nvl
nvl(1)
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
import paramConfig from './stores/s-param-config'
import pageButton from './stores/s-page-button'
import layout from './stores/s-layout'
import system from './stores/s-system'

Vue.use(vuex)
let store = new vuex.Store({modules: {	profile,msg, dialog, param, paramConfig, pageButton, layout, system,} })

import vueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(vueAxios, axios)

window.axios = axios.create({
	baseURL: '/',
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
	if (process.env.NODE_ENV !== 'production')
		console.log('[RES]=>', res)
	return res
})

Vue.config.errorHandler = function (err, vm, info) {
    console.error('Vue.config.errorHandler',err);
	vm.$h.showMsg({ title: vm.$h.nvl(err.title,'$vuetify.errors.systemErrorJs.title')  , text: vm.$h.nvl(err.text, err.message),	params: {creator:'js', status:-1, trace: info+'<br>'+err.stack.replace(/\n/g,'<br>') }, withThrow:false,})
};
/* --непонятно что сними делать пока.
Vue.config.warnHandler = function (err, vm, info) {
    console.log('Custom vue warn handler: ', err,  info);
};
*/
window._vue =  new Vue({el:'#app', router ,vuetify, store, render: h=> h(app),
	mounted() {
		this.$h.appThemeInit( {appTheme, curTheme, numeral:require('numeral'), vm:this})
	},
})

window.onerror = function(message, source, line, column, error) {
	console.error('onerror',error);
	window._vue.$h.showMsg({ title: '$vuetify.errors.systemErrorJs.title'  , text: message, file: source, line:line+'('+column+')',	params: {creator:'js', status:-1, trace: error.stack.replace(/\n/g,'<br>') }, withThrow:false, })
	return false
}
window.addEventListener('unhandledrejection', function(event) {
	//console.error('unhandledrejection',event.reason);
	let vm = window._vue,
		text = vm.$h.nvl(event.reason.text, event.reason.message)
	vm.$h.showMsg({ title: vm.$h.nvl(event.reason.title,'$vuetify.errors.systemErrorJs.title')  , text:text ,	params: {creator:'js', status:-1, trace: text+'<br>'+event.reason.stack.replace(/\n/g,'<br>') }, withThrow:false,})
 });
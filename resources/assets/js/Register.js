import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Vuex from 'vuex';
import msg from './stores/s-Msg';
import profile from './stores/s-profile';
Vue.use(Vuex);
let  store = new Vuex.Store({modules: {	msg, profile}  })

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
window._Bus={axios:axios, bus: new Vue()};

import Vuetify from 'vuetify';
Vue.use(Vuetify, {theme: appTheme });

window.io = require('socket.io-client');
import Echo from "laravel-echo";
window.Echo = new Echo({
	broadcaster: 'socket.io',
	host: window.location.hostname + ':6001'
});

import App from './apps/Register.vue';

window._Vue=new Vue({el:'#app', store, render: h=> h(App)});
appThemeInit();

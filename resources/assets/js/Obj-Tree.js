//require('./bootstrap');
import Vue from 'vue';

import _Fun from './functions.js';
window._Fun=_Fun;

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import store from './stores/s-Obj-Tree';

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
window._Bus={axios:axios, bus: new Vue()};

import Vuetify from 'vuetify';
Vue.use(Vuetify, {theme: _Fun.appTheme });

window.io = require('socket.io-client');
import Echo from "laravel-echo";
window.Echo = new Echo({
	broadcaster: 'socket.io',
	host: window.location.hostname + ':6001'
});

import App from './apps/Obj-Tree.vue';

window._Vue=new Vue({el:'#app', store, render: h=> h(App)});
_Fun.appThemeInit();

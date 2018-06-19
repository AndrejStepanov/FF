//require('./bootstrap');
import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

window._Vue={axios:axios, bus: new Vue() };

import Vuetify from 'vuetify';
Vue.use(Vuetify);

window.io = require('socket.io-client');
import Echo from "laravel-echo"
window.Echo = new Echo({
	broadcaster: 'socket.io',
	host: window.location.hostname + ':6001'
});

import App from './apps/Obj_tree.vue';

new Vue(App).$mount('#app');
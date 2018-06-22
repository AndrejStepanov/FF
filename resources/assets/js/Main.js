import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

window._Vue={axios:axios, bus: new Vue() };

import Vuetify from 'vuetify';
import _Fun from './functions.js';
window._Fun=_Fun;
Vue.use(Vuetify, {theme: _Fun.theme });

import App from './apps/Main.vue';

new Vue(App).$mount('#app');
_Fun.initTheme();
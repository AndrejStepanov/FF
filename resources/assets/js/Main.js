import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

window._Vue={axios:axios, bus: new Vue() };

import Vuetify from 'vuetify';
Vue.use(Vuetify);

import App from './apps/Main.vue';

new Vue(App).$mount('#app');
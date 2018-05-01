import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);
window._Vue={axios:axios, bus: new Vue() };

import Vuetify from 'vuetify';
Vue.use(Vuetify);

import App from './components/Auth.vue';

var Hello = Vue.extend({
    template: 'Посмотрите на всех, кто тут работает!'
});
const routes = [
    {
        path: '/',
        name: 'Main',
        component: App
    },
    {
        path: '/test',
        name: 'Test',
        component: App
    },
    {
        path: '/a',
        name: 'a',
        component: Hello
    }
];

const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');

import vue from 'vue';

import vueRouter from 'vue-router';
vue.use(vueRouter);

import vuex from 'vuex';
import msg from '../stores/s-Msg';
import profile from '../stores/s-profile';
import dialog from '../stores/s-dialog';
import param from '../stores/s-param';
vue.use(vuex);
let  store = new vuex.Store({modules: {	msg, dialog, profile,param}  })

import vueAxios from 'vue-axios';
import axios from 'axios';
vue.use(vueAxios, axios);
window._bus={axios, bus: new vue()};

import vuetify from 'vuetify';
vue.use(vuetify, {theme: appTheme });

window.io = require('socket.io-client');
import echo from "laravel-echo";
window.echo = new echo({
	broadcaster: 'socket.io',
	host: window.location.hostname + ':6001'
});

import app from '../apps/Main.vue';

window._vue=new vue({el:'#app', store, render: h=> h(app)});
appThemeInit();
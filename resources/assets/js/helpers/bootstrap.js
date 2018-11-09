import vueRouter from 'vue-router';
window.Vue.use(vueRouter);

import vueAxios from 'vue-axios';
import axios from 'axios';
window.Vue.use(vueAxios, axios);
window._bus={axios, bus: new window.Vue()};

import vuetify from 'vuetify';
window.Vue.use(vuetify, {theme: appTheme });

window.io = require('socket.io-client');
import echo from "laravel-echo";
window.echo = new echo({
	broadcaster: 'socket.io',
	host: window.location.hostname + ':6001'
});

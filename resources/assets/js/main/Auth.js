import vue from 'vue';
import app from '../apps/Auth.vue';
window.Vue = vue

require('../helpers/bootstrap');

import vuetify from '../helpers/vuetify';

import vuex from 'vuex';
import msg from '../stores/s-msg';
import profile from '../stores/s-profile';
import dialog from '../stores/s-dialog';
import param from '../stores/s-param';
import layout from '../stores/s-layout';
window.Vue.use(vuex);
let store = new vuex.Store({modules: {	msg, dialog, profile,param,layout} });

window._vue=new window.Vue({el:'#app',vuetify, store, render: h=> h(app)});

appThemeInit({numeral:require("numeral")});
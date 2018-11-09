import vue from 'vue';
window.Vue = vue

require('../helpers/bootstrap');

import vuex from 'vuex';
import msg from '../stores/s-msg';
import profile from '../stores/s-profile';
import dialog from '../stores/s-dialog';
import param from '../stores/s-param';
window.Vue.use(vuex);
let store = new vuex.Store({modules: {	msg, dialog, profile,param} });

import App from '../apps/Obj-View.vue';
window._vue=new window.Vue({el:'#app', store, render: h=> h(App)});

appThemeInit({numeral:require("numeral")});

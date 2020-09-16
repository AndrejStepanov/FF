window.$ = window.jQuery = require('jquery');
require('./bootstrap');


import Vue from 'vue';
import app from './admin_app';

Vue.prototype.$ = $;

new Vue({el:'#app', render: h=> h(app)});

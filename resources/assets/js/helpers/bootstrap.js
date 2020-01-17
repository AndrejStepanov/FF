
import vueRouter from 'vue-router'
window.Vue.use(vueRouter)

import vueAxios from 'vue-axios'
import axios from 'axios'
window.Vue.use(vueAxios, axios)
window._bus={axios, bus: new window.Vue()}

import VueTheMask from 'vue-the-mask'
window.Vue.use(VueTheMask)

window.io = require('socket.io-client')
import echo from "laravel-echo"
window.echo = new echo({ broadcaster: 'socket.io',	host: window.location.hostname + ':6001'})
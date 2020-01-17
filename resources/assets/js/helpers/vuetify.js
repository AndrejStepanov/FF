import Vue from 'vue'
import Vuetify from 'vuetify/lib' //вьютифи птается влезть во вью при  импорте. если она это сделает, то она будет создана с дефолтными настройками.
import VueI18n from 'vue-i18n'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)
Vue.use(VueI18n)

import ru from '../i18n/russian.js'
window.i18nDic=window.i18nDic||{ru:{},en:{}}

const i18n = new VueI18n({  locale:  window.systemLanguage,   messages:{ru: {...ru, ...window.i18nDic.ru} ,} })

export default new Vuetify({ theme: appTheme, icons: { iconfont: 'md',},  lang: {  t: (key, ...params) => i18n.t(key, params) } })
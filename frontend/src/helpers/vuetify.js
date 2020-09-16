import Vue from 'vue'
import Vuetify from 'vuetify' //вьютифи птается влезть во вью при  импорте. если она это сделает, то она будет создана с дефолтными настройками.
import VueI18n from 'vue-i18n'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)
Vue.use(VueI18n)

import merge from 'lodash/merge'

import systemRu from '../i18n/russian/system.js'
import commonRu from '../i18n/russian/common.js'
import ru from 'vuetify/src/locale/ru.ts'
import en from 'vuetify/src/locale/en.ts'
window.i18nDic=window.i18nDic||{ru:{},en:{}}

const i18n = new VueI18n({  locale:  localStorage.systemlanguage ||'ru',   messages:{ ru:merge(merge(merge(systemRu,commonRu),window.i18nDic.ru), {$vuetify:ru}),  en: {$vuetify:en} } })

let curTheme ='light',
	appTheme={
		light: curTheme=='light',
		dark: curTheme=='dark',
		themes: {
			light: {primary: '#4caf50', secondary: '#4caf50', accent: '#5186de', tertiary: '#495057', error: '#f44336', warning: '#ffeb3b', info: '#2196f3', success: '#4caf50'},
			dark: {	primary: '#1868A5', secondary: '#939598', accent: '#2A91D8', tertiary: '#495057', error: '#f44336', warning: '#ffeb3b', info: '#2196f3', success: '#4caf50', checkBox:'#FFFFFF'},
		}
	}
let vuetify = new Vuetify({ theme: appTheme, icons: { iconfont: 'md',},  lang: {  t: (key, ...params) => i18n.t(key, params) } })
export { appTheme, curTheme, vuetify  }
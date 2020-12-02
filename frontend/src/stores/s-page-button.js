import Vue from 'vue'
import  $h from '../helpers/functions'

export default {
	namespaced: true,
	state: {	//= data
		funcButtons:{},
	},
	getters: { // computed properties
		getByPage: state => page => {
			return $h.nvl(state.funcButtons[page],{})
		},
		getDisable: state => (page,button) => {
			return $h.nvl(state.funcButtons[page][button].disabled,false)
		},
		buttonNormalaze: state => (page,buttons) => {
			let tmp={}
			for(let button in buttons)
				tmp[button] = { title:'', icon:'', img:'' ,  disabled:false, ...buttons[button], event:page+'-b-'+ $h.nvl(buttons[button].event,button) }
			return tmp
		},
	},
	actions:{
		async doInit({commit,getters,state},{page,buttons,}){
			commit('buttonSetting',{page, buttons:getters.buttonNormalaze(page,buttons) })
		},
		async doAdd({commit,getters,state},{page,buttons,}){
			buttons= {...getters.getByPage(page) , ...getters.buttonNormalaze(page,buttons)}
			commit('buttonSetting',{page, buttons})
		},
		async doEdit({commit,getters,state},{page,buttons,}){
			buttons= {...getters.getByPage(page) , ...getters.buttonNormalaze(page,buttons)}
			commit('buttonSetting',{page, buttons})
		},
		async doSetDisable({commit,getters,state},{page,button,value,}){
			commit('buttonSettingDisable',{page,button,value})
		},

	},
	mutations:{
		buttonSetting(state, {page, buttons,}){
			Vue.set(state.funcButtons, page, buttons)
		},
		buttonSettingDisable(state, {page,button,value,}){
			state.funcButtons[page][button].disabled=value
		},
	},
	strict: process.env.NODE_ENV !== 'production',
}
import Vue from 'vue'
import  $h from '../helpers/functions'

export default {
	namespaced: true,
	state: {	//= data
		funcButtons:{},
		compLocks:{},
	},
	getters: { // computed properties
		getByName: state => comp => {
			return $h.nvl(state.funcButtons[comp],{})
		},
		getLockByName: state => comp => {
			return $h.nvl(state.compLocks[comp],false)
		},
		getDisable: (state, getters) => (comp,button) => {
			return $h.nvl(state.funcButtons[comp][button].disabled,false)
		},
		getLoading: state => (comp,button) => {
			return $h.nvl(state.funcButtons[comp][button].loading,false)
		},
		buttonNormalaze: state => (comp,buttons) => {
			let tmp={}
			for(let button in buttons)
				tmp[button] = { 
					title:'', icon:'', img:'' ,  comp:button,  disabled:false,  loading:false, 
					...buttons[button], 
					event:comp+'-b-'+ button, 
					eventOrig:$h.nvl(buttons[button].event,button), disabledOrig: $h.nvl(buttons[button].disabled,false), 
				}
			return tmp
		},
	},
	actions:{
		async doInit({commit,getters,},{comp,buttons,}){
			commit('buttonSetting',{comp, buttons:getters.buttonNormalaze(comp,buttons) })
		},
		async doAdd({commit,getters,},{comp,buttons,}){
			buttons= {...getters.getByPage(comp) , ...getters.buttonNormalaze(comp,buttons)}
			commit('buttonSetting',{comp, buttons})
		},
		async doEdit({commit,getters,},{comp,buttons,}){
			buttons= {...getters.getByPage(comp) , ...getters.buttonNormalaze(comp,buttons)}
			commit('buttonSetting',{comp, buttons})
		},
		async doSetDisable({commit,},{comp,button,value,}){
			commit('buttonSettingDisable',{comp,button,value})
		},
		async doSetLoading({dispatch,commit,state},{comp,button,value, compLock}){
			if(state.funcButtons[comp]== undefined)//гонки, кнопка может быть удалена, но finally в модальном окне попытается ее обновить
				return
			commit('buttonSettingtLoading',{comp,button,value})
			if(compLock)
				await dispatch('doSetLock',{comp, value}) 			
		},
		async doSetLock({commit,},{comp, value}){
			commit('buttonSettingtLocking',{comp,value})
		},
		async doClear({commit,},{comp,}){
			commit('buttonClearing',{comp,  })
		},

	},
	mutations:{
		buttonSetting(state, {comp, buttons,}){
			Vue.set(state.funcButtons, comp, buttons)
			Vue.set(state.compLocks, comp, false)
		},
		buttonSettingDisable(state, {comp,button,value,}){
			if(!state.compLocks[comp])
				state.funcButtons[comp][button].disabled=value
			state.funcButtons[comp][button].disabledOrig=value
		},
		buttonSettingtLoading(state, {comp,button,value,}){
			state.funcButtons[comp][button].loading=value
		},
		buttonSettingtLocking(state, {comp,value}){
			state.compLocks[comp]=value
			for(let button in state.funcButtons[comp])
				state.funcButtons[comp][button].disabled=value? !state.funcButtons[comp][button].loading :state.funcButtons[comp][button].disabledOrig
		},
		buttonClearing(state, {comp}){
			Vue.delete(state.funcButtons, comp,)
			Vue.delete(state.compLocks, comp,)
		},
	},
	strict: process.env.NODE_ENV !== 'production',
}
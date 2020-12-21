import Vue from 'vue'
import  $h from '../helpers/functions'

export default {
	namespaced: true,
	state: {	//= data
		dialogs:{},
	},
	getters: { // computed properties
		getByName: (state,getters) => (comp, dialog) => {
			return  $h.nvlo($h.nvlo(state.dialogs[comp])[dialog])
		},
		getConfig: (state, getters) => (comp, dialog)  =>{
			console.log(comp, dialog, $h.nvl(getters.getByName(comp, dialog).config) );
			return  $h.nvl(getters.getByName(comp, dialog).config)
		},
		getIsShow: (state, getters) => (comp, dialog)  =>{
			return  $h.nvl(getters.getByName(comp, dialog).isShow)
		},
		getShowen: (state, getters) => (comp)  =>{
			let res={}
			for( let dialog in $h.nvlo(state.dialogs[comp]) )
				if( state.dialogs[comp][dialog].isShow)
					res[dialog]=state.dialogs[comp][dialog]
			return res
		},
		getParams: (state, getters) => (comp, dialog)  =>{
			return  $h.nvl(getters.getByName(comp, dialog).params)
		},
	},
	actions:{
		async doInit({commit,getters,state},{comp, dialog, config, params, parent }){
			if($h.nvl(comp) ==''  )
				$h.showMsg( {...$h.getErrDesc('dialogInitNoParam'), textParams:[ 'comp',  ] } )
			if($h.nvl(dialog) ==''  )
				$h.showMsg( {...$h.getErrDesc('dialogInitNoParam'), textParams:[ 'dialog',  ] } )
			if (getters.getByName(comp, dialog).link != undefined )
				$h.showMsg( {...$h.getErrDesc('dialogInitDouble'), textParams:[ comp, dialog,  ] } )
			config.persistent=config.persistent||true
			params = $h.nvlo(params) 
			commit('adding',{comp, dialog, link:{comp,dialog} ,  config, params, parent})
		},
		async doShowChange({commit,getters,state},{comp, dialog, isShow}){
			commit('showSetting',{comp, dialog, isShow})
		},
		async doSetAllParams({commit,getters,state},{comp, dialog, params}){
			commit('allParamSetting',{comp, dialog, params})
		},
		async doSetParam({commit,getters,state},{comp, dialog, params }){
			for( let paramsName in params )
				commit('paramSetting',{comp, dialog, paramsName, paramsVal:params[paramsName] })
		},
		async doClear({commit,getters,state},{comp, }){
			commit('clearing',{comp, })
		},
	},
	mutations:{
		adding(state, {comp, dialog, link, config, params, parent}){
			if(state.dialogs[comp]== undefined )
				Vue.set(state.dialogs, comp, {})
			Vue.set(state.dialogs[comp], dialog,  {config, link, params, parent, isShow:false,})
		},
		showSetting(state, {comp, dialog, isShow}){
			state.dialogs[comp][dialog].isShow =isShow
		},
		allParamSetting(state, {comp, dialog, params}){
			state.dialogs[comp][dialog].params =params
		},
		paramSetting(state, {comp, dialog, paramsName, paramsVal}){
			console.log(comp, dialog, paramsName, paramsVal);
			Vue.set(state.dialogs[comp][dialog].params, paramsName, paramsVal)
		},
		clearing(state, {comp,}){
			Vue.delete(state.dialogs, comp,)
		},
	},
	strict: process.env.NODE_ENV !== 'production',
}
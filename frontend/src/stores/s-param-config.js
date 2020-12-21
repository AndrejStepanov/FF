import Vue from 'vue'
import  $h from '../helpers/functions'

export default {
	namespaced: true,
	state: {	//= data
		inputs:{},
		filters:{},
	},
	getters: { // computed properties
		getGroup: state=> (type, form, empty=[])=>{
			type=type.toLowerCase()
			return $h.nvl($h.nvlo(state[type])[form], empty )
		},
		getTypes: state=> ()=>{
			let tmp=[]
			for(let name in state)
				tmp.push(name)
			return tmp
		},
		
	},
	actions:{	
		async doInit({commit, state},{form,params, type}){	// jshint ignore:start
			params=params||[]  
			type=(type||'inputs').toLowerCase()
			if(state[type]== undefined)
				$h.showMsg(  {...$h.getErrDesc('paramsConfInvalidType'), textParams:[type] } )
			params=params.sort( (a, b) =>{return $h.sort(a, b, 'sort_seq', 'sort_seq')})
			commit('allConfigSet' ,{  type, form, params } )
		}, // jshint ignore:end
	},
	mutations:{
		allConfigSet(state, {type, form,params, }){
			console.log('allConfigSet',state, type,form, params);
			Vue.set(state[type], form, params)
		},

	},
	strict: process.env.NODE_ENV !== 'production',
}
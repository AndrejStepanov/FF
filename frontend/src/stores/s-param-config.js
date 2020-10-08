import Vue from 'vue'
import  $h from '../helpers/functions'

export default {
	namespaced: true,
	state: {	//= data
		params:{},//массив массивов - {номер группы параметров:{'код параметра':{value:'значение параметра, если undefined - не указан', view:'отображаемое пользователю значение'}}
	},
	getters: { // computed properties
		getGroup: state=> form=>{
			return $h.nvl(state.params[form],{})
		},
	},
	actions:{	
		async doInit({dispatch,commit,getters,state},{form,params}){	
			params=params||[]  // jshint ignore:start
			commit("allParamsConfigSet",{ form, params: params.reduce((res, row) => ({ 
					...res, [row.code]:{...row,}  
				}  // jshint ignore:end
			), {}) } )
		},
	},
	mutations:{
		allParamsConfigSet(state, {form,params, }){
			console.log('allParamsConfigSet',state, form, params);
			Vue.set(state.params, form, params)
		},

	},
	strict: process.env.NODE_ENV !== 'production',
}
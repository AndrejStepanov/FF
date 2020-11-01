import Vue from 'vue'
import  $h from '../helpers/functions'

export default {
	namespaced: true,
	state: {	//= data
		inputs:{},
		filters:{},
	},
	getters: { // computed properties
		getGroupInputs: state=> form=>{
			return $h.nvl(state.inputs[form],{})
		},
		getGroupFilters: state=> form=>{
			return $h.nvl(state.filters[form],{})
		},
	},
	actions:{	
		async doInit({commit},{form,params, type}){	// jshint ignore:start
			params=params||[]  
			type=type||'input'
			if (type == 'input')
				commit("allInputsConfigSet",{ form, inputs: params.reduce((res, row) => ({ 
						...res, [row.code]:{...row,}  
					}  
				), {}) } )
			else
				commit("allFiltersConfigSet",{ form, filters: params.reduce((res, row) => ({ 
						...res, [row.code]:{...row,}  
					} 
				), {}) } )
		}, // jshint ignore:end
	},
	mutations:{
		allParamsConfigSet(state, {form,inputs, }){
			console.log('allInputsConfigSet',state, form, inputs);
			Vue.set(state.inputs, form, inputs)
		},
		allFiltersConfigSet(state, {form,filters, }){
			console.log('allInputsConfigSet',state, form, filters);
			Vue.set(state.filters, form, filters)
		},

	},
	strict: process.env.NODE_ENV !== 'production',
}
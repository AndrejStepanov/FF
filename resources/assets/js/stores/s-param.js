export default {
	namespaced: true,
	state: {	//= data
		params:{},//массив массивов - {номер группы параметров:{'код параметра':{value:'значение параметра, если undefined - не указан', view:'отображаемое пользователю значение'}}
	},
	getters: { // computed properties
		getGroup: state=> num=>{
			return nvl(state.params[num],{})
		},
		getByCode: (state,getters) =>(num,code)=> {
			return getters.getGroup(num)[code]
		},
		getTodo: (state,getters) =>(num)=> {
			return getters.getGroup(num)
		},
	},
	actions:{	
		async doInit({commit,getters,state},{num,}){
			commit("allParamsClearing",{ num, })			
		},
		async doSetData({commit,getters,state},{num,data}){
			commit("paramSettingData",{ num, code:data.code,data})			
		},
		async doSet({commit,getters,state},{num,code, value, value2, checked=1, sign='='}){
			commit("paramSetting",{ num,code, value, value2, checked,sign})			
		},
		async doSetSeveral({dispatch,commit,getters,state},{num,params={} }){// params:{code:{value:'значение параметра, если undefined - не указан', view:'отображаемое пользователю значение'}}
			Object.keys(params).forEach(code=>{
				dispatch("doSet",{num, code, value:params[code].value, value2:params[code].value2, checked:params[code].checked, sign:params[code].sign}) 
			})	
		},
		async doSetAll({commit,getters,state},{num,params={} }){// params:{code:{value:'значение параметра, если undefined - не указан', view:'отображаемое пользователю значение'}}
			await dispatch("doInit",{num,})
			Object.keys(params).forEach(code=>{
				dispatch("doSet",{num, code, value:params[code].value, view:params[code].view, checked:params[code].checked, sign:params[code].sign}) 
			})	
		},
	},
	mutations:{
		allParamsClearing(state, {num, code, value}){
			state.params[num] ={}
		},
		paramSettingData(state, {num,code, data}){
			state.params[num][code] =data
		},
		paramSetting(state, {num, code, value,value2,checked,sign}){
			state.params[num][code]={...state.params[num][code], ...{value,value2,checked,sign}}
		},

	},
}
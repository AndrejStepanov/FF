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
		getTodoChecked: (state,getters) =>(num)=> {
			let data= getters.getGroup(num), tmp={}
			for(let name in data)
				if(nvl(data[name].checked,false))
					tmp[name]=data[name]
			return tmp
		},
	},
	actions:{	
		async doInit({dispatch,commit,getters,state},{num,params={}}){
			//commit("allParamsClearing",{ num, })		
			commit("allParamsSet",{ num, params: params.reduce((res, row) => ({ ...res, [row.code]:{sign:'=',  ...row,}  } ), {}) } )
		},
		async doSetData({commit,getters,state},{num,data}){
			commit("paramSettingData",{ num, code:data.code,data})			
		},
		async doSet({commit,getters,state},{num,code, data}){
			commit("paramSetting",{ num,code, data})		
		},
		async doSetSeveral({dispatch,commit,getters,state},{num,params={} }){// params:{code:{value:'значение параметра, если undefined - не указан', view:'отображаемое пользователю значение'}}
			Object.keys(params).forEach(code=>{
				dispatch("doSet",{num, code, value:params[code].value, value2:params[code].value2, checked:params[code].checked, sign:params[code].sign}) 
			})	
		},
	},
	mutations:{
		allParamsClearing(state, {num, }){
			Vue.set(state.params, num, {})
		},
		allParamsSet(state, {num,params, }){
			Vue.set(state.params, num, params)
		},
		paramSettingData(state, {num,code, data}){
			Vue.set(state.params[num], code, data)
		},
		paramSetting(state, {num, code, data}){
			state.params[num][code]={...state.params[num][code], ...data}
		},

	},
	strict: process.env.NODE_ENV !== 'production',
}
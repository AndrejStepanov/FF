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
		getTodo: (state,getters) =>(num,withSign=false)=> {
			let tmp={}, data=getters.getGroup(num)
			Object.keys(data).forEach(code=>{
				if( data[code].checked){
					tmp[code]=data[code].value
					if(withSign)
						tmp[code+'_sign']=data[code].sign
				}
			})
			return tmp
		},
	},
	actions:{	
		async doInit({commit,getters,state},{num,}){
			commit("allParamsClearing",{ num, })			
		},
		async doSet({commit,getters,state},{num,code, value, view, checked=1, sign='='}){
			commit("paramSetting",{ num,code, value, view, checked,sign})			
		},
		async doSetSeveral({dispatch,commit,getters,state},{num,params={} }){// params:{code:{value:'значение параметра, если undefined - не указан', view:'отображаемое пользователю значение'}}
			Object.keys(params).forEach(code=>{
				dispatch("doSet",{num, code, value:params[code].value, view:params[code].view, checked:params[code].checked, sign:params[code].sign}) 
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
		paramSetting(state, {num, code, value,view,checked,sign}){
			state.params[num][code] ={value, view, checked,sign}
		},

	},
}
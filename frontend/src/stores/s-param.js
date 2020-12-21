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
		getByCode: (state,getters) =>(form,code)=> {
			return getters.getGroup(form)[code]
		},
		getValByCode: (state,getters) =>(form,code)=> {
			let data = getters.getByCode(form,code)
			return  $h.nvlo(data,'')==''?null: data[ getters.getValFieldByData(data) ]
		},
		getValFieldByData: (state,getters) =>data=> {
			return  data.multy || ['RANGE', 'LIST', 'DATE', 'DATE_RANGE', 'DATETIME', 'DATETIME_RANGE', 'TIME', 'TIME_RANGE'].indexOf(data.type)!=-1  ?'value_arr': 'value'
		},
		getParamsInfo: (state,getters) =>(form)=> {
			return getters.getGroup(form)
		},
		getParamsInfoChecked: (state,getters) =>(form)=> {
			let data= getters.getGroup(form), tmp={}
			for(let name in data)
				if( data[name].checked)
					tmp[name]=data[name]
			return tmp
		},
		getParamsToObj: (state,getters) =>(form, withoutChecked)=> {
			let data= getters.getGroup(form), tmp={}
			withoutChecked=withoutChecked||'N'
			for(let name in data)
				if(withoutChecked=='Y' || data[name].checked){
					let field = getters.getValFieldByData(data[name])
					tmp[name]= field == 'value' ? data[name].value :
						field=='value_arr' && !data[name].multy &&  ['LIST', 'DATE',  'DATETIME',  'TIME', ].indexOf(data[name].type)!=-1? data[name].value_arr[0].slice() :
						data[name].value_arr.slice()
				}
			return tmp
		},
	},
	actions:{	
		async doInit({dispatch,commit,getters,state, rootGetters },{form, id, type}){ // jshint ignore:start
			let tmp = rootGetters['paramConfig/getGroup'](type,form, null)
			if(tmp==null)
				$h.showMsg(  {...$h.getErrDesc('paramsInitInvalidParam'), textParams:[form, type] } )
			commit("allParamsSet",{ form:form+$h.idSep+id, params: rootGetters['paramConfig/getGroup'](type,form).reduce((res, row) => ({ 
				...res, [row.code]:{
					id:$h.getNewId(),
					sign:'=', need_reset_val:true, need_reset_val_arr:true, checked:true, defaultInit:false, value: '', valueView:'',value_arr: ['',''], valueArrView:['',''], table_values:[], table_values_init:false,  
					multy:false,  delim: ['DATE_RANGE', 'DATETIME_RANGE', 'TIME_RANGE', 'RANGE'].indexOf(row.type)!=-1 ? '--':',', //';', вьютифишный лист использует запятую как сеператор
					...row,}  
			}  // jshint ignore:end
			), {}) } )
		},
		async doSetData({commit,getters,state},{form,data}){
			commit("paramSettingData",{ form, code:data.code,data})			
		},
		async doSet({commit,getters,state},{form,code, data}){
			commit("paramSetting",{ form,code, data})		
		},
		async doSetValOutside({commit,getters,state},{form,code, value, data}){
			let param =getters.getByCode(form,code), valField='value', type =  $h.typeOfObject(value), promise={}
			data=data||{}
			if( $h.nvlo(param,'')=='')
				return
			valField =  getters.getValFieldByData( param )
			if(type == 'object'  )
				value  = 'value' in value? value.value : code in value? value[code] : valField in value? value[valField]: ''
			type =  $h.typeOfObject(value)
			if(valField=='value_arr' &&  type!= 'array' ){
				if(type== 'string' &&  (param.multy || ['DATE_RANGE', 'DATETIME_RANGE', 'TIME_RANGE', 'RANGE'].indexOf(param.type)!=-1 ) )
					value = value.split(param.delim)
				else
					value=[value]
			}
			if(valField=='value' && type == 'array'  )
				value= value.length>0? value[0]:''
			if(!param.defaultInit && ( !('defaultInit' in data) || !data.defaultInit) ){
				do{
					promise= new Promise(function(resolve, reject) {
						setTimeout(()=> resolve(getters.getByCode(form,code)  )  ,  500)
					})
					param =  await promise
					console.log('doSetValOutside', param, value);
				}
				while(!param.defaultInit)
			}
			commit("paramSetting",{ form,code, data:{...data, need_reset_val:true, need_reset_val_arr:true, [ valField ]:value } })		
		},
		async doSetSeveralValOutside({dispatch},{form, value, data}){	
			for (let code in value) 
				dispatch('doSetValOutside',{form, code, value:value[code], data})
		},
		async doSetSeveral({dispatch,commit,getters,state},{form,params }){// params:{code:{value:'значение параметра, если undefined - не указан', view:'отображаемое пользователю значение'}}
			for (let code in params) 
				if ($h.nvlo( getters.getByCode(form,code),'')!='')
					commit("paramSetting",{form, code, data:params[code]}) 
		},
		async doClear({commit,getters,state},{form,}){
			commit("paramClearing",{ form,})		
		},
	},
	mutations:{
		paramClearing(state, {form, }){
			console.log('paramClearing',state, form);
			Vue.delete(state.params, form)
		},
		allParamsSet(state, {form,params, }){
			console.log('allParamsSet',state, form, params);
			Vue.set(state.params, form, params)
		},
		paramSettingData(state, {form,code, data}){
			console.log('paramSettingData',state, form, code, data);
			Vue.set(state.params[form], code, data)
		},
		paramSetting(state, {form, code, data}){
			console.log('paramSetting',state, form, code, data);
			for (let field in data)
				Vue.set(state.params[form][code], field, data[field])
		},

	},
	strict: process.env.NODE_ENV !== 'production',
}
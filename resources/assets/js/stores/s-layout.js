export default {
	namespaced: true,
	state: {	//= data
		struct:{},
		structDesc:{},
		structSizePx:{},
	},
	getters: { // computed properties
		getByName: state => name => {
			return nvl(state.struct[name], null )
		},
		getDescByHead: state => name => {
			return nvl(state.structDesc[name] )
		},
		getDescByName: state => (head,name) => {
			return nvl(state.structDesc[head][name] )
		},
		getSizePxByHead: state => name => {
			return nvl(state.structSizePx[name] )
		},
		getSizePxByName: state => (head,name) => {
			return nvl(state.structSizePx[head][name] )
		},
	},
	actions:{
		async doInit({dispatch,commit,getters,state},structs){
			commit("structSetting",{ structs, })
			var structParse = ({ config,parent='',last='', num=0})=>{
				let tmp ={} 
				last=last||config.name
				if(config.data!=undefined && config.data.length){
					config.data.forEach((element,idx) => {
						tmp={...tmp,...structParse({config:element, parent:config.name, last: config.data[config.data.length - 1].name, num:idx, } ) }
					})
				}
				return  { [config.name]:{...config, parent,last,isLast:last==config.name, num}, ...tmp}
			}
			for (let struct in structs){
				commit("structDescSetting",{ struct:{[struct]: structParse({config:structs[struct]}), } }) 
				commit("structSizePxInitting",{ head:struct }) 
				dispatch("doSizePxRecalc",{head:struct, parentSizePx:structs[struct].sizePx})
			}			
		},
		async doSizeSet({dispatch,commit,getters,state},{head, name, size}){
			let lastName = state.structDesc[head][name].last
			let res={[name]:{}, [lastName]:{},};
			['height','width'].forEach(curAttr=>{
				let sizeOrig = parseFloat(state.structDesc[head][name][curAttr])
				let sizeCur=Math.max( Math.min( size[curAttr]||sizeOrig, 100),0)
				let changeSize =  sizeCur-sizeOrig,
					sizeLast = parseFloat(state.structDesc[head][lastName][curAttr])
				if(sizeLast-changeSize- 5<=0){
					changeSize= sizeLast -5
					sizeCur =  sizeOrig+changeSize
					sizeLast= 5					
				}
				else if(sizeCur- 5<=0){
					changeSize= sizeOrig  -5
					sizeLast  = sizeLast +changeSize
					sizeCur= 5					
				}
				else 
					sizeLast-=changeSize
				res[name][curAttr]=sizeCur+'%'
				res[lastName][curAttr]=sizeLast+'%'
			})
			commit("structSizeSetting",{head, name, size:res[name], })		
			commit("structSizeSetting",{head, name:lastName,  size:res[lastName], })		
		},
		async doSizePxRecalc({commit,getters,state},{head, name, parentSizePx}){
			var structSizer = ({cur, parentSize})=>{
				let tmp = { 
					width: parseFloat(cur.width)/100 *parentSize.width-(5*( cur.parent!='' && state.structDesc[head][cur.parent ].layout=='vertical'?cur.num:0 ) ) -Math.random() , 
					height: parseFloat(cur.height)/100 *parentSize.height-(5*(cur.parent!='' &&  state.structDesc[head][cur.parent ].layout=='horizontal'?cur.num:0 ) )-Math.random(),	} 
				// Math.random() - некоторая хитрость, что бы сделать значения в дочерних компонентах отличными, от значений после перерасчета
				commit("structSizePxSetting",{ head, name:cur.name, size:tmp }) 
				if(cur.data!=undefined && cur.data.length)
					cur.data.forEach((element,idx) => {
						structSizer({cur:state.structDesc[head][element.name], parentSize:tmp, num:idx} )
					});
			}
			name=name||state.struct[head].name
			parentSizePx= parentSizePx|| (name == state.struct[head].name ? state.structSizePx[head][name]: state.structSizePx[head][ state.structDesc[head][name].parent ] )
			structSizer({cur:state.structDesc[head][name], parentSize:parentSizePx})		
		},
		async doSizePxChange({commit,getters,state},{head, names=[], attr}){
			names.forEach(name=>commit("structSizePxSetting",{ head, name, size:{[attr]:state.structSizePx[head][name][attr]+1} }) )					
		},

	},
	mutations:{
		structSetting(state, {structs, }){
			state.struct ={...state.struct, ...structs}
		},
		structDescSetting(state, {struct, }){
			state.structDesc ={...state.struct, ...struct}
		},
		structSizeSetting(state, {head, name, size, }){
			state.structDesc[head][name] ={ ...state.structDesc[head][name] , ...size}
		},
		structSizePxInitting(state, {head, }){
			Vue.set(state.structSizePx, head, {})
		},
		structSizePxSetting(state, {head, name, size, }){
			if(!state.structSizePx[head][name])
				Vue.set(state.structSizePx[head], name, {})
			state.structSizePx[head][name] ={ ...state.structSizePx[head][name],  ...size,}
		},
	},
	strict: process.env.NODE_ENV !== 'production',
}
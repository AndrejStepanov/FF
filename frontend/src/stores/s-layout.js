import Vue from 'vue'
import  $h from '../helpers/functions'


export default {
	namespaced: true,
	state: {	//= data
		struct:{},
		structDesc:{},
		structSizePx:{},
		structLink:{},
	},
	getters: { // computed properties
		getByHead: state => head => {
			return $h.nvlo(state.struct[head], null)
		},
		getDescByHead: (state) => head => {
			return $h.nvlo(state.structDesc[head] )
		},
		getDescByName: (state,getters) => (head,name) => {
			return $h.nvlo(getters.getDescByHead(head)[name] )
		},
		getSizePxByHead: state => head => {
			return $h.nvlo(state.structSizePx[head] )
		},
		getSizePxByName: (state,getters) => (head,name) => {
			return $h.nvlo(getters.getSizePxByHead(head)[name] )
		},
		getLink: state => (head) => {
			return $h.nvl(state.structLink[head])
		},
		getLinkObj: (state,getters) => (head) => {
				let tmp = getters.getLink(head)
				if(tmp=='')
					return {}
				tmp = tmp.split( $h.linkSep )
				return {head: tmp[0], name: tmp[1] }
		},
		getLinkChilds: state => (head,name) => {
			let e = [], parent = head+$h.linkSep+name
			for (let child in state.structLink)
				if (state.structLink[child]==parent)
					e.push(child)
			return e
		},
		getLinkChildsFromArr: state => (head,nameArr) => {
			let e = [], parentArr = nameArr.map(row=> head+$h.linkSep+row )
			for (let child in state.structLink)
				if(parentArr.indexOf(state.structLink[child])!=-1)
					e.push(child)
			return e
		},
	},
	actions:{
		async doInit({dispatch,commit,getters,state},structs){
			commit('structClear',{ head:Object.keys(structs)[0] , })
			commit('structSetting',{ head:Object.keys(structs)[0] ,structs, })
			let tmp ={}
			var structParse = ({ head, config, parent='', parentLayout='', num=0, prevResizable='', lastLayout=''})=>{
				let resizableLast = '', resizableLastNum = 0, resizableNext = '', resizable='resizable' in config? config.resizable: true
				config.layout=(config.layout||'').toLowerCase()
				config.cssClass=config.cssClass||''
				if( $h.typeOfObject(config.cssClass)!='string'  ){
					if($h.typeOfObject(config.cssClass)=='array')
						config.cssClass= config.cssClass.join(' ')
					else if($h.typeOfObject(config.cssClass)=='object')
						config.cssClass= Object.keys(config.cssClass).join(' ')
					else{
						console.log('Для css класса нет обработчика, класс сброшен', head, config.name, config.cssClass);
						config.cssClass=''
					}
				}
				config.width=config.width||'100%'
				config.height=config.height||'100%'
				if(config.data!=undefined && config.data.length){
					if(['horizontal', 'vertical'].indexOf(config.layout)==-1 ) //'horizontal' - внутри будут строки,  'vertical' - внутри будут столбики;
						$h.showMsg(  {...$h.getErrDesc('layoutWrongLayout'), textParams:[config.layout] } )
					config.data.forEach((element,idx) => {
						structParse( {head, config:element, parent:config.name, parentLayout:config.layout,  num:idx,	prevResizable: resizableLast, lastLayout:config.data[ config.data.length-1 ].name } )
						if( tmp[element.name].resizable)
							resizableLast = element.name
					})
					if(config.childBalance !='' && tmp[config.childBalance] && tmp[config.childBalance].resizable)
						resizableLast=config.childBalance
					resizableLastNum = tmp[ resizableLast ].num
					for(let i = config.data.length; i>0; i--){
						tmp[ config.data[ i-1 ].name ].changeLayoutNext= resizableNext
						if( tmp[ config.data[ i-1 ].name ].resizable )
							resizableNext = config.data[ i-1].name
					}
					config.data.forEach((element,idx) => {
						if(resizableLastNum>idx )
							tmp[element.name].balanceLayout=  resizableLast == element.name? '': resizableLast
						else{
							tmp[element.name].balanceLayout=  tmp[element.name].changeLayoutNext
							tmp[element.name].changeLayout=  resizableLast
						}
					})
				}
				if(tmp[config.name]!=undefined)
					$h.showMsg(  {...$h.getErrDesc('layoutDublicateNames'), textParams:[head, config.name] } )
				tmp = {
					[config.name]:{
						...config,  parent,  parentLayout: $h.nvl(parentLayout, config.layout), lastLayout, changeLayout:resizable?config.name:prevResizable , changeLayoutNext:'',
						balanceLayout:'',  num, resizable , childBalance:resizableLast
					},
					...tmp
				}
				return tmp
			}
			for (let struct in structs){
				commit('structDescSetting',{ head:struct, struct:structParse({head:struct, config:structs[struct]}),  }) 
				commit('structSizePxInitting',{ head:struct }) 
			}		
		},
		async doSizeSet({dispatch,commit,getters,state},{head, name, size}){
			let changeName = state.structDesc[head][name].changeLayout,
				balanceName = state.structDesc[head][name].balanceLayout,
				curAttr = state.structDesc[head][changeName].parentLayout== 'vertical'?'width':'height',
				res={[changeName]:{}, [balanceName]:{},},
				link =getters.getLinkObj([head]),
				container = state.structDesc[head][changeName].parent!=''? state.structSizePx[head][ state.structDesc[head][changeName].parent ] : 
					$h.nvlo(link,'')!='' ? state.structSizePx[link.head][link.changeName] : 
					state.structDesc[head][changeName].pxInit,
				isPx= {cur: state.structDesc[head][changeName][curAttr].toLowerCase().indexOf('px')>0, bal:  state.structDesc[head][balanceName][curAttr].toLowerCase().indexOf('px')>0 },
				sizeOrig =  state.structSizePx[head][changeName][curAttr]+$h.layoutSepSize,
				sizeBalance = state.structSizePx[head][balanceName][curAttr]+( balanceName == state.structDesc[head][changeName].lastLayout? 0 : $h.layoutSepSize),
				changeSize =0
			
			if((''+size).toLowerCase().indexOf('%')>0)
				size =  parseFloat(size)/100* container[curAttr] 
			size=Math.max( Math.min( parseFloat(size)||sizeOrig, 100000),0)
			changeSize =  size-sizeOrig
			if(sizeBalance-changeSize- $h.layoutMinSize<=0){
				changeSize= sizeBalance -$h.layoutMinSize
				size =  sizeOrig+changeSize
				sizeBalance= $h.layoutMinSize					
			}
			else if(size- $h.layoutMinSize<=0){
				changeSize= sizeOrig  -$h.layoutMinSize
				sizeBalance  = sizeBalance +changeSize
				size= $h.layoutMinSize					
			}
			else 
				sizeBalance-=changeSize
			res[changeName][curAttr]= isPx.cur? size+'px' :   size / container[curAttr]*100  +'%'
			res[balanceName][curAttr]=isPx.bal? sizeBalance+'px' :   sizeBalance / container[curAttr]*100   +'%'
			commit('structSizeSetting',{head, name:changeName, size:res[changeName], })		
			commit('structSizeSetting',{head, name:balanceName,  size:res[balanceName], })		
			await dispatch('doSizePxRecalc',{head,  name:state.structDesc[head][changeName].parent })
		},
		async doSizePxRecalc({dispatch,commit,getters,state},{head, name, parentSizePx}){
			let namesNeedRecalc={}
			name=name||state.struct[head].name
			parentSizePx= parentSizePx|| state.structSizePx[head] [ (name == state.struct[head].name ? name: state.structDesc[head][name].parent  ) ]
			if(state.structDesc[head]==undefined || state.structDesc[head][name]==undefined)
				return
			if(state.structDesc[head][name].parent=='')
				state.structDesc[head][name].pxInit = parentSizePx							
			let structSizer = async ({cur, parentSize})=>{
				let pxSetted=0, correct={width:'0%', height:'0%'}, curAttr = cur.layout== 'vertical'?'width':'height', res =   {
					width:  cur.width.toLowerCase().indexOf('px')>0 ? parseFloat(cur.width) : parseFloat(cur.width)/100 *parseFloat(parentSize.width), 
					height: cur.height.toLowerCase().indexOf('px')>0 ? parseFloat(cur.height) : parseFloat(cur.height)/100 *parseFloat(parentSize.height) ,
				}
				commit('structSizePxSetting',{ head, name:cur.name, size:res }) 
				namesNeedRecalc[cur.name]=true
				if(cur.data!=undefined && cur.data.length){
					for( let idx=0, element={}; idx<cur.data.length; idx++  ){ //ForEach ведет себя асинхронно для асинхронных функций.
						element = cur.data[idx]
						await structSizer({cur:state.structDesc[head][element.name], parentSize:res, num:idx} )
						pxSetted+=state.structSizePx[head][element.name][curAttr]
					}
					if( cur.childBalance!='' && state.structSizePx[head][cur.name][curAttr]+(cur.data.length-1)*$h.layoutSepSize!=pxSetted ){
						correct[curAttr] =  ( state.structSizePx[head][cur.childBalance][curAttr] + state.structSizePx[head][cur.name][curAttr] - pxSetted -(cur.data.length-1)*$h.layoutSepSize )  / state.structSizePx[head][cur.name][curAttr]*100  +'%'
						if(parseFloat(correct[curAttr])<0  ) // если результат больше родителя, пляшем от размеров родителя
							correct[curAttr]= $h.layoutMinSize / state.structSizePx[head][cur.name][curAttr]*100  +'%'
						correct[curAttr=='width'?'height' : 'width']=state.structDesc[head][cur.childBalance][curAttr=='width'?'height' : 'width']
						commit('structSizeSetting',{head, name:cur.childBalance, size:correct })
						await dispatch('doSizePxRecalc',{head, name:cur.childBalance })
						namesNeedRecalc[cur.childBalance]=true
					}
				}
			}
			await structSizer({cur:state.structDesc[head][name], parentSize:parentSizePx})		
			for( let idx=0, data = getters.getLinkChildsFromArr(head, Object.keys(namesNeedRecalc) ); idx<data.length; idx++  ){
				let tmp = state.structLink[ data[idx] ].split($h.linkSep)
				await dispatch('doSizePxRecalc',{head:data[idx],  parentSizePx: state.structSizePx[ tmp[0] ][ tmp[1] ]  })
			}
		},
		async doSizePxChange({commit,getters,state},{head, name, attr, val}){
			commit('structSizePxSetting',{ head, name, size:{...state.structSizePx[head][name].size, [attr]:val} })			
		},
		async doLinkSet({dispatch,commit,getters,state},{head, parentHead, parentName='', }){
			parentName=parentName||state.struct[parentHead].name
			commit('structLinkSetting',{ parentHead, parentName, head})
			await dispatch('doSizePxRecalc',{head, parentSizePx: getters.getSizePxByName(parentHead, parentName) })
		},
		async doLinkDel({commit,getters,state},{head, }){
			commit('structLinkDel',{ head})
		},
	},
	mutations:{
		structClear(state, {head, }){
			Vue.delete( state.struct,head ) 
			Vue.delete( state.structDesc,head ) 
			Vue.delete( state.structSizePx,head ) 
		},
		structSetting(state, {head, structs, }){
			Vue.set(state.struct, head, structs[head])
		},
		structDescSetting(state, {head, struct, }){
			Vue.set(state.structDesc, head, struct)
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
			Vue.set(state.structSizePx[head], name, size)
		},
		structLinkSetting(state, {parentHead, parentName, head, }){
			Vue.set(state.structLink, head, parentHead+$h.linkSep+parentName )
		},
		structLinkDel(state, {head, }){
			Vue.delete( state.structLink, head ) 
		},
	},
	strict: process.env.NODE_ENV !== 'production',
}
import  $h from '../helpers/functions'

export default {
	namespaced: true,
	state: {	//= data
		msgs:[],
	},
	getters: { // computed properties
		getMsg: state => id => {
			return $h.nvl(state.msgs.find(msg =>msg.id===id ) )
		},
		getMsgIndex: state => id => {
			return state.msgs.findIndex(msg =>msg.id===id )
		},		
		getAllMsg: state => {
			return state.msgs
		},
	},
	actions:{
		doAdd({commit,getters,state},{timeout, y,x, modeLine, type, title, text,status,trace,file,line, creator,}){
			let id = Math.floor(Math.random() * $h.MAX_ID)
			timeout=timeout||5
			y=y||'top'
			x=x||'right'
			modeLine=modeLine||'multi-line'
			type=type||'error'
			title=title||'Титул'
			text=text=(status==401? window.app.$vuetify.lang.t($h.getErrDesc('authNeed').text) :text) || window.app.$vuetify.lang.t($h.getMsgDesc('defTextMes').text)
			status=status||''
			trace=trace||''
			file=file||''
			line=line||''
			creator=creator||'php'
			commit('adding',{id,timeout, y,x, modeLine, type, title, text,status,trace,file,line,creator,})
		},
		doDelete({commit,getters,state},id){
			let index=getters.getMsgIndex(id)
			if ( index<0)
				return
			commit('deleting',index)
		},
	},
	mutations:{
		adding(state, {id,timeout, y,x, modeLine, type, title, text,status,trace,file,line,creator,}){
			state.msgs.push({id,timeout, y,x, modeLine, type, title, text,status,trace,file,line,creator,})
		},
		deleting(state, id){
			state.msgs.splice(id,1)
		},
	},
	strict: process.env.NODE_ENV !== 'production',
}
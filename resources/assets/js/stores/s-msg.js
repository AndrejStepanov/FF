export default {
	namespaced: true,
	state: {	//= data
		msgs:[],
	},
	getters: { // computed properties
		getMsg: state => id => {
			return nvl(state.msgs.find(msg =>msg.id===id ) )
		},
		getMsgIndex: state => id => {
			return state.msgs.findIndex(msg =>msg.id===id )
		},		
		getAllMsg: state => {
			return state.msgs
		},
	},
	actions:{
		doAdd({commit,getters,state},{timeout, y,x, modeLine, type, title, text,status,trace,file,line,}){
			let id = Math.floor(Math.random() * MAX_ID)
			timeout=timeout||6000;
            y=y||'top';
            x=x||'right';
            modeLine=modeLine||'multi-line';
            type=type||'error';
			title=title||'Титул';
			text=text=(status==401?'Необходимо авторизоваться!':text)||'Текст сообщения';
            status=status||'';
            trace=trace||'';
            file=file||'';
            line=line||'';
			commit('adding',{id,timeout, y,x, modeLine, type, title, text,status,trace,file,line,});
		},
		doDelete({commit,getters,state},id){
			let index=getters.getMsgIndex(id);
			if ( index<0)
				return;
			commit('deleting',index);
		},
	},
	mutations:{
		adding(state, {id,timeout, y,x, modeLine, type, title, text,status,trace,file,line,}){
			state.msgs.push({id,timeout, y,x, modeLine, type, title, text,status,trace,file,line,});
		},
		deleting(state, id){
			state.msgs.splice(id,1);
		},
	},
}
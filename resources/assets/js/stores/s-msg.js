export default {
	state: {	//= data
		msgs:[],
	},
	getters: { // computed properties
		msgFind: state => msgId => {
			return state.msgs.find(msg =>msg.id===msgId );
		},
		msgFindIndex: state => msgId => {
			return state.msgs.findIndex(msg =>msg.id===msgId );
		},
		msgCurrent: state => {
			return state.msgs;
		},
	},
	actions:{
		msgAdding({commit,getters,state},{timeout, y,x, modeLine, type, title, text,status}){
			let id = Math.floor(Math.random() * MAX_ID)
			timeout=timeout||600000;
            y=y||'top';
            x=x||'right';
            modeLine=modeLine||'multi-line';
            type=type||'error';
            title=title||'Титул';
			text=text=(status==401?'Необходимо авторизоваться!':text)||'Текст сообщения';
			commit('msgAdd',{id,timeout,y,x,modeLine,type,title,text,});
		},
		msgDeleting({commit,getters,state},msgId){
			let idx=getters.msgFindIndex(msgId);
			if ( idx<0)
				return;
			commit('msgDelete',idx);
		},
	},
	mutations:{
		msgAdd(state, {id,timeout,y,x,modeLine,type,title,text,}){
			state.msgs.push({id,timeout,y,x,modeLine,type,title,text,});
		},
		msgDelete(state, idx){
			state.msgs.splice(idx,1);
		},
	},

}
export default {
	state: {	//= data
		dialogs:[],
	},
	getters: { // computed properties
		dialogFind: state => daiologId => {
			return state.dialogs.find(dialog =>dialog.id===daiologId );
		},
		dialogIsShow: (state, getters) => daiologId =>{
			let dialog=getters.dialogFind(daiologId);
			if ( !dialog)
				return false;
			return dialog.isShow;
		},
		dialogPersistent: (state, getters) => daiologId =>{
			let dialog=getters.dialogFind(daiologId);
			if ( !dialog)
				return false;
			return dialog.persistent;
		},
		dialogTitle: (state, getters) => daiologId =>{
			let dialog=getters.dialogFind(daiologId);
			if ( !dialog)
				return 'Название диалога!';
			return dialog.Title;
		},
	},
	actions:{	
		dialogInit({commit,getters,state},{daiologId, daiologTitle, daiologPersistent,}){
			if ( getters.dialogFind(daiologId))
				return;
			daiologPersistent=daiologPersistent||true;
			commit('dialogAdd',{daiologId,daiologTitle,daiologPersistent});
		},
		dialogShowChange({commit,getters,state},{daiologId_, isShow}){
			let dialog=getters.dialogFind(daiologId_);
			if ( !dialog)
				return;
			if(!isShow)
				window._Vue.$root.$emit('dialogClose'+daiologId_);
			else
				window._Vue.$root.$emit('dialogOpen'+daiologId_);
			commit('dialogShowSet',{dialog, isShow});
		},
	},
	mutations:{
		dialogAdd(state, {daiologId,daiologTitle,daiologPersistent}){
			state.dialogs.push({id:daiologId, isShow:false, Title:daiologTitle, persistent:daiologPersistent});
		},
		dialogShowSet(state, {dialog, isShow}){
			dialog.isShow =isShow;
		},
	},

}
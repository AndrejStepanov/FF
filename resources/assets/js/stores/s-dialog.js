export default {
	state: {	//= data
		dialogs:[],
	},
	getters: { // computed properties
		dialogFindById: state => daiologId => {
			return state.dialogs.find(dialog =>dialog.id===daiologId );
		},
		dialogFindByName: state => daiologName => {
			return state.dialogs.find(dialog =>dialog.name===daiologName );
		},
		dialogIsShow: (state, getters) => daiologId =>{
			let dialog=getters.dialogFindById(daiologId);
			if ( !dialog)
				return false;
			return dialog.isShow;
		},
		dialogPersistent: (state, getters) => daiologId =>{
			let dialog=getters.dialogFindById(daiologId);
			if ( !dialog)
				return false;
			return dialog.persistent;
		},
		dialogTitle: (state, getters) => daiologId =>{
			let dialog=getters.dialogFindById(daiologId);
			if ( !dialog)
				return 'Название диалога!';
			return dialog.Title;
		},
	},
	actions:{	
		dialogInit({commit,getters,state},{daiologId, daiologTitle, daiologPersistent, dialogName, }){
			if ( getters.dialogFindById(daiologId))
				return;
			daiologPersistent=daiologPersistent||true;
			commit('dialogAdd',{daiologId,daiologTitle,daiologPersistent,dialogName});
		},
		dialogShowChange({commit,getters,state},{daiologId_,daiologName, isShow}){
			let dialog=false
			if(daiologId_>0)
				dialog=getters.dialogFindById(daiologId_);
			else if(nvl(daiologName)!='')
				dialog=getters.dialogFindByName(daiologName);
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
		dialogAdd(state, {daiologId,daiologTitle,daiologPersistent,dialogName}){
			state.dialogs.push({id:daiologId, isShow:false, Title:daiologTitle, persistent:daiologPersistent, name:dialogName});
		},
		dialogShowSet(state, {dialog, isShow}){
			dialog.isShow =isShow;
		},
	},

}
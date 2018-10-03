export default {
	namespaced: true,
	state: {
		userName:'Гость',
		userId:'',
		sysId:'',
		isRoot:'',
	},
	getters: { // computed properties
		getUserName: state => () => { return state.userName;	},
		getUserId: state => () => {	return state.userId;	},
		getSysId: state => () => {	return state.sysId;	},
		getIsRoot: state => () => {	return state.isRoot;	},
	},
	actions:{
		doLog({commit},{userName,userId, sysId, isRoot}){
			commit('infoSetting',{userName,userId, sysId, isRoot});
		},
		doLogout({commit}){
			commit('infoClearing');
		},
	},
	mutations:{
		infoSetting(state, {userName,userId, sysId, isRoot}){
			state.userName=userName;
			state.userId=userId;
			state.sysId=sysId;
			state.isRoot=isRoot;
		},
		infoClearing(state){
			state.userName='Гость';
			state.userId='';
			state.sysId='';
			state.isRoot='';
		},
	},
}
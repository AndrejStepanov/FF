export default {
	state: {
		userName:'Гость',
		userId:'',
		sysId:'',
		isRoot:'',
	},
	getters: { // computed properties
		getUserName: state => () => {	return state.userName;	},
		getUserId: state => () => {	return state.userId;	},
		getSysId: state => () => {	return state.sysId;	},
		getIsRoot: state => () => {	return state.isRoot;	},
	},
	actions:{
		userLogin({commit},{userName,userId, sysId, isRoot}){
			commit('setUserInfo',{userName,userId, sysId, isRoot});
		},
		userLogout({commit}){
			commit('clearUserInfo');
		},
	},
	mutations:{
		setUserInfo(state, {userName,userId, sysId, isRoot}){
			state.userName=userName;
			state.userId=userId;
			state.sysId=sysId;
			state.isRoot=isRoot;
		},
		clearUserInfo(state){
			state.userName='Гость';
			state.userId='';
			state.sysId='';
			state.isRoot='';
		},
	},
}
export default {
	namespaced: true,
	state: {
		userName:'',
		userId:'',
		isRoot:'',
		avatar:'',
		language:'ru',
	},
	getters: { // computed properties
		getUserName: state => () => { return state.userName	},
		getUserId: state => () => {	return state.userId	},
		getIsRoot: state => () => {	return state.isRoot	},
		getAvatar: state => () => {	return state.avatar	},
		getLanguage: state => () => { return state.language	},
	},
	actions:{
		doLog({commit},{userName,userId,  isRoot, avatar}){
			commit('infoSetting',{userName,userId,  isRoot,avatar})
		},
		doSetLanguage({commit},{language}){
			commit('languageSetting',{language})
		},
		doLogout({commit}){
			commit('infoClearing')
		},
	},
	mutations:{
		infoSetting(state, {userName,userId,  isRoot,avatar}){
			state.userName=userName
			state.userId=userId
			state.isRoot=isRoot
			state.avatar=avatar
		},
		languageSetting(state, {language}){
			state.language=language
		},
		infoClearing(state){
			state.userName=''
			state.userId=''
			state.isRoot=''
			state.avatar=''
			state.language='ru'
		},
	},
	strict: process.env.NODE_ENV !== 'production',
}
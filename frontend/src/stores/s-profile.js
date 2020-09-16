export default {
	namespaced: true,
	state: {
		userName:'',
		userId:'',
		isRoot:'',
		avatar:'',
		language:'ru',
		token:'',
		expiresIn:0,
		refreshToken:'',
		tokenType:'',
		tokenRemember:'',
		login:'',
		email:'',
		firstname:'',
		lastname:'',
		systemLanguage:'',
		tmp:{},
	},
	getters: { // computed properties
		getUserInfo: (state) => { return state	},
		getUserName: (state) => {  return state.userName	},
		getUserLogin: (state) => { return state.login	},
		getUserId: (state) => {	return state.userId	},
		getIsRoot: (state) => {	return state.isRoot	},
		getAvatar: (state) => {	return state.avatar	},
		getLanguage: (state) => { return state.language	},
		getToken: (state) => { return state.token	},
		getExpiresIn: (state) => { return state.expiresIn	},
		getRefreshToken: (state) => { return state.refreshToken	},
		getTokenType: (state) => { return state.tokenType	},
		getTokenRemember: (state) => { return state.tokenRemember	},
	},
	actions:{
		doLog({commit},{userName,userId,  isRoot, avatar, token, login, email, firstname, lastname, systemLanguage}){
			commit('infoSetting',{userName, userId, isRoot, avatar, token, login, email, firstname, lastname, systemLanguage})
		},
		doSetLanguage({commit},{language}){
			commit('languageSetting',{language})
		},
		doSetToken({commit},{token, expiresIn, refreshToken, tokenType} ){
			commit('tokenSetting',{token, expiresIn, refreshToken, tokenType})
		},
		doLogout({commit}){
			commit('infoClearing')
		},
	},
	mutations:{
		infoSetting(state, {userName, userId, isRoot, avatar, login, email, firstname, lastname, systemLanguage}){
			state.userName=userName
			state.userId=userId
			state.isRoot=isRoot
			state.avatar=avatar
			state.login=login
			state.email=email
			state.firstname=firstname
			state.lastname=lastname
			state.systemLanguage=systemLanguage
		},
		languageSetting(state, {language}){
			state.language=language
		},
		tokenSetting(state, {token, expiresIn, refreshToken, tokenType, tokenRemember}){
			state.token=token
			state.expiresIn=expiresIn
			state.refreshToken=refreshToken
			state.tokenType=tokenType
			state.tokenRemember=tokenRemember
		},
		infoClearing(state){
			state.userName=''
			state.userId=''
			state.isRoot=''
			state.avatar=''
			state.language='ru'
			state.token=''
			state.expiresIn=0
			state.refreshToken=''
			state.tokenType=''
			state.tokenRemember=''
			state.login=''
			state.email=''
			state.firstname=''
			state.lastname=''
			state.systemLanguage=''
		},
	},
	strict: process.env.NODE_ENV !== 'production',
}
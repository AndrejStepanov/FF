export default {
	namespaced: true,
	state: {
		curArmName:'',
	},
	getters: { // computed properties
		getCurArmName: (state) => {return state.curArmName	},
	},
	actions:{
		doCurArmNameChange({commit},{name}){
			commit('CurArmNameChanging',{name})
		},
	},
	mutations:{
		CurArmNameChanging(state, {name}){
			state.curArmName=name
		},
	},
	strict: process.env.NODE_ENV !== 'production',
}
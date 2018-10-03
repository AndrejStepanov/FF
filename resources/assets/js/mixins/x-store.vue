<script>
	import {mapActions, mapGetters} from 'vuex'
	export default {
		computed: {
			... mapGetters( {//перечень функций из стандартных vuex
				dialogById: "dialog/getById",
				dialogByName: "dialog/getByName",
				dialogConfig: "dialog/getConfig",
				dialogDilog: "dialog/getDilog",
				dialogParams: "dialog/getParams",
				dialogIsShow: "dialog/getIsShow",
				msgAllMsg: "msg/getAllMsg",
				msgMsg: "msg/getMsg",
				msgMsgIndex: "msg/getMsgIndex",
				paramByCode: "param/getByCode",
				paramGroup: "param/getGroup",
				paramTodo: "param/getTodo",
				profileIsRoot: "profile/getIsRoot",
				profileSysId: "profile/getSysId",
				profileUserId: "profile/getUserId",
				profileUserName: "profile/getUserName",
				} ) ,	
		},
		methods: {
			... mapActions({
				dialogInit: "dialog/doInit",
				dialogSetAllParams: "dialog/doSetAllParams",
				dialogSetAllParamsAndShow: "dialog/doSetAllParamsAndShow",
				dialogSetParamByName: "dialog/doSetParamByName",
				dialogSetParamByNameAndShow: "dialog/doSetParamByNameAndShow",
				dialogShowChange: "dialog/doShowChange",
				msgAdd: "msg/doAdd",
				msgDelete: "msg/doDelete",
				paramInit: "param/doInit",
				paramSet: "param/doSet",
				paramSetAll: "param/doSetAll",
				paramSetSeveral: "param/doSetSeveral",
				profileLog: "profile/doLog",
				profileLogout: "profile/doLogout",
			}) ,	
		},
	}
</script>
const MAX_ID= 9999999,
	MAX_INPUT_IN_COL= 6,
	appTheme={  primary: '#2c353f', secondary: '#452F41', accent: '#555C3E', error: '#f44336', warning: '#ffeb3b', info: '#2196f3', success: '#4caf50', checkBox:"#FFFFFF"},
	authButtons= [ {id:1, title:'Войти', icon:'input', allig:'right', click:'dialogSave' , needCheck:true} ],
	dateFormatStr = '$3.$2.$1' //2018-10-03 - 1, 2 и 3 цифры

var sysNumeral=null

function appThemeInit({numeral}){
	let styleElt, styleSheet
	if (document.createStyleSheet)  //Если определен IE API, использовать его
		styleSheet = document.createStyleSheet()
	else {
		let head = document.getElementsByTagName('head')[0]
		styleElt = document.createElement('style')		// Новый элемент <style>
		head.appendChild(styleElt)						// Вставить в <head>
		// Теперь новая таблица находится в конце массива
		styleSheet = document.styleSheets[document.styleSheets.length-1]
	}
	styleElt.innerHTML = styleSheet.cssText = 
		'.accent-color								{color: '+appTheme.accent+';} '+
		'.primary--text 							{color: white !important;} '+
		'.margin-5px	 							{color: white !important;} '+
		'.cursor-pointer							{cursor: pointer} '+
		'.top-center 								{top:50%;} '+
		'.overflow-y-auto 							{overflow-y: auto;} '+
		'.display--grid 							{display: grid;} '+
		'.display--flex 							{display: flex;} '+
		'.flex-direction--column					{flex-direction: column;} '+
		'.flex--inherit								{flex: inherit;} '+
		'.flex--99 									{flex:99} '+
		'.padding-right--0 							{padding-right: 0px !important;} '+
		'.max-height 								{height: 100%;} '+
		'.dispContent 								{display: contents;} '+
		'.underline 								{text-decoration: underline;} '+
		'.noPadding 								{padding: 0px !important;} '+
		'DIV#block_message							{position: fixed;z-index: 800;right: 0px;bottom: 15px;padding: 10px;width: 450px;/*overflow: auto;*/vertical-align: middle;text-valign: middle;} '+
		'DIV#block_message>Div,'+
		'DIV#block_message>Div>Div					{display: block;position: relative;height: auto;margin-bottom: 5px;  background-color: transparent;} '+
		'DIV#block_message>Div>Div>Div				{border-radius: 20px;} '+
		'DIV#block_message>Div>Div>Div>Div			{padding: 0px; height: auto;} '+
		'DIV#block_message button.noMarginLeft		{margin-left: 7px;} '+
		'DIV#block_message Div.error--content>Div	{background-color: '+appTheme.error+';} '+
		'DIV#block_message Div.warning--content>Div	{background-color: '+appTheme.warning+';} '+
		'DIV#block_message Div.info--content>Div	{background-color: '+appTheme.info+';} '+
		'DIV#block_message Div.success--content>Div	{background-color: '+appTheme.success+';} '+
		'.secondary-color 							{color: '+appTheme.secondary+';}'+
		'.overflow-hidden							{overflow: hidden;}'+
		'.overflow-y-scroll							{overflow-y: scroll;}'+
		'.width-one-percent							{width: 1%;}'+
		'.text-nobr									{white-space: nowrap;}'+
		'tr.text-bold>td,'+
		'td.text-bold								{font-weight: 700 !important;}'+
		'td.text-right								{text-align: right;}'+
		'td.text-left								{text-align: left;}'+
		'td.text-center								{text-align: center;}'
	if(numeral)
		appNumeralInit(numeral)
	
}

function appNumeralInit(numeral){
	numeral.register('locale', 'ru', {
		delimiters: {
			thousands: ' ',
			decimal: ','
		},
		abbreviations: {
			thousand: 'т',
			million: 'м',
			billion: 'б',
			trillion: 'тр'
		},
		ordinal: function(number) {
			var b = number % 10;
			return number==0 || [2,6,7,8].indexOf(number)!=-1?'ой':
				[1,4,5,9,0].indexOf(number)!=-1?'ый':
				'ий'
		},
		currency: {
			symbol: '₽'
		}
	});
	numeral.locale(window.systemLanguage)
	sysNumeral=numeral
}

function numberFormat(value,mask){
	mask=mask||'0,0.000'
	return sysNumeral(value).format(mask)
}

function dateFormat(str){//2018-10-03 12:52 в 03.10.2018 12:52
	return nvl(str,'').replace(/(\d\d\d\d)-(\d\d)-(\d\d)/g, dateFormatStr )
}

function getNewId(){
	return Math.floor(Math.random() * MAX_ID)
}

function loadDialogs(dialogsConfig){
	let tmp={}
	for (name in dialogsConfig)
		if(tmp[dialogsConfig[name].module]==undefined )
			tmp[dialogsConfig[name].module]= dialogsConfig[name].load
	return tmp
}

function genMap( stores ){
	return { 
		getters:storesParser(stores, 'getters', 'get'), actions:storesParser(stores, 'actions', 'do'),
	} 
}
function storesParser(stores, field, prefix){
	let tmp={}
	for (m_title in stores)
		for (title in stores[m_title][field])
			tmp[m_title+title.replace(prefix,'')]= m_title+'/'+title
	return tmp
}

function sort(a, b, aFild, bFild){
	let aVal = aFild!=''?a[aFild]:a,
		bVal = bFild!=''?b[bFild]:b
	if (aVal > bVal) 
		return 1
	if (aVal < bVal) 
		return -1
	// a должно быть равным b
	return 0
}

function isInteger(num){
	return (num ^ 0) === num
}

function isNumeric(n) {
    
	return !isNaN(parseFloat(n)) && isFinite(n);
	 
	// Метод isNaN пытается преобразовать переданный параметр в число. 
	// Если параметр не может быть преобразован, возвращает true, иначе возвращает false.
	// isNaN("12") // false 
 }

function nvl(val,replace=0){
	if(!val || val==undefined || val==null || val=='' ) return replace; else return val;
}

function nvlo(val,replace={}){
	if(!val || val==undefined || val=='' ) return replace; else return val;
}

function showMsg({title, text, type, params={}, msgParams=[]}){
	type=type||'error'
	title=window._vue.$vuetify.t(title)||text
	text=window._vue.$vuetify.t(text,msgParams)||title
	window._vue.$store.dispatch('msg/doAdd', {title,text,type,...params,})
	if(type=='error')
		throw new Error(title+' - '+text)
}

function getErrDesc(errName){
	return {title:'$vuetify.texts.errors.'+errName+'.title', text:'$vuetify.texts.errors.'+errName+'.text' }
}
function getMsgDesc(msgName, type='success'){
	return {title:'$vuetify.texts.msgs.'+msgName+'.title', text:'$vuetify.texts.msgs.'+msgName+'.text' , type }
}

function sendRequest  (params){
	if( this.nvl(params.type)==0 || this.nvl(params.href)==0  )
		showMsg(getErrDesc('noSendAddress') );
	window._bus.axios.post(params.href, {type:params.type, _token: window.laravel.csrfToken,...params.data,}
		).then((response) => {
			if(nvl(params.needSucess,'N')=='Y' && response.data!='sucsess')
				showMsg({ ...getErrDesc('requestRefused') ,params: params.default, });
			if(nvl(params.hrefBack)!='')
				window.location.href = decodeURIComponent( params.hrefBack);
			if(params.handler )
				params.handler(response)
		}).catch(
			(error) =>
				showMsg({ title: nvlo(error.response.data).title||nvlo(params.default).title||'$vuetify.texts.errors.requestFaild.title'  , text:nvlo(error.response.data).message||nvlo(params.default).text||'$vuetify.texts.errors.requestFaild.text',
					'params': {status:error.response.status, trace:nvlo(error.response.data).trace, file:nvlo(error.response.data).file, line:nvlo(error.response.data).line}, })
		);
	return true
}

const MAX_ID= 9999999,
	MAX_INPUT_IN_COL= 6,
	appTheme={  primary: '#2c353f', secondary: '#452F41', accent: '#555C3E', error: '#f44336', warning: '#ffeb3b', info: '#2196f3', success: '#4caf50'},
	authButtons= [ {id:1, title:'Войти', icon:'input', allig:'right', click:'dialogSave' , needCheck:true} ]

function appThemeInit(){
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
		'.top-center 								{top:50%;} '+
		'.max-height 								{height: 100%;} '+
		'DIV#block_message							{position: fixed;z-index: 800;right: 0px;bottom: 15px;padding: 10px;width: 450px;overflow: auto;vertical-align: middle;text-valign: middle;} '+
		'DIV#block_message>Div,'+
		'DIV#block_message>Div>Div					{display: block;position: relative;height: auto;margin-top: 5px;     background-color: transparent;} '+
		'DIV#block_message>Div>Div>Div				{border-radius: 20px;} '+
		'DIV#block_message Div.error--content>Div	{background-color: '+appTheme.error+';} '+
		'DIV#block_message Div.warning--content>Div	{background-color: '+appTheme.warning+';} '+
		'DIV#block_message Div.info--content>Div	{background-color: '+appTheme.info+';} '+
		'DIV#block_message Div.success--content>Div	{background-color: '+appTheme.success+';} '+
		'.secondary-color 							{color: '+appTheme.secondary+';}'
	
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
function nvl(val,replace=0){
	if(!val || val==undefined || val=='' ) return replace; else return val;
}

function nvlo(val,replace={}){
	if(!val || val==undefined || val=='' ) return replace; else return val;
}

function sendRequest  (params){
	if( this.nvl(params.type)==0 || this.nvl(params.href)==0  ){
		window._Vue.$store.dispatch('msgAdding', {title:'Ошибка отправки данных',text:'Неуказанн адрес для отправки!'})
		return false
	}

	window._Bus.axios.post(params.href, {type:params.type, _token: window.Laravel.csrfToken,...params.data,}
		).then((response) => {
			if(nvl(params.needSucess,'N')=='Y' && response.data!='sucsess'){
				window._Vue.$store.dispatch('msgAdding', { title:'Ошибка отправки данных', text:'Отправленные данные были отвергнуты!',...params.default, });
				return;
			}
			if(nvl(params.hrefBack)!='')
				window.location.href = decodeURIComponent( params.hrefBack);
			if(params.handler )
				params.handler(response)
		}).catch(
			(error) =>
				window._Vue.$store.dispatch('msgAdding', 
					{title: nvlo(error.response.data).title||nvlo(params.default).title||'Ошибка отправки данных', text:nvlo(error.response.data).message||nvlo(params.default).text||'Отправить данные не удалось!', 
					status:error.response.status, trace:nvlo(error.response.data).trace, file:nvlo(error.response.data).file, line:nvlo(error.response.data).line})
		);
	return true
}
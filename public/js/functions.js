const MAX_ID= 9999999,
	MAX_INPUT_IN_COL= 6,
	curTheme='light',
	appTheme={ 
		light: curTheme=='light', 
		dark: curTheme=='dark', 
		themes: {   
			light: {primary: '#4caf50', secondary: '#4caf50', accent: '#5186de', tertiary: '#495057', error: '#f44336', warning: '#ffeb3b', info: '#2196f3', success: '#4caf50'},
			dark: {	primary: '#1868A5', secondary: '#939598', accent: '#2A91D8', error: '#f44336', warning: '#ffeb3b', info: '#2196f3', success: '#4caf50', checkBox:"#FFFFFF"},
		}
	},
	dateFormatStr = '$3.$2.$1' //2018-10-03 - 1, 2 и 3 цифры
	dateFormatStrRevert = '$3-$2-$1' //2018-10-03 - 1, 2 и 3 цифры
//primary: '#2c353f', secondary: '#452F41', accent: '#555C3E',
var sysNumeral=null

window.systemLanguage='ru'

 // Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}

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
		'.color-accent								{color: '+appTheme.themes[curTheme].accent+' !important;} '+ //оранжевый
		'.color-primary								{color: '+appTheme.themes[curTheme].primary+' !important;} '+ //синий
		'.color-secondary							{color: '+appTheme.themes[curTheme].secondary+' !important;} '+ //салатовый
		'.background-accent							{background: '+appTheme.themes[curTheme].accent+' !important;} '+ //оранжевый
		'.background-primary						{background: '+appTheme.themes[curTheme].primary+' !important;} '+ //синий
		'.background-secondary						{background: '+appTheme.themes[curTheme].secondary+' !important;} '+ //салатовый
		'.max-height 								{height: 100%;} '+
		'.overflow-y-auto 							{overflow-y: auto;} '+
		'.flex--99 									{flex: 99;} '+
		'.flex-grow--99 							{flex-grow: 99 !important;} '+
		'.display--grid 							{display: grid;} '+
		'.display--flex 							{display: flex;} '+
		'.flex-direction--column					{flex-direction: column;} '+
		'.flex-direction--row						{flex-direction: row;} '+
		'.flex--inherit								{flex: inherit;} '+
		'nav div.check-size,'+
		'button.check-size        				  	{max-width: 90%;   margin-left: 5%;}'+
		'button.check-size        				  	{min-width: 90% !important; margin-bottom: 10px;}'+
		'.text-nobr									{white-space: nowrap;}'+
		'td.text-bold,'+
		'tr.text-bold>td							{font-weight: 700 !important;}'+
		'td.text-right								{text-align: right;}'+
		'td.text-left								{text-align: left;}'+
		'td.text-center								{text-align: center;}'
	window._bus.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.getElementsByTagName("META").namedItem("csrf-token").getAttribute('content') // for all requests
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
function createDictionary(obj, keyVal, keyText, needSort=false){
	let tmp = [];
	for(row in obj)
		tmp.push({value: obj[row][keyVal], text: obj[row][keyText]})
	if(needSort)
		tmp.sort(  function (a, b) {return sort(a, b, 'text', 'text')} )
	return tmp
}

function dateFormat(str){//2018-10-03 12:52 в 03.10.2018 12:52
	return nvl(str,'').replace(/(\d\d\d\d)-(\d\d)-(\d\d)/g, dateFormatStr )
}
function dateFormatRevert(str, revert=false ){//03.10.2018 12:52  в  2018-10-03 12:52
	return nvl(str,'').replace(/(\d\d).(\d\d).(\d\d\d\d)/g, dateFormatStrRevert )
}

function getNewId(){
	return Math.floor(Math.random() * MAX_ID)
}

function loadDialogs(dialogsConfig){
	let tmp={}
	for (name in dialogsConfig)
		if(tmp[dialogsConfig[name].module]===undefined )
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
	for (let m_title in stores)
		for (let title in stores[m_title][field])
			tmp[m_title+title.replace(prefix,'')]= m_title+'/'+title
	return tmp
}
function getLocationParam(name){
	if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
	   return decodeURIComponent(name[1]);
 }

 function sendReqToApp({args, callback}){
	if(getLocationParam('debug')=='Y' )
		sendRequest({href:"/ARM/PLAN/MONTH_GRAF/ajax_receiver.php?"+args, type:'type', data:{  }, default: getErrDesc('requestFaild'),  handler:(response) => {	window._vue.$children[0][callback](response.data)	} })
	else
		top.postMessage({args,callback},'*'); 
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
function list(arr=[], sep=','){
	let tmp = ''
	arr.forEach(row=>{
		if(nvl(row)!='')
			tmp+=', '+row
	})
	return tmp.slice(2)
}

function isInteger(num){
	return (num ^ 0) === num
}

function isNumeric(n) {
	return !isNaN(+n)
	 
	// Метод isNaN пытается преобразовать переданный параметр в число. 
	// Если параметр не может быть преобразован, возвращает true, иначе возвращает false.
	// isNaN("12") // false 
 }

function nvl(val,replace=0){
	if(val===false || val===undefined || val===null || val==='' ) return replace; else return val;
}

function nvlo(val,replace={}){
	if(!val || val==undefined || val=='' ) return replace; else return val;
}

function showMsg({title, text, type, params={}, msgParams=[]}){
	type=type||'error'
	title=window._vue.$vuetify.lang.t(title)||text
	text=window._vue.$vuetify.lang.t(text,msgParams)||title
	window._vue.$store.dispatch('msg/doAdd', {title,text,type, ...params, })
	if(type=='error')
		throw new Error(title+' - '+text)
}

function getErrDesc(errName){
	return {title:'texts.errors.'+errName+'.title', text:'texts.errors.'+errName+'.text' }
}
function getMsgDesc(msgName, type='success'){
	return {title:'$vuetify.texts.msgs.'+msgName+'.title', text:'$vuetify.texts.msgs.'+msgName+'.text' , type }
}

function sendRequest  (params){
	let _hrefBackAuth=getLocationParam('auth_href_back')
	if( this.nvl(params.type)==0 || this.nvl(params.href)==0  )
		showMsg(getErrDesc('noSendAddress') );
	window._bus.axios.post(params.href, {type:params.type, ...params.data,}
		).then((response) => {
			if(nvl(params.needSucess,'N')=='Y' && response.data!='sucsess')
				return false;
				//showMsg({ ...getErrDesc('requestRefused') ,params: params.default, });
			if(nvl(params.hrefBack)!='')
				window.location.href = decodeURIComponent( params.hrefBack);
			if(['/login','/register'].indexOf(params.href)!=-1 && _hrefBackAuth!=null)
				window.location.href = decodeURIComponent(_hrefBackAuth)
			if(params.handler )
				params.handler(response)
			if(params.handlerMust )
				params.handlerMust()
		}).catch(
			(error) =>{
				console.log(error)
				let r = nvlo(error.response)
				if(params.handlerMust )
					params.handlerMust()
				if(params.handlerErr )
					params.handlerErr()
				showMsg({ title: nvlo(r.data).title||nvlo(params.default).title||'texts.errors.requestFaild.title'  , text:nvlo(r.data).message||nvlo(params.default).text||'texts.errors.requestFaild.text',
					'params': {status:r.status, trace:nvlo(r.data).trace, file:nvlo(nvl(error.response).data).file, line:nvlo(r.data).line}, })
				return false
			}
		);
	return true
}
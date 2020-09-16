const MAX_ID = 9999999,
	MAX_INPUT_IN_COL= 6
var _curTheme='light',
	_appTheme={ //переопределяется в файле вьютифи
		light: true, 
		dark: false, 
		themes: {   
			light: {primary: '#4caf50', secondary: '#4caf50', accent: '#5186de', tertiary: '#495057', error: '#f44336', warning: '#ffeb3b', info: '#2196f3', success: '#4caf50'},
			dark: {	primary: '#1868A5', secondary: '#939598', accent: '#2A91D8', tertiary: '#495057', error: '#f44336', warning: '#ffeb3b', info: '#2196f3', success: '#4caf50', checkBox:'#FFFFFF'},
		}
	},
	dateFormatStr = '$3.$2.$1', //2018-10-03 - 1, 2 и 3 цифры
	dateFormatStrRevert = '$3-$2-$1', //2018-10-03 - 1, 2 и 3 цифры
	socetCommandHref = '/socet_command',
	dataCommandHref = '/api/data_command',
	//primary: '#2c353f', secondary: '#452F41', accent: '#555C3E',
	sysNumeral=null,
	vm=null,
	linkSep = '->', //рзделитель в ссулках на родителя в структуре слоев
	layoutSepSize = 3, //размер разделителя между слоями
	layoutMinSize = 30 //минимальный размер слоя

function appThemeInit ({appTheme, curTheme,numeral, _vm}) {
	_appTheme = appTheme
	_curTheme = curTheme
	vm=_vm
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
		'.color-accent								{color: '+_appTheme.themes[_curTheme].accent+' !important;} '+ //оранжевый
		'.color-primary								{color: '+_appTheme.themes[_curTheme].primary+' !important;} '+ //синий
		'.color-secondary							{color: '+_appTheme.themes[_curTheme].secondary+' !important;} '+ //салатовый
		'.background-accent							{background: '+_appTheme.themes[_curTheme].accent+' !important;} '+ //оранжевый
		'.background-primary						{background: '+_appTheme.themes[_curTheme].primary+' !important;} '+ //синий
		'.background-secondary						{background: '+_appTheme.themes[_curTheme].secondary+' !important;} '+ //салатовый
		'.max-height 								{height: 100%;} '+
		'.overflow-y-auto 							{overflow-y: auto;} '+
		'.overflow-auto 							{overflow: auto;} '+
		'.overflow-hidden 							{overflow: hidden;} '+
		'.flex--99 									{flex: 99;} '+
		'.padding-0 								{padding: 0;} '+
		'.top-0 									{top: 0px !important;} '+
		'.right-0 									{right: 0px !important;} '+
		'.filter-button								{position: sticky !important;   float: right;} '+
		'.flex-grow--99 							{flex-grow: 99 !important;} '+
		'.display--grid 							{display: grid;} '+
		'.display--flex 							{display: flex;} '+
		'.chDivPosRelative>div 						{position: relative;} '+
		'.flex-direction--column					{flex-direction: column;} '+
		'.flex-direction--row						{flex-direction: row;} '+
		'.flex--inherit								{flex: inherit;} '+
		'div.check-size,'+
		'button.check-size        				  	{max-width: 90%;   margin-left: 5%;}'+
		'button.check-size        				  	{min-width: 90% !important; margin-bottom: 10px;}'+
		'.text-nobr									{white-space: nowrap;}'+
		'td.text-bold,'+
		'tr.text-bold>td							{font-weight: 700 !important;}'+
		'td.text-right								{text-align: right;}'+
		'td.text-left								{text-align: left;}'+
		'td.text-center								{text-align: center;}'
	if(numeral)
		appNumeralInit(numeral)
}
function appNumeralInit (numeral){
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
function typeOfObject (value) {
	var matches = Object.prototype.toString.call(value).match(/^\[object (\S+?)\]$/) || []
	return (matches[1] || 'undefined').toLowerCase();
}
function sleep (milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}

function numberFormat (value,mask){
	mask=mask||'0,0.000'
	return sysNumeral(value).format(mask)
}
function createDictionary (obj, keyVal, keyText, needSort){
	let tmp = [];
	needSort=needSort||false
	for(let row in obj)
		tmp.push({value: obj[row][keyVal], text: obj[row][keyText]})
	if(needSort)
		tmp.sort(  function (a, b) {return sort(a, b, 'text', 'text')} )
	return tmp
}

function dateFormat (str){//2018-10-03 12:52 в 03.10.2018 12:52
	return nvl(str,'').replace(/(\d\d\d\d)-(\d\d)-(\d\d)/g, dateFormatStr )
}
function dateFormatRevert (str ){//03.10.2018 12:52  в  2018-10-03 12:52
	return nvl(str,'').replace(/(\d\d).(\d\d).(\d\d\d\d)/g, dateFormatStrRevert )
}
function validateDate (value){ // проверка даты в формате 03.10.2018 12:52
	let arr = value.split(' ')[0].split('.');
	arr[1] -= 1;
	let d = new Date(arr[2], arr[1], arr[0]);
	return (d.getFullYear() == arr[2]) && (d.getMonth() == arr[1]) && (d.getDate() == arr[0])
}
function validateTime (value, withSeconds){ // проверка даты в формате 03.10.2018 12:52
	let arr = nvl(value.split(' ')[1],value).split(':');
	return arr[0]<=23 && arr[1]<=59 && (!withSeconds || arr[2]<=59)
}
function dateTimeNorm (str){
	if(typeof str != 'string' )
		return ''
	let res = str.trim().replace(' ','T').
	match(/(\d\d\d\d-(0\d|1[0-2])-([0-2]\d|3[0-1])|([0-2]\d|3[0-1]).(0\d|1[0-2]).\d\d\d\d)(T([0-1]\d|2[0-3])(:([0-4]\d|5[0-9]))?(:([0-4]\d|5[0-9]))?)?/g)
	res =nvl(res,[''])[0]
	if(res=='')
		return ''
	if(res.substring(4,5)!='-')
		res = dateFormatRevert(res)
	if(res.length==10)
		res+='T00'
	return (res +':00:00').substring(0, 19) // на выходе или 2018-10-03T12:52:15 или ''
}
function timeNorm (str){
	if(typeof str != 'string' )
		return ''
	let res = str.trim().replace(' ','T').match(/(\d\d\d\d-(0\d|1[0-2])-([0-2]\d|3[0-1])T|([0-2]\d|3[0-1]).(0\d|1[0-2]).\d\d\d\dT)?([0-1]\d|2[0-3])(:([0-4]\d|5[0-9]))?(:([0-4]\d|5[0-9]))?/g)
	res =nvl(res,[''])[0]
	if(res=='')
		return ''
	if(res.substring(10,11)=='T')
		res = res.substring(11,19)
	return (res +':00:00').substring(0, 8) // на выходе или 2018-10-03T12:52:15 или ''
}
function getNewId (){
	return Math.floor(Math.random() * MAX_ID)
}

function loadDialogs (dialogsConfig){
	let tmp={}
	for (let name in dialogsConfig)
		if(tmp[dialogsConfig[name].module]===undefined )
			tmp[dialogsConfig[name].module]= dialogsConfig[name].load
	return tmp
}

function genMap ( stores ){
	return { 
		getters:storesParser(stores, 'getters', 'get'), actions:storesParser(stores, 'actions', 'do'),
	} 
}
function storesParser (stores, field, prefix){
	let tmp={}
	for (let titleM in stores)
		for (let title in stores[titleM][field])
			tmp[titleM+title.replace(prefix,'')]= titleM+'/'+title
	return tmp
}
function getLocationParam (name){
	name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search)
	if(name)
	return decodeURIComponent(name[1])
}

function sort (a, b, aFild, bFild){
	let aVal = aFild!=''?a[aFild]:a,
		bVal = bFild!=''?b[bFild]:b
	if (aVal > bVal) 
		return 1
	if (aVal < bVal) 
		return -1
	// a должно быть равным b
	return 0
}
function list (arr, sep){
	arr=arr||[]
	sep=sep||','
	let tmp = ''
	arr.forEach(row=>{
		if(nvl(row)!='')
			tmp+=sep+' '+row
	})
	return tmp.slice(2)
}

function isInteger (num){
	return (num ^ 0) === num
}

function isNumeric (n){
	return !isNaN(+n)
	
	// Метод isNaN пытается преобразовать переданный параметр в число. 
	// Если параметр не может быть преобразован, возвращает true, иначе возвращает false.
	// isNaN("12") // false 
}

/**
 * Camelize a hyphen-delimited string.
 */

function camelize (str) {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}

function nvl (val,replace){
	if(val===false || val===undefined || val===null || val==='' ) return arguments.length ==1? 0: replace; else return val;
}

function nvlo (val,replace){
	if(!val || val==undefined || val=='' ) return arguments.length ==1? {}: replace ; else return val;
}

async function showMsg ({title, text, type, params, msgParams}){
	type=type||'error'
	params=params||{}
	msgParams=msgParams||[]
	let tmp = null, promise = null
	if( vm == null)
		do{
			promise= new Promise(function(resolve, reject) {
				setTimeout(()=> resolve( vm  )  ,  500)
			})
			tmp =  await promise
			console.log(111);
		}
		while(vm == null || tmp == null)	
	title=vm.$vuetify.lang.t(title)||title
	text=vm.$vuetify.lang.t(text,...msgParams)||text
	vm.$store.dispatch('msg/doAdd', {title,text,type, ...params, })  // jshint ignore:line
	if(type=='error')
		throw new Error(title+' - '+text)
}

function getErrDesc(errName){
	return {title:'$vuetify.errors.'+errName+'.title', text:'$vuetify.errors.'+errName+'.text' }
}
function getMsgDesc (msgName, type='success'){
	return {title:'$vuetify.msgs.'+msgName+'.title', text:'$vuetify.msgs.'+msgName+'.text' , type }
}

async function sendRequest  (params) {
	let _hrefBackAuth=getLocationParam('auth_href_back'),
		response=''
	if(  nvl(params.href)==0  ){
		showMsg(getErrDesc('noSendAddress') );
		return
	}
	try {
		response  = await window.axios.post(params.href, {type:params.type, ...params.data,}, { headers:{ accept: 'application/json',  ...nvlo(params.headers, {} ) } }   ) 
		if(nvl(params.needSucess,'N')=='Y' && response.data!='sucsess'){
			showMsg( getErrDesc('requestRefused') )
			throw new Error('')
		}
		if(nvl(params.hrefBack)!='')
			window.location.href = decodeURIComponent( params.hrefBack)
		if(['/login','/register'].indexOf(params.href)!=-1 && _hrefBackAuth!=null)
			window.location.href = decodeURIComponent(_hrefBackAuth)
		if(params.handlerMust )
			params.handlerMust()
		if(params.handler )
			params.handler(response)
		return response
	} catch (error) {
		console.log(error)
		let r = nvlo(error.response)
		if(params.handlerMust )
			params.handlerMust()
		if(params.handlerErr )
			params.handlerErr()
		if( nvlo(r.data).message=='Unauthenticated.'){
			[r.data.title, r.data.message] = ['$vuetify.errors.needAuth.title', '$vuetify.errors.needAuth.text']
			setTimeout(()=>{window.location.href ="\\auth?auth_href_back="+window.location.href }, 1000)
		}
		showMsg({ title: nvlo(r.data).title||nvlo(params.default).title||'$vuetify.errors.requestFaild.title'  , text:nvlo(r.data).message||nvlo(params.default).text||'$vuetify.errors.requestFaild.text',
			'params': {status:r.status, trace:nvlo(r.data).trace, file:nvlo(nvl(error.response).data).file, line:nvlo(r.data).line}, })
		throw new Error(error)
	}
}

export default { 
	MAX_ID ,
	MAX_INPUT_IN_COL,
	curTheme:_curTheme,
	appTheme:_appTheme,
	dateFormatStr,
	dateFormatStrRevert ,
	socetCommandHref ,
	dataCommandHref,
	sysNumeral,
	appThemeInit,
	appNumeralInit,
	typeOfObject,
	sleep,	
	numberFormat,
	createDictionary,
	linkSep,
	layoutSepSize,
	layoutMinSize,

	dateFormat,
	dateFormatRevert,
	validateDate,
	validateTime,
	dateTimeNorm,
	timeNorm,
	getNewId,

	loadDialogs,

	genMap,
	storesParser,
	getLocationParam,

	sort,
	list,

	isInteger,

	isNumeric,
	
	camelize,
	nvl,

	nvlo,

	showMsg,

	getErrDesc,
	getMsgDesc,

	sendRequest,
}
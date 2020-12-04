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
	socetCommandHref = '/api/socet_command',
	dataCommandHref = '/api/data_command',
	dataCommandMetod = 'post',
	//primary: '#2c353f', secondary: '#452F41', accent: '#555C3E',
	sysNumeral=null,
	_vm=null,
	linkSep = '->', //рзделитель в ссулках на родителя в структуре слоев
	layoutSepSize = 3, //размер разделителя между слоями
	layoutMinSize = 30 //минимальный размер слоя

function appThemeInit ({appTheme, curTheme,numeral, vm}) {
	_appTheme = appTheme
	_curTheme = curTheme
	_vm=vm
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
		'.box-shadow-none							{box-shadow: none !important;} '+ 
		'.height--100pr 							{height: 100%;} '+
		'.multipane>div					 			{height: 100%;} '+
		'.max-height--100pr					 		{max-height: 100%} '+
		'.overflow-y-auto 							{overflow-y: auto;} '+
		'.overflow-auto 							{overflow: auto;} '+
		'.overflow-hidden 							{overflow: hidden;} '+
		'.flex--99 									{flex: 99;} '+
		'.flex--1 									{flex:1 0 auto;} '+
		'.padding-0 								{padding: 0;} '+
		'.top-0 									{top: 0px !important;} '+
		'.right-0 									{right: 0px !important;} '+
		'.filter-button								{position: sticky !important;   float: right;} '+
		'.flex-grow--99 							{flex-grow: 99 !important;} '+
		'.display--grid 							{display: grid;} '+
		'.display--flex 							{display: flex;} '+
		'.chDivPosRelative>div 						{position: relative;} '+
		'.position--relative						{position: relative;} '+
		'.position-absolute-0						{position: absolute;    left: 0;    right: 0;    top: 0;    bottom: 0;} '+
		'.flex-direction--column					{flex-direction: column;} '+
		'.flex-direction--row						{flex-direction: row;} '+ 
		'.flex--inherit								{flex: inherit;} '+
		'div.check-size,'+
		'button.check-size        				  	{max-width: 90%;   margin-left: 5%;}'+
		'button.check-size        				  	{min-width: 90% !important; margin-bottom: 10px;}'+
		'.text-nobr									{white-space: nowrap;}'+
		'.font-size-standart						{font-size: 13px !important;}'+
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

function dateFormatNorm (str){//2018-10-03 12:52 в 03.10.2018
	return dateFormat(str).substring(0,10)
}
function dateFormat (str){//2018-10-03 12:52 в 03.10.2018 12:52
	return nvl(str,'').replace(/(\d\d\d\d)-(\d\d)-(\d\d)/g, dateFormatStr ).replace('T',' ').substring(0, 19)
}
function dateFormatRevert (str ){//03.10.2018 12:52  в  2018-10-03 12:52
	return nvl(str,'').replace(/(\d\d).(\d\d).(\d\d\d\d)/g, dateFormatStrRevert ).replace(' ','T').substring(0, 19)
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
		match(/(\d\d\d\d-(0\d|1[0-2])-([0-2]\d|3[0-1])|([0-2]\d|3[0-1]).(0\d|1[0-2]).\d\d\d\d)(T([0-1]\d|2[0-3])(:([0-4]\d|5[0-9]))?(:([0-4]\d|5[0-9]))?(.*)?)?/g)
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
	let res = str.trim().replace(' ','T').match(/(\d\d\d\d-(0\d|1[0-2])-([0-2]\d|3[0-1])T|([0-2]\d|3[0-1]).(0\d|1[0-2]).\d\d\d\dT)?([0-1]\d|2[0-3])(:([0-4]\d|5[0-9]))?(:([0-4]\d|5[0-9]))?(.*)?/g)
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
	if(val===undefined || val===null || val==='' ) return arguments.length ==1? 0: replace; else return val;
}

function nvlo (val,replace){
	if(typeOfObject(val) != 'object' || Object.keys(val).length==0 ) return arguments.length ==1? {}: replace ; else return val;
}

function systemException({title , text, textParams }, { status, trace, file, line  }) {
	const error = new Error(title+' | '+text)
	console.log(title);
	error.title = title
	error.text = text
	error.textParams = textParams
	error.creator= error.status== undefined? 'js':'php'
	error.status=status
	error.trace=trace
	error.file=file
	error.line=line
	return error
}

function showMsg ({title, text, type, params, textParams, withThrow,}){
	type=type||'error'
	params=params||{}
	textParams=textParams||[]
	withThrow= nvl(withThrow,true)
	if( nvl(_vm)!=0){
		title=_vm.$vuetify.lang.t(title)||title
		text=_vm.$vuetify.lang.t(text, ...textParams)||text
	}
	if(type!='error' ||  !withThrow && nvl(_vm)!=0)
		_vm.$store.dispatch('msg/doAdd', {title,text,type, ...params, })  // jshint ignore:line
	else
		throw new systemException({ title , text, textParams: textParams.join(' | '),  }, params )
}

function getErrDesc(errName){
	return {title:'$vuetify.errors.'+errName+'.title', text:'$vuetify.errors.'+errName+'.text' }
}
function getMsgDesc (msgName, type='success'){
	return {title:'$vuetify.msgs.'+msgName+'.title', text:'$vuetify.msgs.'+msgName+'.text' , type }
}

function openDialogUniversal(params,vm){
	console.log(params,vm);
}

async function getDataTable({href,method, data, variable, loadingVar,  loadingVarNum },vm){
	let param = {href,method, data}
	loadingVar=loadingVar||''
	loadingVarNum=loadingVarNum||''
	if(nvlo(vm,'')==''  )
		showMsg(  {...getErrDesc('wrongFuncEnterParam'), textParams:['getDataTable', 'vm',  vm ] })
	if(vm[variable]== undefined  )
		showMsg(  {...getErrDesc('wrongFuncEnterParam'), textParams:['getDataTable', 'variable',  variable ] })
	if(nvl(loadingVar)!='')
		param = {loadingVar, ...param}
	if(nvl(loadingVarNum)!='')
		param = {loadingVarNum, ...param}
	vm[variable]= await vm.$h.sendRequestForData( param, vm )
}
async function sendRequestForData(params, vm){
	return (await sendRequest(params, vm)).data.data
}
async function sendRequest  ({href, method, headers, data, needSucess, hrefBack, defaultErr, loadingVar, loadingVarNum, }, vm) {
	method=method||'get'
	loadingVar=loadingVar||''
	loadingVarNum=loadingVarNum||''
	let _hrefBackAuth=getLocationParam('auth_href_back'), response={}, 	needLoading= loadingVar!='', needLoadingNum= loadingVarNum!=''
	if(needLoading || needLoadingNum){
		if(nvlo(vm,'')==''  )
			showMsg(  {...getErrDesc('wrongFuncEnterParam'), textParams:['sendRequest', 'vm',  vm ] })
		if( needLoading && vm[loadingVar]== undefined )
			showMsg(  {...getErrDesc('wrongFuncEnterParam'), textParams:['sendRequest', 'loadingVar',  nvl(loadingVar,'')] })
		if( needLoadingNum && vm[loadingVarNum]== undefined )
			showMsg(  {...getErrDesc('wrongFuncEnterParam'), textParams:['sendRequest', 'loadingVarNum',  nvl(loadingVarNum,'')] })
	}
	if(  nvl(href)==0  )
		showMsg(getErrDesc('noSendAddress') )
	try {
		if(needLoadingNum) vm[loadingVarNum]++; if (needLoading) vm[loadingVar]=true;
		response  = await window.axios({														//GET 			/photos 				index 		photos.index
			method: method,																		//GET 			/photos/create 			create 		photos.create
			url: href,																			//POST 			/photos 				store 		photos.store
			headers: { accept: 'application/json',  ...nvlo(headers, {} ) },					//GET 			/photos/{photo} 		show 		photos.show
			params: method=='get'?data:{},														//GET 			/photos/{photo}/edit 	edit 		photos.edit
			data: method!='get'?data:{},														//PUT/PATCH 	/photos/{photo} 		update 		photos.update
		})																						//DELETE 		/photos/{photo} 		destroy 	photos.destroy
		if(nvl(needSucess,'N')=='Y' && response.data!='sucsess')
			showMsg( getErrDesc('requestRefused') )
		if(nvl(hrefBack)!='')
			window.location.href = decodeURIComponent( hrefBack)
		if(['/login','/register'].indexOf(href)!=-1 && _hrefBackAuth!=null)
			window.location.href = decodeURIComponent(_hrefBackAuth)
	} catch (error) {
		console.log(error)
		let r = nvlo(error.response)
		if( nvl(nvlo(r.data).message,'').indexOf("The provided authorization grant")==0) // почему то сервер возращает такой ответ при неверном логине/пароле
			[r.data.title, r.data.message] = ['$vuetify.errors.withLogIn.title', '$vuetify.errors.withLogIn.text']
		if( nvlo(r.data).message=='Unauthenticated.')
			[r.data.title, r.data.message] = ['$vuetify.errors.needAuth.title', '$vuetify.errors.needAuth.text']
		if (needLoading) if(needLoadingNum) vm[loadingVarNum]--; else	vm[loadingVar]=false;
		showMsg({ title: nvlo(r.data).title||nvlo(defaultErr).title||'$vuetify.errors.requestFaild.title'  , text:nvlo(r.data).message||nvlo(defaultErr).text||'$vuetify.errors.requestFaild.text',
			params: {status:r.status, trace:nvlo(r.data).trace, file:nvlo(nvl(error.response).data).file, line:nvlo(r.data).line}, })
	}
	finally{if(needLoadingNum) vm[loadingVarNum]--; if (needLoading) vm[loadingVar]=false;}
	return response
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
	dataCommandMetod,
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

	dateFormatNorm,
	dateFormat,
	dateFormatRevert,
	validateDate,
	validateTime,
	dateTimeNorm,
	timeNorm,
	getNewId,
	
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

	openDialogUniversal,
	
	getDataTable,
	sendRequestForData,
	sendRequest,
}
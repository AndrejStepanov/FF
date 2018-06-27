export default {
	MAX_ID: 9999999,
	MAX_INPUT_IN_COL: 6,
	appTheme:{  primary: '#2c353f', secondary: '#452F41', accent: '#555C3E', error: '#f44336', warning: '#ffeb3b', info: '#2196f3', success: '#4caf50'},
	appThemeInit(){
		
		let styleElt, styleSheet;
		if (document.createStyleSheet)  //Если определен IE API, использовать его
			styleSheet = document.createStyleSheet();
		else {
			let head = document.getElementsByTagName('head')[0];
			styleElt = document.createElement('style');		// Новый элемент <style>
			head.appendChild(styleElt);						// Вставить в <head>
			// Теперь новая таблица находится в конце массива
			styleSheet = document.styleSheets[document.styleSheets.length-1];
		}
		styleElt.innerHTML = styleSheet.cssText = 
			'.accent-color					{color: '+this.appTheme.accent+';} '+
			'.primary--text 				{color: white !important;} '+
			'.margin-5px	 				{color: white !important;} '+
			'.top-center 					{top:50%;} '+
			'.max-height 					{height: 100%;} '+
			'DIV#block_message				{position: fixed;z-index: 800;right: 0px;bottom: 15px;padding: 10px;width: 450px;overflow: auto;vertical-align: middle;text-valign: middle;} '+
			'DIV#block_message>Div.snack	{display: block;position: relative;height: auto;margin-top: 5px;} '+
			'.secondary-color 				{color: '+this.appTheme.secondary+';}';
		
	},
	sort:(a, b, aFild, bFild)=>{
		let aVal = aFild!=''?a[aFild]:a,
			bVal = bFild!=''?b[bFild]:b
		if (aVal > bVal) 
			return 1;
		if (aVal < bVal) 
			return -1;
		// a должно быть равным b
		return 0;
	},
	isInteger:(num)=>{
		return (num ^ 0) === num;
	},
}

export default {
	theme:{  primary: '#2c353f', secondary: '#452F41', accent: '#555C3E', error: '#f44336', warning: '#ffeb3b', info: '#2196f3', success: '#4caf50'},
	initTheme(){
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
			'.accent-color					{color: '+this.theme.accent+';} '+
			'.primary--text 				{color: white !important;} '+
			'.top-center 					{top:50%;} '+
			'.max-height 					{height: 100%;} '+
			'.secondary-color 				{color: '+this.theme.secondary+';}';
		
	}
}

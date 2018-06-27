webpackJsonp([4],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	MAX_ID: 9999999,
	appTheme: { primary: '#2c353f', secondary: '#452F41', accent: '#555C3E', error: '#f44336', warning: '#ffeb3b', info: '#2196f3', success: '#4caf50' },
	appThemeInit: function appThemeInit() {

		var styleElt = void 0,
		    styleSheet = void 0;
		if (document.createStyleSheet) //Если определен IE API, использовать его
			styleSheet = document.createStyleSheet();else {
			var head = document.getElementsByTagName('head')[0];
			styleElt = document.createElement('style'); // Новый элемент <style>
			head.appendChild(styleElt); // Вставить в <head>
			// Теперь новая таблица находится в конце массива
			styleSheet = document.styleSheets[document.styleSheets.length - 1];
		}
		styleElt.innerHTML = styleSheet.cssText = '.accent-color					{color: ' + this.theme.accent + ';} ' + '.primary--text 				{color: white !important;} ' + '.top-center 					{top:50%;} ' + '.max-height 					{height: 100%;} ' + 'DIV#block_message				{position: fixed;z-index: 800;right: 0px;bottom: 15px;padding: 10px;max-height: 95%;width: 450px;overflow: auto;vertical-align: middle;text-valign: middle;} ' + '.secondary-color 				{color: ' + this.theme.secondary + ';}';
	}
});

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ })

},[140]);
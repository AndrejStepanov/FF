export default {
	$vuetify: {	
		system:{
	//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			modals:{
				auth:			{	title:'Авторизация',},
				valSelect:		{	title:'Выбор значения',},
				traceShow:		{	title:'Трассировка',},
				tableSettings:	{	title:'Настройки таблицы',},
			},
			//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			simple:{ 
				actions:{
					add:'Добавить',
					delete:'Удалить',
					edit:'Редактировать',
					search:'Поиск',
					close:'Закрыть',
					save:'Сохранить',
					cancel:'Отмена',
					accept:'Принять',
					auth:'Авторизоваться',
					authEnd:'Завершить сеанс',
					registration:'Зарегистрироваться',
					chacngePass:'Изменить пароль',
					settings:'Настройки',
					logOut:'Выйти',
					logIn:'Войти',
					print:'Печать',
					export:'Экспорт',
				},
				labels:{
					filter:'Фильтр',
					filters:'Фильтры',
					loading:'Загрузка...',
					guest:'Гость',
					auth:'Авторизация',
					detail:'Описание',
					registration:'Регистрация',
					activeTo:'Активен до',
					os:{name:'FF - Конструктор форм', year:'2018'},
					searchInFields:'Искать по полям',
					personalAccount:'Личный кабинет',
					numInOrder:'№ п/п',
					dateRangeSeparator:' до ',
					hourBrevis:'чч',
					minuteBrevis:'мм',
					secondBrevis:'сс',
					excelFile:'*.excel',
					pdfFile:'*.pdf',
					settings:'Настройки',
					struct:'Структура',
					buttons:'Кнопки',
					functional:'Функционал',
				},
				msgs:{
					valMoreOrEq:'Значение должно быть не меньше {0}!',
					valLessOrEq:'Количество символов не должно превышать {0}!',				
					fieldIsNecessary:'Поле обязательное!',				
					fieldMustUsed:'Поле должно быть использовано!',				
					authNeed:'Необходимо авторизоваться!',				
					defTextMes:'Текст сообщения',	
					dateForamatWrong:'Некорректный формат дат/времени!',				
					isLoading:'Подождите, идет загрузка!',				
					needLogin:'Для доступа к этой странице, необходимо авторизироваться в системе!',				
					noAccess:'У вас недостаточно прав для просмотра данной страницы!',				
					invalidHref:'Указан некорректный адрес страницы или у вас нет к ней доступа!',				
				},
			},			
			//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		},
		//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		errors:{
			withOpenDialog: 			{	title:'Ошибка при открытии окна',					text:'Запрашиваемое окно не найдено!',	},
			incorrectValue: 			{	title:'Некорректное значение',						text:'Указано некорректное значение!',},
			notFullValue: 				{	title:'Ошибка при указании данных',					text:'Перед сохранением, укажите данные полностью!',},
			saveNoDate: 				{	title:'Ошибка при указании данных',					text:'Перед сохранением, укажите дату!'},
			traceNotFound: 				{	title:'Ошибка отображения трассировки',				text:'Трассировка не найдена!',},
			noLogOut: 					{	title:'Ошибка при завершении сеанса',				text:'Завершить сеанс не удалось!',},
			noSendAddress: 				{	title:'Ошибка отправки данных',						text:'Неуказанн адрес для отправки!',},
			requestRefused:				{	title:'Ошибка отправки данных', 					text:'Отправленные данные были отвергнуты!',},
			requestFaild:				{	title:'Ошибка отправки данных', 					text:'Отправить данные не удалось!',},
			noDialogOpen:				{	title:'Ошибка при открытии окна',					text:'Идентификатор запрашиваемого окна не найден!',},
			noDialogInitId:				{	title:'Ошибка инициализации окна', 					text:'Не указан идентификатор окна',},
			needAuth:					{	title:'Ошибка авторизации', 						text:'Трубуется авторизоваться!',},
			withLogIn:					{	title:'Ошибка авторизации', 						text:'Указаны не корректные данные!',},
			loginGuestFail:				{	title:'Ошибка авторизации', 						text:'Неудалось авторизироваться под Гостем!',},
			withRegistration:			{	title:'Ошибка регистрации', 						text:'Указаны не корректные данные!',},
			withMailFormat:				{	title:'Ошибка в электронном адресе', 				text:'Некорректный формат адреса!',},
			withPasswordLen:			{	title:'Ошибка в длине пароля', 						text:'Длина пароля минимум 6 символов!',},
			withPasswordConf:			{	title:'Ошибка в подтверждении пароля', 				text:'Введенные пароли должны совпадать!',},
			onlyLetters:				{	title:'Допускаются только буквы', 					text:'Допускаются только буквы!',},
			equalsRangePart:			{	title:'Ошибка при вводе диапазона',					text:'Начало и конец периода должны быть разными!',},
			valNotFull:					{	title:'Ошибка при вводе данных',					text:'Введено не полное значение!',},
			wrongDate:	 				{	title:'Ошибка при вводе даты',						text:'Некорректная дата - <b>{0}</b>!',},
			wrongTime:	 				{	title:'Ошибка при вводе времени',					text:'Некорректное время - <b>{0}</b>!',},
			invalidListElement:			{	title:'Ошибка при выборе элемента',					text:'Выбран некорректный элемент!',},
			serviceTabWrongResponse:	{	title:'Ошибка при формировании таблицы',			text:'Получен некорректный ответ от сервера!',},
			layoutWrongLayout:	 		{	title:'Ошибка в конфигурации шаблона',				text:'Неизвестный тип слоя - <b>{0}</b>!',},
			layoutDublicateNames:	 	{	title:'Ошибка в конфигурации шаблона',				text:'Имя слоя дублируется - <b>{0}</b> : <b>{1}</b>!',},
			wrongFuncEnterParam:	 	{	title:'Ошибка в вызове функции',					text:'В функцию <b>{0}</b>, передан неверный параметр <b>{1}</b>, со значением <b>{2}</b>!',},
			systemErrorJs:	 			{	title:'Системная ошибка JS',						text:'Произошла системная ошибка JS',	},
			wrongPageName:	 			{	title:'Ошибка в структуре системы',					text:'Неизвестный идентификатор страницы <b>{0}</b>!',},
		},
		msgs:{
			loginSucsess: 		{	title:'Авторизация',								text:'Выполнен вход под пользователем <b>{0}</b>!',},
			logoutSucsess: 		{	title:'Авторизация',								text:'Пользователь завершил свой сеанс!',},
			saveDoing: 			{	title:'Сохранение данных', 							text:'Данные успешно сохранены!',},
		},	
	},
}
  
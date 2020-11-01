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
					search:'Поиск',
					close:'Закрыть',
					save:'Сохранить',
					cancel:'Отмена',
					accept:'Принять',
					auth:'Авторизоваться',
					authEnd:'Завершить сеанс',
					registration:'Зарегистрироваться',
					chacngePass:'Изменить пароль',
					Settings:'Настройки',
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
			wrongDate:	 				{	title:'Ошибка при вводе даты',						text:'Некорректная дата - {0}!',},
			wrongTime:	 				{	title:'Ошибка при вводе времени',					text:'Некорректное время - {0}!',},
			invalidListElement:			{	title:'Ошибка при выборе элемента',					text:'Выбран некорректный элемент!',},
			serviceTabWrongResponse:	{	title:'Ошибка при формировании таблицы',			text:'Получен некорректный ответ от сервера!',},
			layoutWrongLayout:	 		{	title:'Ошибка в конфигурации шаблона',				text:'Неизвестный тип слоя - "{0}"!',},
			layoutDublicateNames:	 	{	title:'Ошибка в конфигурации шаблона',				text:'Имя слоя дублируется - {0}:{1}!',},
		},
		msgs:{
			loginSucsess: 		{	title:'Авторизация',								text:'Выполнен вход под пользователем {0}!',},
			logoutSucsess: 		{	title:'Авторизация',								text:'Пользователь завершил свой сеанс!',},
			saveDoing: 			{	title:'Сохранение данных', 							text:'Данные успешно сохранены!',},
		},	
	},
}
  
распаковываем из гита
делаем рабочие копии файлов 
	.env.example
	laravel-echo-server.json.example
	frontend\.env.example
	frontend\vue.config.js.example
устанавливаем
	npm install
	composer install
	php artisan key:generate
	cd frontend
	npm install
готовим лару
	php artisan passport:install
	php artisan config:clear
	php artisan config:cache
	для пыха 8,0 - установить opcache.optimization_level=0 в пхп ини и разкоментить строку
	npm install -g laravel-echo-server 
	laravel-echo-server init
--если база новая
готовим базу
	php artisan migrate
	php artisan db:seed
готовим пых
	php artisan passport:install
	php artisan passport:client --password
	php artisan config:clear
	php artisan config:cache

--что бы сделать сервисы для автоматического запуска очереди и эхо - импортируем в планировщик заданий запуск LARAVEL ECHO.xml LARAVEL QUEUE.xml

--Порты  в фаерволе
	6001 - ехо
	3306 - мускул
	80 - Сайт
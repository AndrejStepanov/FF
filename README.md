распаковываем из гита
делаем рабочие копии файлов 
	.env.example
	laravel-echo-server.json.example
	frontend\.env.example
устанавливаем
	npm install
	composer install
	cd frontend
	npm install
готовим пых
	php artisan passport:install
	php artisan passport:client --password
	php artisan config:clear
	php artisan config:cache
готовим базу
	php artisan migrate
	php artisan db:seed

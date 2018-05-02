<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('_tickets', function (Blueprint $table) {
            $table->increments('ticket_id');                    //ИД входа пользователя (билет)
            $table->datetime('input_date')->nullable(false);    //Дата выдачи (первичный вход)
            $table->datetime('finish_date');                    //Конечная дата активности
            $table->datetime('auth_date');                      //Дата авторизации в системе
            $table->datetime('logout_date');                    //Дата выхода из системы        
            $table->datetime('uptime');                         //Дата обновления        
            $table->integer('cnt_attempts')->nullable(false);   //Количество попыток входа в систему
            $table->integer('user_id');                         //Внешний ИД пользователя
            $table->string('user_name',255)->nullable(false);   //Название пользователя
            $table->string('session_id',32);                    //ИД сессии на сервере
            $table->string('IP',32)->nullable(false);           //IP адресс
            $table->string('Client',256);                       //Браузер
            $table->string('is_root',1);                        //Признак суперпользователя
            $table->string('allow_objects',256);                //Массив доступных объектов, через ";"
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_tickets');
    }
}

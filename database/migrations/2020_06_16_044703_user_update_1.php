<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserUpdate1 extends Migration{
	/**
	* Run the migrations.
	*
	* @return void
	*/
	public function up()   {
		try{
			Schema::table('users', function (Blueprint $table) {
				$table->string('login')->nullable();
				$table->string('firstname')->nullable();
				$table->string('lastname')->nullable();
				$table->string('token')->nullable();
				$table->string('storage')->nullable();
				$table->string('systemLanguage')->nullable();
				$table->string('user_system')->nullable();
				$table->string('avatar')->nullable();
				$table->string('is_root')->nullable();
			});
		}catch(PDOException $ex){
			$this->down();
			throw $ex;
		}
	}

	/**
     * Reverse the migrations.
	*
	* @return void
	*/
	public function down()    {
		Schema::table('users', function (Blueprint $table) {
			$table->dropColumn(['login', 'firstname', 'lastname', 'token', 'storage', 'systemLanguage', 'user_system', 'avatar', 'is_root',]);
		});
	}
}

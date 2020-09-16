<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestNsd extends Migration{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up(){
		try{
			Schema::create('test_nsd', function (Blueprint $table) {
				$table->increments('id');
				$table->string('set');
				$table->string('param_code');
				$table->string('param_desc')->nullable();
				$table->string('param_value');
				$table->integer('seq_num')->nullable();	
				$table->timestamps();			
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
	public function down()	{
		Schema::dropIfExists('test_nsd');
	}
}

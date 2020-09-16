<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestTable extends Migration{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up(){
		try{
			Schema::create('test_table', function (Blueprint $table) {
				$table->increments('id');
				$table->string('obj_level');
				$table->string('obj_param');
				$table->dateTime('tree_date');
				$table->string('tree_input')->default('default');
				$table->integer('tree_int')->nullable();
				$table->double('tree_num', 12,3);
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
		Schema::dropIfExists('test_table');
	}
}

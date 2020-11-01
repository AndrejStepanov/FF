<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestArmTable extends Migration{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up(){
		try{
			Schema::create('test_arm', function (Blueprint $table) {
				$table->increments('id');
				$table->integer('attInt1')->nullable();	
				$table->integer('attInt2')->nullable();	
				$table->double('attNum1', 12,3)->nullable();	
				$table->double('attNum2', 12,3)->nullable();	
				$table->dateTime('attDate1')->nullable();
				$table->dateTime('attDate2')->nullable();
				$table->integer('user_id');
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
		Schema::dropIfExists('test_arm');
	}
}

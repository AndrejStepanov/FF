<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TestArmTableAddStr extends Migration{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()   {
		try{
			Schema::table('test_arm', function (Blueprint $table) {
				$table->string('attStr1')->nullable();
				$table->string('attStr2')->nullable();
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
		Schema::table('test_arm', function (Blueprint $table) {
			$table->dropColumn(['attStr1','attStr2',]);
		});
	}
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ObjComponentName extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()   {
		try{
			Schema::table('objects', function (Blueprint $table) {
				$table->string('obj_comp_name')->comment('Название компоненты для объекта');
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
		Schema::table('objects', function (Blueprint $table) {
			$table->dropColumn(['obj_comp_name',]);
		});
	}
}

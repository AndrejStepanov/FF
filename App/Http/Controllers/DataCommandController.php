<?php

namespace App\Http\Controllers;

use App\Http\main_function;
use App\Models\Tree;
use App\Models\TestNsd;
use App\Models\TestTable;
use Illuminate\Http\Request;

class DataCommandController extends Controller{
	public function reciveCommand(Request $request){
		$data=$request->all();
		switch($data['type']){
			case('object.tree.add'):{  throw new \App\Exceptions\KonsomException( 'Что-то пошло не так','Пошло не так все из-за корявых рук!');   };	
			case('test.nsd.by.set'):{  return (new TestNsd() )->sentNsdDataBySet(nvl($data['set'],'null')); };	
			case('test.data.by.id'):{  return (new TestTable() )->sentDataById(nvl($data['id'],'null')); };
			case('test.number.with.sleep'):{  sleep(5);  return json_encode( ['value'=>10] ) ; };
			default:{ throw new \App\Exceptions\KonsomException( 'Ошибка доступа','Нет доступа!'); };
		}
		
		return;
	}
}
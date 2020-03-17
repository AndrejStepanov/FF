<?php

namespace App\Http\Controllers;

use App\Http\main_function;
use App\Models\Tree;
use App\Models\TestNsd;
use App\Models\TestTable;
use Illuminate\Http\Request;

class SocetCommandController extends Controller{
	public function reciveCommand(Request $request){
		$data=$request->all();
		
		switch($data['type']){
			case('object.tree.by.root'):{  (new Tree() )->sentTreeData(nvl($data['parent_id'],'null')); };	
			case('test.nsd.by.set'):{  (new TestNsd() )->sentNsdDataBySet(nvl($data['set'],'null')); };	
			case('test.data.by.id'):{  (new TestTable() )->sentDataById(nvl($data['id'],'null')); };	
			default:{ throw new \App\Exceptions\KonsomException( 'Ошибка доступа','Нет доступа!'); };
		}
		return;
	}
}
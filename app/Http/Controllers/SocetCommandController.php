<?php

namespace App\Http\Controllers;

use App\Http\main_function;
use App\Models\Tree;
use Illuminate\Http\Request;

class SocetCommandController extends Controller{
	public function reciveCommand(Request $request){
		$data=$request->all();
		
		switch($data['type']){
			case('object.tree.by.root'):{  $tree = new Tree(); $tree->sentTreeData(nvl($data['parent_id'],'null')); };	
			default:{ throw new \App\Exceptions\KonsomException( 'Ошибка доступа','Нет доступа!'); };
		}
		return;
	}
}
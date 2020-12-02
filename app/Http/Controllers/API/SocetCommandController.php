<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\main_function;
use App\Models\Tree;
use Illuminate\Http\Request;

class SocetCommandController extends BaseController{
	public function reciveCommand(Request $request){
		$data=$request->all();
		$res=[];
		switch($data['socetEvent']){
			case('object.tree.by.root'):{  $res= (new Tree() )->sentTreeData(nvl($data['parent_id'],'null'));  break;}
			default:{ throw new \App\Exceptions\KonsomException( 'Ошибка доступа','Нет доступа!'); };
		}
		return $this->sendResponse($res, 'Processed successfully.');
	}
}
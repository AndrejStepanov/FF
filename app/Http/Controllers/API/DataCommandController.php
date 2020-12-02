<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\main_function;
use App\Models\Tree;
use App\Models\TestNsd;
use App\Models\TestTable;
use Illuminate\Http\Request;

class DataCommandController extends BaseController{
	public function reciveCommand(Request $request){
		$data=$request->all();
		$res=[];
		switch($data['socetEvent']){
			case('object.tree.add'):{  throw new \App\Exceptions\KonsomException( 'Что-то пошло не так','Пошло не так все из-за корявых рук!');   }
			case('test.nsd.by.set'):{  $res=(new TestNsd() )->sentNsdDataBySet(nvl($data['set'],'null')); break; };
			case('test.data.by.id'):{  $res=(new TestTable() )->sentDataById(nvl($data['id'],'null')); break; 	}
			case('test.number.with.sleep'):{ /*sleep(5);*/ $res=json_encode( ['value'=>10] ); break;	}
			default:{ throw new \App\Exceptions\KonsomException( 'Ошибка доступа','Нет доступа!'); }
		}
		return $this->sendResponse($res, 'Processed successfully.');
	}
}
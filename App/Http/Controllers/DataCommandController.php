<?php

namespace App\Http\Controllers;

use App\Http\main_function;
use App\Models\Tree;
use Illuminate\Http\Request;

class DataCommandController extends Controller{
	public function reciveCommand(Request $request){
		$data=$request->all();
		switch($data['type']){
			case('object.tree.add'):{ throw new \App\Exceptions\KonsomException( 'Что-то пошло не так','Пошло не так все из-за корявых рук!');   };	
		}
		
		return;
	}
}
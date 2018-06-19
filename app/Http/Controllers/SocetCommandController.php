<?php

namespace App\Http\Controllers;

use App\Models\Tree;
use Illuminate\Http\Request;

class SocetCommandController extends Controller{
	public function reciveCommand(Request $request){
		$data=$request->all();
		switch($data['type']){
			case('object-tree-request'):{ $tmp = new Tree(); $tmp->sentTreeData(); };	
			
		}
		return;
	}

}
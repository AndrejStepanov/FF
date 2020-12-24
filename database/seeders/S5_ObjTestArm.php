<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tree;
use App\Models\Objects;
use App\Models\ObjLink;

class S5_ObjTestArm extends Seeder {

  public function run()  {
	$objId = 10004;
	$seqNum=3;
	$objName="Тестовый арм";
	$parentName="Тестовая система";
	$treeeHead = Tree::whereIn('tree_name', array($parentName))->get();

	ObjLink::whereIn('link_name', array($objName))->delete();
	Objects::whereIn('obj_name', array($objName))->delete();	
	Tree::whereIn('tree_name', array($objName))->delete();	

	$treeeTestArm = Tree::create(['level' => 2, 'seq_num'=> $seqNum, 'tree_desc'=>$objName.' описание', 'tree_group'=>'Objects', 'tree_name'=>$objName, 'tree_path'=>$parentName.'::'.$objName, 
		'parent_id'=>$treeeHead[0]->tree_id, 'parent_ids'=>$treeeHead[0]->tree_id,  ]);

	$objTestArm = Objects::create(['auth' => 'Струков Иван', 'guid_tree_id'=> $treeeTestArm->tree_id, 'language'=>'ru', 'obj_desc'=>$objName.' описание 2', 'obj_group'=>'Form', 'obj_id'=>$objId, 
		'obj_name'=>$objName, 'obj_path'=> $parentName.'::'.$objName, 'obj_type'=>'АРМ', 'obj_comp_name'=>'PTestArm', ]);

	$linkTestArm = ObjLink::create(['is_active' => 'Y', 'link_id'=>4, 'link_desc'=>$objName.' описание 3', 'link_to_type'=>'_self', 'obj_id' => $objId, 'href_link'=>$objName, 'link_name'=>$objName, 'link_group'=>'Армы',  ]);

  }

}
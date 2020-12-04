<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tree;
use App\Models\Objects;
use App\Models\ObjLink;

class S3_ObjStructSeeder extends Seeder {

  public function run()  {
	ObjLink::whereIn('link_name', array('Работа с объектами','Просмотр объектов', 'Тестовая система'))->delete();
	Objects::whereIn('obj_name', array('Работа с объектами','Просмотр объектов', 'Тестовая система'))->delete();	
	Tree::whereIn('tree_name', array('Работа с объектами','Просмотр объектов', 'Тестовая система'))->delete();
	
    $treeeHead = Tree::create(['level' => 1, 'seq_num'=> 1, 'tree_desc'=>'Тестовая система описание', 'tree_group'=>'Objects', 'tree_name'=>'Тестовая система', 'tree_path'=>'Тестовая система' ]);
    $treeeArmWork = Tree::create(['level' => 2, 'seq_num'=> 1, 'tree_desc'=>'Работа с объектами описание', 'tree_group'=>'Objects', 'tree_name'=>'Работа с объектами', 'tree_path'=>'Тестовая система::Работа с объектами', 
		'parent_id'=>$treeeHead->tree_id, 'parent_ids'=>$treeeHead->tree_id,  ]);
    $treeeArmView = Tree::create(['level' => 2, 'seq_num'=> 2, 'tree_desc'=>'Просмотр объектов описание', 'tree_group'=>'Objects', 'tree_name'=>'Просмотр объектов', 'tree_path'=>'Тестовая система::Просмотр объектов', 
		'parent_id'=>$treeeHead->tree_id, 'parent_ids'=>$treeeHead->tree_id,  ]);

    $objHead = Objects::create(['auth' => 'Струков Иван', 'guid_tree_id'=> $treeeHead->tree_id, 'language'=>'ru', 'obj_desc'=>'Тестовая система описание 2', 'obj_group'=>'Form', 'obj_id'=>10001, 
		'obj_name'=>'Тестовая система', 'obj_path'=> 'Тестовая система', 'obj_type'=>'Гл. страница', 'obj_comp_name'=>'PMainTest', ]);
    $objArmWork = Objects::create(['auth' => 'Струков Иван', 'guid_tree_id'=> $treeeArmWork->tree_id, 'language'=>'ru', 'obj_desc'=>'Работа с объектами описание 2', 'obj_group'=>'Form', 'obj_id'=>10002, 
		'obj_name'=>'Работа с объектами', 'obj_path'=> 'Тестовая система::Работа с объектами', 'obj_type'=>'АРМ', 'obj_comp_name'=>'PObjectWork', ]);
    $objArmView = Objects::create(['auth' => 'Струков Иван', 'guid_tree_id'=> $treeeArmView->tree_id, 'language'=>'ru', 'obj_desc'=>'Просмотр объектов описание 2', 'obj_group'=>'Form', 'obj_id'=>10003, 
		'obj_name'=>'Просмотр объектов', 'obj_path'=> 'Тестовая система::Просмотр объектов', 'obj_type'=>'АРМ', 'obj_comp_name'=>'PObjectView', ]);

    $linkHead = ObjLink::create(['is_active' => 'Y', 'link_id'=>1, 'link_desc'=>'Тестовая система описание 3', 'link_to_type'=>'_self', 'obj_id' => 10001, 'href_link'=>'/', 'link_name'=>'Тестовая система', 'link_group'=>'Гл. страница',  ]);
    $linkArmWork = ObjLink::create(['is_active' => 'Y', 'link_id'=>2, 'link_desc'=>'Работа с объектами описание 3', 'link_to_type'=>'_self', 'obj_id' => 10002, 'href_link'=>'/Работа с объектами', 'link_name'=>'Работа с объектами', 'link_group'=>'Армы',  ]);
    $linkArmWork = ObjLink::create(['is_active' => 'Y', 'link_id'=>3, 'link_desc'=>'Просмотр объектов описание 3', 'link_to_type'=>'_self', 'obj_id' => 10003, 'href_link'=>'/Просмотр объектов', 'link_name'=>'Просмотр объектов', 'link_group'=>'Армы',  ]);

  }

}
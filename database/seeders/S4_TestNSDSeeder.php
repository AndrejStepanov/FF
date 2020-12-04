<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TestNsd;

class S4_TestNSDSeeder extends Seeder {

  public function run()  {
	TestNsd::whereIn('id', array(1,2,3,4,5,6,7))->delete();

	TestNsd::create(['id'=>1, 'set'=>'Уровень вложенности объекта', 'param_code'=>'cur', 		'param_value'=>'Текущий уровень', 	'param_desc'=>'Текущий уровень, прям текущищийся', 				'seq_num'=>1 ]);
	TestNsd::create(['id'=>2, 'set'=>'Уровень вложенности объекта', 'param_code'=>'inside', 	'param_value'=>'Вложенный', 		'param_desc'=>'Вложенный, это как текущий, только вложенный', 	'seq_num'=>2 ]);
	TestNsd::create(['id'=>3, 'set'=>'Уровень вложенности объекта', 'param_code'=>'strange', 	'param_value'=>'Странный', 			'param_desc'=>'Странный, вообще непонятно что это', 			'seq_num'=>3 ]);
	TestNsd::create(['id'=>4, 'set'=>'Тип объекта', 				'param_code'=>'node', 		'param_value'=>'Узел дерева', 		'param_desc'=>'Узел дерева, веточка',							'seq_num'=> NULL ]);
	TestNsd::create(['id'=>5, 'set'=>'Тип объекта', 				'param_code'=>'ARM', 		'param_value'=>'Рабочая область', 	'param_desc'=>'Армик', 											'seq_num'=>NULL ]);
	TestNsd::create(['id'=>6, 'set'=>'Тип объекта', 				'param_code'=>'filter', 	'param_value'=>'Фильтр', 			'param_desc'=>'Фильтрик', 										'seq_num'=>NULL ]);
	TestNsd::create(['id'=>7, 'set'=>'Тип объекта', 				'param_code'=>'input',		'param_value'=>'Поле ввода', 		'param_desc'=>'Инпутик', 										'seq_num'=>99 ]);

  }

}
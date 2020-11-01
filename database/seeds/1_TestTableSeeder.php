<?php


use Illuminate\Database\Seeder;
use App\Models\TestTable;

class TestTableSeeder extends Seeder {

  public function run()  {
	TestTable::whereIn('obj_param', array('qwe', 'iop'))->delete();

    TestTable::create(['obj_param' => 'qwe', 'tree_input'=> 'asd', 'tree_num'=>1.2, 'tree_int'=>2, 'tree_date'=>'2020-03-17T00.00.00.000000', 'obj_level'=>'Странный' ]);
    TestTable::create(['obj_param' => 'iop', 'tree_input'=> 'jkl', 'tree_num'=>2.2, 'tree_int'=>3, 'tree_date'=>'2020-03-18T00.00.00.000000', 'obj_level'=>'inside' ]);

  }

}
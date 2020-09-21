<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class TestTable extends Model{
    use Notifiable;
	protected $table = 'test_table'; //лара автоматом добавляет в конец названия класа 's' и ищет таблицу с таким названием. 
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $primaryKey = 'id';
    protected $dates = [  'created_at', 'updated_at', 'tree_date'];
    protected $fillable = [
		'id','obj_level', 'obj_param', 'tree_date', 'tree_input', 'tree_int','tree_num',
    ];
	public  function sentDataById($id){
		$query =  $this->select('id','obj_level','obj_param', 'tree_input', 'tree_int', 'tree_num', 'tree_date' )->orderBy('id');
		if(nvl($id,'null')!='null')
			$query->where('id' ,'=',$id); 
		return   json_encode( 
			[ 'data'=>$query->get()->toArray(), 'head'=> [
				['value'=>'obj_param',		'text'=>'Параметр',			'type'=>'numeric', 	],
				['value'=>'tree_input',		'text'=>'Ввод', 			'type'=>'text', 	],
				['value'=>'tree_num',		'text'=>'Текст',			'type'=>'numeric', 	],
				['value'=>'tree_int',		'text'=>'Название',			'type'=>'numeric', 	],
				['value'=>'tree_date',		'text'=>'Дата',				'type'=>'date',		],
				['value'=>'obj_level',		'text'=>'Вложенность',		'type'=>'text', 	],
			], 
		]);
	}
}

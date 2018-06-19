<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\main_function;
use App\Events\ObjTreeData ;
class Tree extends Model
{

	protected $table = '_tree';
	protected $primaryKey = 'tree_id';
	protected $dates = [  'created_at', 'updated_at', 'deleted_at'];
    //public $incrementing = false;

    protected $fillable = ['tree_id', 'tree_group', 'parent_id', 'parent_ids', 'level', 'tree_name', 'tree_desc', 'tree_path', 'seq_num'];
	
	public  function sentTreeData(){
		 $data = $this->select('tree_id as id','tree_group','parent_id','tree_name')->orderBy('tree_path')->get()->toArray();
		 $newData = $dicTree = array();
		 foreach($data as $i=>$row)
			if($row['parent_id']>0)
				$dicTree[ $row['parent_id'] ]['children'][]  = $row ;
			else
				$dicTree[ $row['id'] ] = $row;
		foreach($dicTree as $i=>$row)
			$newData[]=$row;
		event(new ObjTreeData(json_encode($newData)));
	}

	public function objects()
	{
		return $this->hasMany('Objects', 'tree_id', 'tree_id');
	}
}
?>
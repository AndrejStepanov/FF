<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Events\ObjTreeData ;
class Tree extends Model
{

	protected $table = '_tree';
	protected $primaryKey = 'tree_id';
	protected $dates = [  'created_at', 'updated_at', 'deleted_at'];
    //public $incrementing = false;

    protected $fillable = ['tree_id', 'tree_group', 'parent_id', 'parent_ids', 'level', 'tree_name', 'tree_desc', 'tree_path', 'seq_num'];
	
	public  function sentTreeData($parent_id){
		$query =  $this->select('tree_id as id','tree_group','parent_id','tree_name' )->orderBy('tree_path');
		if($parent_id=='null')
			 $query->whereNull('parent_id');
		else
			$query->where('parent_id' ,'=',$parent_id);
		$data = $query->get()->toArray();		 
		foreach($data  as $i=>$row)
			if(!$this->where('parent_id' ,'=',$row['id'])->first())
				$data[$i]['hasChild']=0;
			else
				$data[$i]['hasChild']=1;
		event(new ObjTreeData(json_encode($data)));
	}

	public function objects()
	{
		return $this->hasMany('Objects', 'tree_id', 'tree_id');
	}
}
?>
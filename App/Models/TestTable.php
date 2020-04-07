<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Events\SocetData ;
class TestTable extends Model{

	protected $table = '_test_table';
	protected $primaryKey = 'id';
	protected $dates = [  'tree_date'];
    protected $fillable = ['obj_level','obj_param', 'tree_input', 'tree_int', 'tree_num',];
	
	public  function sentDataById($id){
		$query =  $this->select('id','obj_level','obj_param', 'tree_input', 'tree_int', 'tree_num', 'tree_date' )->orderBy('id');
		if(nvl($id,'null')!='null')
			$query->where('id' ,'=',$id); 
		return json_encode( $query->get()->toArray() );
	}
}
?>
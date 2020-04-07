<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Events\SocetData ;
class TestNsd extends Model{

	protected $table = '_test_nsd';
	protected $primaryKey = 'id';

    protected $fillable = ['set','param_code', 'param_desc', 'param_value', 'seq_num',];
	
	public  function sentNsdDataBySet($set){
		$query =  $this->select('id','param_code as value','param_desc','param_value as text' )->where('set' ,'=',$set)->orderBy('seq_num');	
		//sleep(3);	 
		return json_encode( $query->get()->toArray() );
	}
}
?>
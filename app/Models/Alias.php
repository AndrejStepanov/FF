<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Alias extends Model
{
	use SoftDeletingTrait;

	protected $table = '_alias';
	protected $primaryKey = 'alias_id';
	protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
    public $incrementing = false;

    protected $fillable = ['alias_id', 'obj_id', 'src_path', 'alias_name', 'get_param', 'tree_name', 'tree_desc', 'tree_path', 'seq_num'];

	public function objects()
	{
		return $this->belongsTo('Objects', 'obj_id', 'obj_id');
	}
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tree extends Model
{
	use SoftDeletingTrait;

	protected $table = '_tree';
	protected $primaryKey = 'tree_id';
	protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
    public $incrementing = false;

    protected $fillable = ['tree_id', 'tree_group', 'parent_id', 'parent_ids', 'level', 'tree_name', 'tree_desc', 'tree_path', 'seq_num'];

	public function objects()
	{
		return $this->hasMany('Objects', 'tree_id', 'tree_id');
	}
}

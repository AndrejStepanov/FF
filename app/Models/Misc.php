<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Misc extends Model
{
	use SoftDeletingTrait;

	protected $table = '_misc';
	protected $primaryKey = 'misc_id';
	protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
    public $incrementing = false;

    protected $fillable = ['misc_id', 'tree_id', 'misc_type', 'misc_name', 'misc_file', 'misc_size', 'tree_desc', 'tree_path', 'seq_num'];

	public function tree()
	{
		return $this->hasMany('Tree', 'tree_id', 'tree_id');
	}
}

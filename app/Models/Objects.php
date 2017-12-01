<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Objects extends Model
{
	use SoftDeletingTrait;

	protected $table = '_object';
  protected $primaryKey = 'object_id';
	protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
    public $incrementing = false;

    protected $fillable = ['obj_id', 'obj_group', 'obj_type', 'obj_path', 'obj_name', 'obj_desc', 'creator', 'guid_tree_id'];

	public function tree()
	{
		return $this->belongsTo('Tree', 'tree_id', 'tree_id');
	}
}

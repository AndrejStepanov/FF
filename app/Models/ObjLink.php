<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ObjLink extends Model{
	protected $table = 'obj_links'; //лара автоматом добавляет в конец названия класа 's' и ищет таблицу с таким названием. 
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $primaryKey = 'link_id';
	protected $dates = [  'created_at', 'updated_at' ];
	protected $fillable = [
		'link_group','link_name', 'link_desc', 'is_active', 'css_class', 'obj_id', 'link_to_type', 'js_fun', 'misc_id',  'link_id', 
	];
	public function objects()	{
		return $this->belongsTo('App\Models\Objects');
	}
}
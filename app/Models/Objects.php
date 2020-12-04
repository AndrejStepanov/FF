<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Objects extends Model{
	protected $table = 'objects'; //лара автоматом добавляет в конец названия класа 's' и ищет таблицу с таким названием. 
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $primaryKey = 'obj_id';
    protected $dates = [  'created_at', 'updated_at' ];
    protected $fillable = [
		'obj_group','obj_type', 'obj_path', 'obj_name', 'obj_desc', 'auth', 'language', 'guid_tree_id', 'obj_id', 'obj_comp_name', 
    ];
}
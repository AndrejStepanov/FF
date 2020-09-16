<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Misc extends Model{
	protected $table = 'miscs'; //лара автоматом добавляет в конец названия класа 's' и ищет таблицу с таким названием. 
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $primaryKey = 'misc_id';
    protected $dates = [  'created_at', 'updated_at' ];
    protected $fillable = [
		'tree_id','misc_type', 'misc_name', 'misc_file', 'misc_size', 'obj_id',  'misc_id', 
    ];
}
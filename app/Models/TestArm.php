<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class TestArm extends Model{
    use Notifiable;
	protected $table = 'test_arm'; //лара автоматом добавляет в конец названия класа 's' и ищет таблицу с таким названием. 
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $primaryKey = 'id';
    protected $dates = [  'created_at', 'updated_at', 'attDate1', 'attDate2'];
    protected $fillable = [
		'id','attInt1', 'attInt2', 'attNum1', 'attNum2', 'attDate1', 'attDate2', 'user_id',
    ];
}

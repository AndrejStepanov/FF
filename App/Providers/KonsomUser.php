<?php

namespace App\Providers;

use Illuminate\Support\Str;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Contracts\Hashing\Hasher as HasherContract;
use App\Queues\Amqp;
use App\Models\Ticket;

class KonsomUser implements   AuthenticatableContract,   AuthorizableContract,   CanResetPasswordContract{
    use Authenticatable, Authorizable, CanResetPassword;
	/**
	 * The hasher implementation.
	 * @var \Illuminate\Contracts\Hashing\Hasher
	 */
	protected $hasher;
	/**
	 * The Eloquent user model.
	 * @var string
	 */
	protected $model;
	protected $queueConnect;
	protected $queuePort;
	protected $queueUser;
	protected $queuePassword;
	/**
	 * Create a new database user provider.
	 * @param  \Illuminate\Contracts\Hashing\Hasher  $hasher
	 * @param  string  $model
	 * @return void
	 */
	public function __construct(HasherContract $hasher, $model, $queueConnect, $queuePort, $queueUser, $queuePassword)    {
		$this->hasher = $hasher;
		$this->model = $model;
		$this->queueConnect = $queueConnect;
		$this->queuePort = $queuePort;
		$this->queueUser = $queueUser;
		$this->queuePassword = $queuePassword;
    }
    
	/**
	 * Откуда пользователь - наш или удаленный
	 * @var string
	 */
    public $storage;
    public $id;
	public $password;
	public $timestamps;
	public $remember_token;
	/**
	 * Для возможности оповещения
	 * @var string
	 */
	public $email;
	public $name;
	public $is_root;
	/**
	 * Поиск по параметрам авторизации
	 * @param  array  $credentials
	 * @return \Illuminate\Contracts\Auth\Authenticatable
	 */
    public function findByCredentials($credentials){
        $this->is_root='N';
        $this->password=$credentials['password'];
		$data = $this->createModel()->newQuery()->where('login', $credentials['login'])->first();
        if( isset($data) &&  $this->hasher-> check ($this->password, $data ['password'])){
			$this->id=$data['id'];
			$this->storage='home';
            $this->is_root=$data['is_root'];
			$this->name=$data['name'];
			$this->password=$this->hasher->make($this->password);
            return $this;
		}
	}

	/**
	 * Поиск по идентификатору
	 * @param  array  $credentials
	 * @return \Illuminate\Contracts\Auth\Authenticatable
	 */
    public function findById($identifier){
		$data=Ticket::where('session_id', session()->getId())->where('user_id', $identifier )->where('input_date','<=', date("Y-m-d H:i:s"))->where('finish_date','>=', date("Y-m-d H:i:s"))->first();
		$this->id=$data['id'];
		$this->storage=$data['storage'];
		$this->is_root=$data['is_root'];
		$this->name=$data['user_name'];
		$this->password=$data['password'];
		return $this;
    }

	/**
	 * Поиск по идентификатору
	 * @param  array  $credentials
	 * @return \Illuminate\Contracts\Auth\Authenticatable
	 */
    public function findByToken($identifier, $token){
		return $this->findById($identifier);
	}

	
	/**
	 * Create a new instance of the model.
	 * @return \Illuminate\Database\Eloquent\Model
	 */
	public function createModel()    {
		$class = '\\'.ltrim($this->model, '\\');
		return new $class;
    }

	/**
	 * Get the name of the unique identifier for the user.
	 * @return string
	 */
	public function getKeyName()    {
		return 'id';
    }  
    
}

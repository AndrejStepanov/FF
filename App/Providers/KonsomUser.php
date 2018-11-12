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
	/**
	 * Идентификатор внутрннего пользователя
	 * @var string
	 */
	public $id;
	/**
	 * Идентификатор внешнего пользователя
	 * @var string
	 */
	public $userId;
	/**
	 * хеш пароля, под которым зашел пользователь
	 * @var string
	 */
	public $password;
	public $timestamps;
	public $remember_token;
	/**
	 * Для возможности оповещения
	 * @var string
	 */
	public $email;
	public $name;
	public $isRoot;
	public $dateSt;
	public $dateFn;
	public $oldTicket;
	public $systemLanguage;

	/**
	 * Поиск по параметрам авторизации
	 * @param  array  $credentials
	 * @return \Illuminate\Contracts\Auth\Authenticatable
	 */
	public function findByCredentials($credentials){
		$this->isRoot='N';
		$data = $this->createModel()->newQuery()->where('login', $credentials['login'])->first();
		if( isset($data) &&  $this->hasher-> check ($credentials['password'], $data ['password'])){
			$this->id=$data['id'];
			$this->storage='home';
			$this->isRoot=$data['is_root'];
			$this->name=$data['name'];
			$this->email=$data['email1'];
			$this->password=$this->hasher->make($credentials['password']);
			$this->dateSt  = time();
			$this->dateFn  = time()+ ( 8 * 60 * 60);
			$this->systemLanguage  = 'ru';
			return $this;
		}
		throw new \App\Exceptions\KonsomException('Ошибка при авторизации', 'Указанные логин и пароль не найдены!');
	}

	/**
	 * Запись в сессию
	 * @param  array  $credentials
	 * @return \Illuminate\Contracts\Auth\Authenticatable
	 */
	public function save(){
        session()->push('authStorage',$this->storage);
        session()->push('authId',$this->id);
        session()->push('authUserId',$this->userId);
        session()->push('authPassword',$this->password);
        session()->push('authTimestamps',$this->timestamps);
        session()->push('authRememberToken',$this->remember_token);
        session()->push('authEmail',$this->email);
        session()->push('authName',$this->name);
        session()->push('authIsRoot',$this->isRoot);
        session()->push('authDateSt', $this->dateSt);
        session()->push('authDateFn', $this->dateFn);
        session()->push('authSystemLanguage', $this->systemLanguage);
	}

	/**
	 * Поиск по идентификатору
	 * @param  array  $credentials
	 * @return \Illuminate\Contracts\Auth\Authenticatable
	 */
	public function findById($identifier){
		$this->storage= session()->get('authStorage')[0];
		$this->id= session()->get('authId')[0];
		$this->userId= session()->get('authUserId')[0];
		$this->password= session()->get('authPassword')[0];
		$this->timestamps= session()->get('authTimestamps')[0];
		$this->remember_token= session()->get('authRememberToken')[0];
		$this->email= session()->get('authEmail')[0];
		$this->name= session()->get('authName')[0];
		$this->isRoot= session()->get('authIsRoot')[0];
		$this->dateSt= session()->get('authDateSt')[0];
		$this->dateFn= session()->get('authDateFn')[0];
		$this->systemLanguage= session()->get('authSystemLanguage')[0];
		if(  $this->dateFn > time())
			return $this;
		session()->invalidate();
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

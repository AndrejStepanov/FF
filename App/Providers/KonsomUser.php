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

class KonsomUser implements   AuthenticatableContract,   AuthorizableContract,   CanResetPasswordContract  {
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
	 * хеш пароля, под которым зашел пользователь
	 * @var string
	 */
	public $password;
	public $timestamps;
	protected $remember_token;

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
	public $avatar;

	/**
	 * Поиск по параметрам авторизации
	 * @param  array  $credentials
	 * @return \Illuminate\Contracts\Auth\Authenticatable
	 */
	public function findByCredentials($credentials){
		$this->isRoot='N';
		$data = $this->createModel()->newQuery()->where('login', $credentials['login'])->where('user_system', nvl($credentials['user_system'],config('app.name')) )->first();
		if( isset($data) &&  $this->hasher-> check ($credentials['password'], $data ['password'])){
			$this->id=$data['id'];
			$this->storage='home';
			$this->isRoot=$data['is_root'];
			$this->name=$data['name'];
			$this->email=$data['email1'];
			$this->avatar=$data['avatar'];
			$this->systemLanguage=$data['systemLanguage'];
			$this->remember_token=$data['remember_token'];
			$this->password=$this->hasher->make($credentials['password']);		
			return $this;
		}
		throw new \App\Exceptions\KonsomException('Ошибка при авторизации', 'Указанные логин и пароль не найдены!');
	}

	public function initForLogin(){
		$this->dateSt  = time();
		$this->dateFn  = time()+ ( 8 * 60 * 60);
	}

	/**
	 * Запись в сессию
	 * @param  array  $credentials
	 * @return \Illuminate\Contracts\Auth\Authenticatable
	 */
	public function save(){
		session([
        'authStorage' => $this->storage,
        'authId' => $this->id,
        'authPassword' => $this->password,
        'authTimestamps' => $this->timestamps,
        'authRememberToken' => $this->remember_token,
        'authEmail' => $this->email,
        'authName' => $this->name,
        'authAvatar' =>$this->avatar,
        'authIsRoot' => $this->isRoot,
        'authDateSt' => $this->dateSt,
        'authDateFn' => $this->dateFn,
        'authSystemLanguage' => $this->systemLanguage
		]);
	}
	/**
	 * Поиск по идентификатору
	 * @param  array  $credentials
	 * @return \Illuminate\Contracts\Auth\Authenticatable
	 */
	public function findById($identifier){
		$this->storage= session()->get('authStorage');
		$this->id= session()->get('authId');
		$this->password= session()->get('authPassword');
		$this->timestamps= session()->get('authTimestamps');
		$this->remember_token= session()->get('authRememberToken');
		$this->email= session()->get('authEmail');
		$this->name= session()->get('authName');
		$this->avatar= session()->get('authAvatar');
		$this->isRoot= session()->get('authIsRoot');
		$this->dateSt= session()->get('authDateSt');
		$this->dateFn= session()->get('authDateFn');
		$this->systemLanguage= session()->get('authSystemLanguage');
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

<?php
// app/Extensions/MongoUserProvider.php
namespace App\Providers;

use Illuminate\Support\Str;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Database\ConnectionInterface;
use Illuminate\Contracts\Hashing\Hasher as HasherContract;
use Illuminate\Contracts\Auth\Authenticatable as UserContract;
use App\Providers\KonsomUser;

class KonsomAuthProvider implements UserProvider{
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
	 * Retrieve a user by the given credentials.
	 *
	 * @param  array  $credentials
	 * @return \Illuminate\Contracts\Auth\Authenticatable|null
	 */
	public function retrieveByCredentials(array $credentials)    {
		if (empty($credentials) || (count($credentials) === 1 && array_key_exists('password', $credentials)))
			return;
		// First we will add each credential element to the query as a where clause.
		// Then we can execute the query and, if we found a user, return it in a
		// Eloquent User "model" that will be utilized by the Guard instances.
		$user = new KonsomUser($this->hasher,$this->model, $this->queueConnect, $this->queuePort, $this->queueUser, $this->queuePassword);
		return $user ->findByCredentials($credentials);
	}

	/**
	 * Retrieve a user by their unique identifier.
	 * @param  mixed  $identifier
	 * @return \Illuminate\Contracts\Auth\Authenticatable|null
	 */
	public function retrieveById($identifier)    {
		$user = new KonsomUser($this->hasher,$this->model, $this->queueConnect, $this->queuePort, $this->queueUser, $this->queuePassword);
		return $user ->findById($identifier);
	}

	/**
	 * Retrieve a user by their unique identifier and "remember me" token.
	 * @param  mixed  $identifier
	 * @param  string  $token
	 * @return \Illuminate\Contracts\Auth\Authenticatable|null
	 */
	public function retrieveByToken($identifier, $token)    {
		$user = new KonsomUser($this->hasher,$this->model, $this->queueConnect, $this->queuePort, $this->queueUser, $this->queuePassword);
		return $user ->findByToken($identifier, $token);
	}

	/**
	 * Update the "remember me" token for the given user in storage.
	 * @param  \Illuminate\Contracts\Auth\Authenticatable  $user
	 * @param  string  $token
	 * @return void
	 */
	public function updateRememberToken(UserContract $user, $token)    {
		$user->setRememberToken($token);
		$timestamps = $user->timestamps;
		$user->timestamps = false;		
		$user->save();
		$user->timestamps = $timestamps;
	}


	/**
	 * Validate a user against the given credentials.
	 * @param  \Illuminate\Contracts\Auth\Authenticatable  $user
	 * @param  array  $credentials
	 * @return bool
	 */
	public function validateCredentials(UserContract $user, array $credentials)    {
		return $this->hasher->check( $credentials['password'], $user->getAuthPassword());
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
	 * Gets the hasher implementation.
	 * @return \Illuminate\Contracts\Hashing\Hasher
	 */
	public function getHasher()    {
		return $this->hasher;
	}

	/**
	 * Sets the hasher implementation.
	 * @param  \Illuminate\Contracts\Hashing\Hasher  $hasher
	 * @return $this
	 */
	public function setHasher(HasherContract $hasher)    {
		$this->hasher = $hasher;
		return $this;
	}

	/**
	 * Gets the name of the Eloquent user model.
	 * @return string
	 */
	public function getModel()    {
		return $this->model;
	}

	/**
	 * Sets the name of the Eloquent user model.
	 * @param  string  $model
	 * @return $this
	 */
	public function setModel($model)    {
		$this->model = $model;
		return $this;
	}
}

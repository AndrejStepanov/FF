<?php
// app/Extensions/MongoUserProvider.php
namespace App\Providers;

use Illuminate\Support\Str;
use Illuminate\Auth\EloquentUserProvider;
use Illuminate\Database\ConnectionInterface;
use Illuminate\Contracts\Hashing\Hasher as HasherContract;
use Illuminate\Contracts\Auth\Authenticatable as UserContract;
use Illuminate\Contracts\Auth\UserProvider;
use App\Providers\KonsomUser;

class KonsomAuthProvider extends EloquentUserProvider implements UserProvider{

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
}

<?php

namespace App\Providers;

use RuntimeException;
use Illuminate\Auth\SessionGuard;
use Illuminate\Contracts\Auth\Authenticatable;
use App\Models\Ticket;

class KonsomGuard extends SessionGuard{
   	/**
	 * Log a user into the application.
	 *
	 * @param  \Illuminate\Contracts\Auth\Authenticatable  $user
	 * @param  bool  $remember
	 * @return void
	 */
	public function login(Authenticatable $user, $remember = false) {
		$ticket = new Ticket();
		$user->oldTicket = getTicket();
		$ticket->closeTicket();
		$this->updateSession($user->getAuthIdentifier());

		// If the user should be permanently "remembered" by the application we will
		// queue a permanent cookie that contains the encrypted copy of the user
		// identifier. We will then decrypt this later to retrieve the users.
		if ($remember) {
			$this->ensureRememberTokenIsSet($user);

			$this->queueRecallerCookie($user);
		}

		// If we have an event dispatcher instance set we will fire an event so that
		// any listeners will hook into the authentication events and run actions
		// based on the login and logout events fired from the guard instances.
		$this->fireLoginEvent($user, $remember);

		$this->setUser($user);
	}

	/**
	 * Get the currently authenticated user.
	 *
	 * @return \Illuminate\Contracts\Auth\Authenticatable|null
	 */
	public function user(){
		if ($this->loggedOut) 	return;

		// If we've already retrieved the user for the current request we can just
		// return it back immediately. We do not want to fetch the user data on
		// every call to this method because that would be tremendously slow.
		if (! is_null($this->user)) return $this->user;

		$id = $this->session->get($this->getName());

		// First we will try to load the user using the identifier in the session if
		// one exists. Otherwise we will check for a "remember me" cookie in this
		// request, and if one exists, attempt to retrieve the user using that.
		if (! is_null($id) && $this->user = $this->provider->retrieveById($id))
			{}//$this->fireAuthenticatedEvent($this->user);
			

		// If the user is null, but we decrypt a "recaller" cookie we can attempt to
		// pull the user data on that cookie which serves as a remember cookie on
		// the application. Once we have a user we can return it to the caller.
		if (is_null($this->user) && ! is_null($recaller = $this->recaller())) {
			$this->user = $this->userFromRecaller($recaller);

			if ($this->user) {
				$this->updateSession($this->user->getAuthIdentifier());

				$this->fireLoginEvent($this->user, true);
			}
		}
		if (! is_null($id) && is_null($this->user) ){
			$this->fireAuthenticatedEvent($this->user);
			$oldTicket = getTicket();
			$this->session->invalidate();
			$ticket = new Ticket();
			$ticket->closeTicket( $id,  $oldTicket );
		}
		return $this->user;
	}
	
}
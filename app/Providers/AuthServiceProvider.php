<?php

namespace App\Providers;

use Illuminate\Hashing\BcryptHasher ;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Auth;
use App\Providers\KonsomGuard;
use App\Providers\KonsomProvider;
use App\Providers\KonsomHasher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Session\Store;
class AuthServiceProvider extends ServiceProvider{
  /**
   * The policy mappings for the application.
   *
   * @var array
   */
  protected $policies = [
      'App\Model' => 'App\Policies\ModelPolicy',
  ];

  /**
   * Register any authentication / authorization services.
   *
   * @return void
   */
  public function boot()    {
    $this->registerPolicies();
    // add custom guard provider
    Auth::provider('konsomProvider', function ($app, array $config) {
      return new KonsomProvider( new KonsomHasher(), $config['model'], $app['config']['amqp.defaults.host'],$app['config']['amqp.defaults.port'],$app['config']['amqp.defaults.user'],$app['config']['amqp.defaults.password'] );
    });
    
    // add  guard
    Auth::extend('konsomGuard', function ($app, $name, array $config) {
        $guard = new KonsomGuard('name', Auth::createUserProvider($config['provider']), $app['session.store'], $app->make('request'));

        // When using the remember me functionality of the authentication services we
        // will need to be set the encryption instance of the guard, which allows
        // secure, encrypted cookie values to get generated for those cookies.
        if (method_exists($guard, 'setCookieJar')) 
            $guard->setCookieJar($this->app['cookie']);

        if (method_exists($guard, 'setDispatcher')) 
            $guard->setDispatcher($this->app['events']);

        if (method_exists($guard, 'setRequest')) 
            $guard->setRequest($this->app->refresh('request', $guard, 'setRequest'));

        return $guard;
    });
  }
}

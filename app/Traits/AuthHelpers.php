<?php

namespace App\Traits;

use Illuminate\Auth\Events\Registered;
use App\Providers\KonsomHasher;
use App\Providers\KonsomUser;
use App\Models\User;
use App\Models\Ticket;

trait AuthHelpers{
    /**
     * Авторизация из смежной системы.
     *
     * @param  array  $data
     * @param  \App\Providers\KonsomGuard  $guard
     * @return \App\Providers\KonsomUser
     */
    protected function dexSystemAuth($data)  {
        $hrefBack=session()->get('hrefBackAuth');
        $hrefBack=nvl($hrefBack, env('APP_URL').'user');

        if( empty(User::where('login',$data['login'])->where('user_system', $data['user_system'] )->first()) ){
            $user= $this->createUser($data,$this->guard());
            event(new Registered($user ));
        }
        else 
            $user=  $this->guard()->initUser($data);
        $this->guard()->login($user);
        (new Ticket())->createTicket();

        return  redirect($hrefBack);
    }
    /**
     * Создание пользователя.
     *
     * @param  array  $data
     * @param  \App\Providers\KonsomGuard  $guard
     * @return \App\Providers\KonsomUser
     */
    protected function createUser($data,$guard)  {
        $hasher = new KonsomHasher();
        User::create([
            'firstname' => $data['firstname'],
            'lastname' => $data['lastname'],
            'login' => $data['login'],
            'password' => $hasher->make($data['password']),
            'name' => $data['lastname'] .' '.$data['firstname'],
            'systemLanguage' =>'ru',
            'created_at' =>date("Y-m-d H:i:s", time()),
            'email1' =>$data['login'],
            'avatar' =>nvl($data['avatar'],null),
            'user_system' =>nvl($data['user_system'],config('app.name')),
        ])->save();
        return $guard->initUser($data);
    }
}

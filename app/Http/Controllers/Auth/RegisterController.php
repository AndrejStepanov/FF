<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Auth;
use App\Models\Ticket;
use App\Traits\AuthHelpers;

class RegisterController extends Controller{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers,AuthHelpers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected function redirectTo()  {
        session()->put('url.intended', '/sucsess');
        $ticket = new Ticket();
        $ticket->createTicket();
        return '/sucsess';
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()    {
        $this->middleware('guest');
    }

    
    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)    {
        $data=$request->all();
        $this->validator($data)->validate();
        if (count(User::where('login', $data['login'])->first())>0)
            return error('Ошибка при регистрации','Пользователь с таким электронным адресом уже существует!');

        event(new Registered($user = $this->create($data)));
        
        $this->guard()->login($user);

        return $this->registered($request, $user) ?: redirect($this->redirectPath());
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)    {
        return Validator::make($data, [
            'login' => 'required|email|max:255',
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'password' => 'required|string|confirmed|min:6',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Providers\KonsomUser
     */
    protected function create(array $data)    {
        return $this->createUser($data,$this->guard());

    }
}

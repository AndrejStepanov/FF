<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use App\Providers\KonsomHasher;

class RegisterController extends Controller
{
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

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/sucsess';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    
    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $data=$request->all();
        $this->validator($data)->validate();
        if (count(User::where('login', $data['login'])->first())>0)
            return error('Ошибка при регистрации','Пользователь с таким логином уже существует!');
         if (count(User::where('name', $data['name'])->first())>0)
            return error('Ошибка при регистрации','Пользователь с таким именем уже существует!');

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
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'login' => 'required|string|max:255',
            'password' => 'required|string|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        $hasher = new KonsomHasher();
        return User::create([
            'name' => $data['name'],
            'login' => $data['login'],
            'password' => $hasher->make($data['password']),
        ]);
    }
}

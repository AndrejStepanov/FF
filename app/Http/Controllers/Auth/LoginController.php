<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Session\Store as SessionStore;
use App\Models\Ticket;
use App\Traits\AuthHelpers;
use Socialite;

class LoginController extends Controller{

    public function redirectToProviderVKontakte(\Illuminate\Http\Request $request){
        $data=$request->all();
        if($data['hrefBack'])
            session()->put('hrefBackAuth', $data['hrefBack']);
        else
            session()->forget('hrefBackAuth');
        return Socialite::driver('vkontakte')->redirect();
    }

    public function handleProviderCallbackVKontakte(){
        $userDex = Socialite::driver('vkontakte')->stateless()->user();
        $data =[
            'firstname'=> $userDex->user['first_name'],
            'lastname'=> $userDex->user['last_name'],
            'login'=> $userDex->user['id'],
            'password'=> $userDex->user['id'],
            'avatar'=> $userDex->avatar,
            'user_system'=>'vkontakte',
        ];
        return $this->dexSystemAuth($data);
    }

    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */
    use AuthenticatesUsers,AuthHelpers;
    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected function redirectTo()  {
        session()->put('url.intended', '/sucsess');
        $ticket = new Ticket();
        $ticket->createTicket();
        return '/sucsess';
    }

    public function username() {
      return 'login';
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(\Illuminate\Http\Request $request) {    
        $userId = Auth::user()->id;
        $oldTicket = getTicket();
        $this->guard()->logout();
        $request->session()->invalidate();
        $ticket = new Ticket();
        $ticket->closeTicket( $userId,  $oldTicket );
        return redirect('/sucsess');
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()  {
        $this->middleware('guest')->except('logout');
    }
}

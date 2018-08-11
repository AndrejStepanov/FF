<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\Ticket;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class LoginController extends Controller
{
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
  
    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected function redirectTo()
    {
        Ticket::insert(array(
            'input_date'  => date("Y-m-d H:i:s"),
            'finish_date' => date("Y-m-d H:i:s",time()+ ( 8 * 60 * 60)),
            'auth_date' => date("Y-m-d H:i:s"),
            'uptime' => date("Y-m-d H:i:s"),
            'cnt_attempts' => 0,
            'user_id' => Auth::user()->id,
            'user_name' => Auth::user()->name,
            'session_id' => session_id(),
            'IP' => Request::ip(),
            'Client' => Request::server('HTTP_USER_AGENT'),
            'is_root'   => Auth::user()->is_root,
            'allow_objects'=>null,
          ));
        return '/sucsess';
    }

    public function username()
    {
      return 'login';
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(\Illuminate\Http\Request $request)
    {
        $this->guard()->logout();

        $request->session()->invalidate();

        return redirect('/sucsess');
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}

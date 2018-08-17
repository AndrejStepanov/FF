<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\Ticket;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Session\Store as SessionStore;

class LoginController extends Controller{
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
    public $userId;
    public $sysId;
    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected function redirectTo()  {
        session()->put('url.intended', '/sucsess');
        $ticket = new Ticket();
        if($this->userId || $this->sysId)
            $ticket->closeTicket(session()->getId(), $this->sysId, $this->userId );
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
        $this->guard()->logout();
        $ticket = new Ticket();
        $ticket->closeTicket(session()->getId(), $this->sysId, $this->userId  );
        $request->session()->invalidate();
        return redirect('/sucsess');
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()  {
        $this->userId = Auth::check()? Auth::user()->userId:null;
        $this->sysId = Auth::check()? Auth::user()->id:null;
        $this->middleware('guest')->except('logout');
    }
}

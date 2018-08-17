<?php

namespace App\Models;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;
use App\Events\AuthChange ;

class Ticket extends Model{
    protected $table = '_tickets';
    //
    public  function closeTicket($sessionId, $sysId, $userId){
        $this->where('session_id',$sessionId ) ->where('input_date','<=', date("Y-m-d H:i:s"))->where('finish_date','>=', date("Y-m-d H:i:s"))->where('finish_date','>=', date("Y-m-d H:i:s"))
            ->update(['finish_date' => date("Y-m-d H:i:s",time()-  1), 'logout_date' => date("Y-m-d H:i:s",time()-  1)]);
        event(new AuthChange(json_encode([ 'type'=> 'close', 'sysId'=>$sysId, 'userId'=>$userId ])));
    }
    
    public  function createTicket(){
        $this->insert(array(
            'input_date'  => date("Y-m-d H:i:s",Auth::user()->dateSt),
            'finish_date' => date("Y-m-d H:i:s",Auth::user()->dateFn),
            'auth_date' => date("Y-m-d H:i:s",Auth::user()->dateSt),
            'cnt_attempts' => 0,
            'sys_id' => Auth::user()->id,
            'user_id' => Auth::user()->userId,
            'user_name' => Auth::user()->name,
            'session_id' => session()->getId(),
            'IP' => Request::ip(),
            'Client' => Request::server('HTTP_USER_AGENT'),
            'is_root'   => Auth::user()->isRoot,
            'allow_objects'=>null,
            'storage'=>Auth::user()->storage,
            'timestamps'=>Auth::user()->timestamps,
            'email'=>Auth::user()->email,
        ));
        Auth::user()->save();
        event(new AuthChange(json_encode([ 'type'=> 'open', 'sysId'=>Auth::user()->id,'userId'=>Auth::user()->userId, 'name'=>Auth::user()->name ])));
    }
}

<?php
namespace App\Models;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;
use App\Events\AuthChange;

class Ticket extends Model{
    protected $table = '_tickets';
    //
    public  function closeTicket( $userId=0, $oldTicket=0){
        $this->whereIn('session_id',[$oldTicket.'',getTicket()] ) ->where('input_date','<=', date("Y-m-d H:i:s"))->where('finish_date','>=', date("Y-m-d H:i:s"))
            ->update(['finish_date' => date("Y-m-d H:i:s",time()-  1), 'logout_date' => date("Y-m-d H:i:s",time()-  1)]);
        if($userId>0)
            event(new AuthChange([ 'type'=> 'close', 'userId'=>$userId, 'oldTicket'=>$oldTicket, 'newTicket'=>getTicket() ]));
    }
    
    public  function createTicket(){
        Auth::user()->initForLogin();
        $this->insert(array(
            'input_date'  => date("Y-m-d H:i:s",Auth::user()->dateSt),
            'finish_date' => date("Y-m-d H:i:s",Auth::user()->dateFn),
            'auth_date' => date("Y-m-d H:i:s",Auth::user()->dateSt),
            'cnt_attempts' => 0,
            'user_id' => Auth::user()->id,
            'user_name' => Auth::user()->name,
            'session_id' => getTicket(),
            'IP' => Request::ip(),
            'Client' => Request::server('HTTP_USER_AGENT'),
            'is_root'   => Auth::user()->isRoot,
            'allow_objects'=>null,
            'storage'=>Auth::user()->storage,
            'timestamps'=>Auth::user()->timestamps,
        ));
        Auth::user()->save();
        event(new AuthChange([ 'type'=> 'open', 'userId'=>Auth::user()->id, 'name'=>Auth::user()->name, 'isRoot'=>Auth::user()->isRoot, 'oldTicket'=>Auth::user()->oldTicket,'avatar'=>Auth::user()->avatar, 'newTicket'=>getTicket() ]));
    }
}

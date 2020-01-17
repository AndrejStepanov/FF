<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class DataInfo extends Event implements ShouldBroadcast{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $data;
    public $type;
    public $callback;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($data,$request)    {
        $this->data=$data;
        $this->type=$request['type'];
        $this->callback=$request['callback'];
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()    {
        return [$this->callback];
    }
	public function broadcastAs()	{
		return $this->type;
	}
}

<?php
namespace App\Services\Queues;
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;
 
class AmqpQueue {
  private $connection;
  private $channel;
  private $callback_queue;
  private $response;
  private $corr_id;
     
  public function __construct($host, $port, $login, $password) {
    $this->connection = new AMQPStreamConnection($host, $port, $login, $password);
    $this->$channel = $this->$connection->channel();
    list($this->callback_queue, ,) = $this->channel->queue_declare(  "",  false,  false,  true,  false  );
    $this->channel->basic_consume($this->callback_queue,'',false,false,false,false,array($this,'onResponse')  );
  }
  
  public function onResponse($rep) {
    if ($rep->get('correlation_id') == $this->corr_id)  
      $this->response = $rep->body;   
  }

  public function call($n, $queueName, $queueExchange="") {
    $this->response = null;
    $this->corr_id = uniqid();

    $msg = new AMQPMessage((string)$n,  array('correlation_id' => $this->corr_id, 'reply_to' => $this->callback_queue   )    );
    $this->channel->basic_publish($msg, $queueExchange, $queueName);
    while (!$this->response) 
        $this->channel->wait();
    return $this->response;
  }
}
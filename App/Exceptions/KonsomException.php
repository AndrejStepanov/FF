<?php
namespace App\Exceptions;

use Exception;

class KonsomException extends Exception{
	 
	protected $title;
	protected $code;
	public function __construct($title, $message,$code = 400)	{
		$this->title=$title;
		$this->code=$code;		
		parent::__construct($message);
	}
	
   public function report()    {
		\Log::debug($this->title.' - '. $this->message.' - '.$this->code.'
		'. $this->getTraceAsString());
	}
	
    /**
     * Render an exception into a response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $e
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function getTitle(){
		return $this->title;
	}
}
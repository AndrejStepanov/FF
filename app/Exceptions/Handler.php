<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Illuminate\Support\Facades\Request;
use Illuminate\Session\TokenMismatchException;
use Symfony\Component\HttpKernel\Exception\HttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
		TokenMismatchException::class,
		HttpException::class
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

	/**
	 * Render an exception into an HTTP response.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Exception  $exception
	 * @return \Illuminate\Http\Response
	 */
	public function render($request, Throwable $exception){
		if(!$request->expectsJson())
			return parent::render($request, $exception);
		$title='Системная ошибка';
		$code=400;
		if (method_exists($exception, 'getTitle')) 
			$title = $exception->getTitle();
		if ($exception instanceof \App\Exceptions\KonsomException)  
			$code=$exception->getCode();
		return makeErrResponse(array('id'=> rand(), 'title'=>$title, 'message'  => $exception->getMessage(), 'file'=>$exception->getFile(), 'line'=>$exception->getLine(), 'trace'=> json_encode($exception->getTrace()),   ), $code);
	}
	/**
	 * Convert an authentication exception into a response.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Illuminate\Auth\AuthenticationException  $exception
	 * @return \Illuminate\Http\Response
	 */
	protected function unauthenticated( $request, \Illuminate\Auth\AuthenticationException  $exception)	{
		return $request->expectsJson()
					? response()->json(['message' => $exception->getMessage()], 401)
					: redirect()->guest(route('Авторизация', $parameters=['auth_href_back'=>Request::url().'?'.http_build_query( Request::query() ) ] ));
	}
}

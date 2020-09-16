<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;
use App\Models\Objects;
use App\Models\ObjLink;
use App\Models\Tree;
class BaseController extends Controller{
	public $Objects;
	public $ObjLink;
	public $Tree;
	
	public function __construct(){
		$this->Objects=(new Objects())->getTable();
		$this->ObjLink=(new ObjLink())->getTable();
		$this->Tree=(new Tree())->getTable();
	}
	/**
	 * success response method.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function sendResponse($result, $message)
	{
	$response = [
			'success' => true,
			'data'    => $result,
			'message' => $message,
		];
		return response()->json($response, 200);
	}
	/**
	 * return error response.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function sendError($error, $errorMessages = [], $code = 404)
	{
	$response = [
			'success' => false,
			'message' => $error,
		];
		if(!empty($errorMessages)){
			$response['data'] = $errorMessages;
		}
		return response()->json($response, $code);
	}
}
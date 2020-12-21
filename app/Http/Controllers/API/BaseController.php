<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;
class BaseController extends Controller{
	public $MainModelTable, $MainModel;

	public function registerMainModel($model){
		$this->MainModel=$model;
		$this->MainModelTable=$model->getTable();
	}
	/**
	 * success response method.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function sendResponse($result, $message)	{
		$response = ['success' => true, 'data' => $result, 'message' => $message,	];
		return response()->json($response, 200);
	}
	/**
	 * return error response.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function sendError($error, $errorMessages = [], $code = 404)	{
		$response = [ 'success' => false, 'message' => $error, 	];
		if(!empty($errorMessages))
			$response['data'] = $errorMessages;
		return response()->json($response, $code);
	}
	/**
	 * для окон редактирвоания
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function data(Request $request)	{
		$input = $request->all();
		$filter=isset($input['filter'])?json_decode($input['filter'], true)  :[];
		if(empty($filter ['id']) )
			throw new \App\Exceptions\KonsomException( 'Некорректные данные','Не получен идентификатор записи!');
		$result = $this->MainModel::select( $this->MainModelTable.'.*')
			->where($this->MainModelTable.'.id', '=', $filter ['id'])
			->get();
		return $this->sendResponse($result->toArray(), 'data retrieved successfully.');
	}
}
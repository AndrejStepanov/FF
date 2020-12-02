<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\testArm;
use App\Models\User;
use Validator;
class TestArmController extends BaseController{
	public function __construct(){
		$this->testArms=(new testArm())->getTable();
		$this->Users=(new User())->getTable();
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request)	{
		 $testArms = 
			testArm::select( $this->testArms.'.*', 'u1.name as user_name')
				->LeftJoin($this->Users.' as u1', 'u1.id', '=', $this->testArms.'.user_id')
			//->where('o1.obj_path', 'like', 'Тестовая система%')
			//->orderBy('obj_path')
			->get();
		return $this->sendResponse($testArms->toArray(), 'TestArms retrieved successfully.');
	}
	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)	{
		$input = $request->all();
		/*$validator = Validator::make($input, [
			'name' => 'required',
			'detail' => 'required'
		]);
		if($validator->fails()){
			return $this->sendError('Validation Error.', $validator->errors());       
		}*/
		$input['user_id'] = Auth::user()->id; 
		$testArm = TestArm::create($input);
		return $this->sendResponse($testArm->toArray(), 'TestArm created successfully.');
	}
	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show($id)	{
		$testArm = TestArm::find($id);
		if (is_null($testArm)) 
			return $this->sendError('TestArm '.$id.' not found.');
		return $this->sendResponse($testArm->toArray(), 'TestArm retrieved successfully.');
	}
	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, TestArm $testArm)	{
		$input = $request->all();
		/*$validator = Validator::make($input, [
			'name' => 'required',
			'detail' => 'required'
		]);
		if($validator->fails()){
			return $this->sendError('Validation Error.', $validator->errors());       
		}*/

		$testArm->attInt1 = $input['attInt1'];
		$testArm->attInt2 = $input['attInt2'];
		$testArm->attNum1 = $input['attNum1'];
		$testArm->attNum2 = $input['attNum2'];
		$testArm->attDate1 = $input['attDate1'];
		$testArm->attDate2 = $input['attDate2'];
		$testArm->user_id = Auth::user()->id;
		$testArm->save();
		return $this->sendResponse($testArm->toArray(), 'TestArm updated successfully.');
	}
	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(TestArm $testArm)	{
		$testArm->delete();
		return $this->sendResponse($testArm->toArray(), 'TestArm deleted successfully.');
	}
}
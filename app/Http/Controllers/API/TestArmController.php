<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\testArm;
use App\Models\User;
use Validator;
use Auth;
class TestArmController extends BaseController{
	public function __construct(){
		$this->testArms=(new testArm())->getTable();
		$this->Users=(new User())->getTable();
		parent::registerMainModel(new testArm());
	}
	/**
	 * Главное отображение
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request)	{
		$input = $request->all();
		sleep(3);
		$filter=isset($input['filter'])?json_decode($input['filter'], true)  :[];
		$testArms = 
			$this->MainModel::select( $this->testArms.'.*', 'u1.name as user_name')
				->LeftJoin($this->Users.' as u1', 'u1.id', '=', $this->testArms.'.user_id');
		if(count($filter) >0)
			if($filter ['id']!='')
				$testArms=$testArms->where($this->testArms.'.id', '=', $filter ['id']);
		$testArms=$testArms->orderBy($this->testArms.'.id')->get();
		return $this->sendResponse($testArms->toArray(), 'TestArms retrieved successfully.');
	}
	/**
	 * Добавить запись
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)	{
		$input = $request->all();
		$input['user_id'] = Auth::user()->id; 
		$testArm = $this->MainModel::create($input);
		return $this->sendResponse($testArm->toArray(), 'TestArm created successfully.');
	}
	/**
	 * Обновить
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request)	{
		$input = $request->all();
		$input['user_id'] = Auth::user()->id; 
		$id=$input['id'];
		unset($input['id']);
		$this->MainModel::whereIn('id', $id)
			->update($input );
		return $this->sendResponse(null, 'TestArm updated successfully.');
	}
	/**
	 * Удаление
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Request $request)	{
		$input = $request->all();
		$this->MainModel::whereIn('id', $input['id'])
			->delete();
		return $this->sendResponse(null, 'TestArm deleted successfully.');
	}
}
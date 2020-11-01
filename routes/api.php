<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->match(['get', 'post'],'/user', function (Request $request) {
	return $request->user();
});
Route::middleware('auth:api')->match(['get', 'post'],'/user/logout', function (Request $request) {
	$token = Auth::user()->token();
	$token->revoke();
	return 'sucsess';
});
Route::post('systemLinks','API\SystemLinksController@index')->middleware('auth:api');

Route::middleware('auth:api')->group( function () {  Route::resource('TestArm', 'API\TestArmController'); });

Route::post('data_command','DataCommandController@reciveCommand')->middleware('auth:api');
Route::post('socet_command','SocetCommandController@reciveCommand')->middleware('auth:api');
//Route::middleware('auth:api')->match(['get', 'post'],'/systemLinks', 'API\SystemLinksController');

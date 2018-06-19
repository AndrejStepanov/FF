<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/sucsess', function () { echo 'sucsess';} );
Auth::routes();
Route::get('/', function () { return view('simple')->with('app_js', 'Main');});
Route::get('/Авторизация', function () { return view('auth');});
Route::get('/Работа_с_объектами', function () { return view('simple')->with('app_js', 'Obj_tree');});
Route::post('/socet_command', 'SocetCommandController@reciveCommand')->middleware('auth');
Route::resource('items', 'ItemController');

Route::get('/home', 'HomeController@index')->name('home');

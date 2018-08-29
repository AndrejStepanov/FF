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
Route::get('/Авторизация', ['as' => 'Авторизация', function () { return view('simple')->with('app_js', 'Auth'); }]);
Route::get('/Регистрация', ['as' => 'Регистрация', function () { return view('simple')->with('app_js', 'Register'); }]);
Route::get('/', function () { return view('simple')->with('app_js', 'Main');});
Route::get('/Работа_с_объектами', function () { return view('simple')->with('app_js', 'Obj-Tree');})->middleware('auth');
Route::get('/Просмотр_объектов', function () { return view('simple')->with('app_js', 'Obj-View');})->middleware('auth');
Route::post('/socet_command', 'SocetCommandController@reciveCommand')->middleware('auth');//сюда стучатся для получения данных компоненты
Route::post('/data_command', 'DataCommandController@reciveCommand')->middleware('auth');//запросы на добавление изменение удаление  данных
Route::get('/clear', function() {    Artisan::call('cache:clear');    Artisan::call('config:cache');    Artisan::call('view:clear');	Artisan::call('route:clear');    return "Кэш очищен.";});
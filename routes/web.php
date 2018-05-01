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
Route::get('/', function () { return view('welcome');});
Route::get('/Авторизация', function () { return view('auth');});
Route::resource('items', 'ItemController');

Route::get('/home', 'HomeController@index')->name('home');

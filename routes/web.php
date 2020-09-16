<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/clear', function() {    Artisan::call('cache:clear');    Artisan::call('config:cache');    Artisan::call('view:clear');	Artisan::call('route:clear');    return "Кэш очищен.";});
//все остальное летит в роутер vue
Route::get('/admin', function () { return view('admin');} ) ;
Route::get('/', 'SPAController@index')->where('any', '.*');
Route::get('/{any}', 'SPAController@index')->where('any', '.*');
Route::get('/{any}/{any1}', 'SPAController@index')->where('any', '.*');
Route::get('/{any}/{any1}/{any2}', 'SPAController@index')->where('any', '.*');
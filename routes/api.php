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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('present', 'DosenController@present');


Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

Route::group(['middleware' => 'auth:api'], function(){  
    // admin
        Route::group(['middleware' => 'admin'], function(){
        Route::get('dsn', 'DosenController@dosens');
        Route::get('matkuls', 'MatkulController@index');
        Route::get('dosenall', 'DosenController@dosenall');
        Route::post('matkul/create', 'MatkulController@create');
        Route::put('matkul/{matkul}', 'MatkulController@update');
        Route::delete('matkul/{matkul}', 'MatkulController@destroy');
        Route::get('mhs','MahasiswaController@index');
        Route::delete('user/{user}', 'MahasiswaController@destroy');
    });
    // route dsn
    Route::group(['middleware' => 'dosen'], function(){
        Route::get('dosen/matkuls/{user}', 'DosenController@index');
        Route::get('present/{mtkl_id}', 'DosenController@show');
    });    
});
Route::get('presentall', 'DosenController@pall');





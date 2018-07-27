<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('/users', 'CrudsController', [
    'except' => ['edit', 'show', 'store']
]);



Route::group([
    'namespace' => 'Api',
    'as' => 'api.'
], function () {
    Route::post('/login', 'UserController@login');
    Route::post('/register', 'UserController@register');
    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('/user/details', 'UserController@details');
    });
    Route::resource(
        'catalog',
        'CatalogController',
        ['except' => ['create', 'edit']]
    );
    Route::get('/catalog/sub/{subcatslug}', 'CatalogController@getCategory');
    Route::resource(
        'product',
        'ProductController',
        ['except' => ['create', 'edit']]
    );
    Route::resource(
        'packs',
        'PackingController',
        ['except' => ['create', 'edit']]
    );
    Route::resource(
        'search',
        'SearchController',
        ['except' => ['create', 'edit']]
    );
    Route::resource(
        'carousel',
        'CarouselController',
        ['except' => ['create', 'edit']]
    );
});
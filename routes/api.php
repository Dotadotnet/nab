<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\SearchController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('/{model}/all', [ApiController::class, 'all']);
Route::get('/{model}/{key}/{value}', [ApiController::class, 'get']);
Route::get('/search/{page}/{size}/{input}', [SearchController::class, 'search'])->name('search');
Route::get('/sentence/{input}', [SearchController::class, 'google'])->name('sentence');
Route::get('/all-category', [ApiController::class, 'allCategory'])->name('allCategory');
Route::get('/all/blog', [ApiController::class, 'blogAllApi']);
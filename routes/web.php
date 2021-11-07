<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\QueueController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    $id=DB::select("SHOW TABLE STATUS LIKE 'queues'");
    $next_id=$id[0]->Auto_increment;

    return Inertia::render('Index', [
        'nextqueue' => $next_id,
    ]);
});

// Professor
Route::post('/', [QueueController::class, 'requestQ'])->name('requestQ');
Route::get('/screen', [QueueController::class, 'screen'])->name('screen');


require __DIR__.'/auth.php';

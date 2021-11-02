<?php

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
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'nextqueue' => $next_id
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Professor
// Route::get('/submit', [Queue::class, 'index'])->name('submitQueue');
Route::post('/', [QueueController::class, 'requestQ'])->name('requestQ');


require __DIR__.'/auth.php';

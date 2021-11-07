<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\QueueController;
use Illuminate\Support\Facades\Route;

Route::get('/register', [RegisteredUserController::class, 'create'])
                ->middleware('admin')
                ->name('register');

Route::post('/register', [RegisteredUserController::class, 'store'])
                ->middleware('admin');

Route::get('/dashboard', [Controller::class, 'dashboard'])
                ->middleware('admin')
                ->name('dashboard');

Route::get('/reset', [Controller::class, 'reset'])
                ->middleware('admin')
                ->name('reset');

Route::get('/dashboard/{id}', [Controller::class, 'dashboardID'])
                ->middleware('auth')
                ->name('dashbaordID');

Route::get('/login', [AuthenticatedSessionController::class, 'create'])
                ->middleware('guest')
                ->name('login');

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
                ->middleware('guest');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
                ->middleware('auth')
                ->name('logout');

Route::get('/employee', [Controller::class, 'employee'])
                ->middleware('auth')
                ->name('employee');

Route::post('/employee', [QueueController::class, 'submit'])
                ->middleware('auth')
                ->name('submit');

Route::get('/employee/show', [Controller::class, 'show'])
                ->middleware('admin')
                ->name('show');

Route::get('/employee/{id}/edit', [Controller::class, 'edit'])
                ->middleware('admin')
                ->name('edit');

Route::put('/employee/{id}', [Controller::class, 'update'])
                ->middleware('admin')
                ->name('update');

<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Inertia::share('voice', function(){
        //     return session()->get('voice') ? session()->get('voice') : null;
        // });
        Inertia::share('alert', function(){
            return session()->get('alert') ? session()->get('alert') : null;
        });
        // $this->app->bind('path.public', function()
        // {
        //     return base_path('public_html');
        // });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}

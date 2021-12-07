<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class Guard
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // if (Auth::user() &&  Auth::user()->name == "guard") {
        //     return $next($request);
        // }
        if((Auth::user()->name == 'guard') && (($request->path() == "employee") || ($request->path() == "dashboard") || ($request->path() == "screen") || ($request->path() == "dashboard/".Auth::user()->id))){
            return Redirect::route('Home');
        }else{
            return $next($request);
        }
    }
}

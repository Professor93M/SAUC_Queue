<?php

namespace App\Http\Controllers;

use App\Models\Queue;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function emplyee(){
        return Inertia::render('Emplyee', [
            'queue' => Queue::select('queue')->where('updated_at', null)->first(),
            // 'name'  => Auth::user()->name,
            // 'PC'    => Auth::user()->id,
        ]);
    }
}

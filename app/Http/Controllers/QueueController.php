<?php

namespace App\Http\Controllers;

use App\Models\Queue;
use Inertia\Inertia;

class QueueController extends Controller
{
    public function requestQ(){
        Queue::create([
            'queue' => request('nextqueue')
        ]);
        return Inertia::location('/');
    }
}

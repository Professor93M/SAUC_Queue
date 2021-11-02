<?php

namespace App\Http\Controllers;

use App\Models\Queue;

class QueueController extends Controller
{
    public function requestQ(){
        Queue::create();
        return redirect()->back();
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Queue;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class QueueController extends Controller
{
    public function requestQ(){
        Queue::create([
            'queue' => request('nextqueue'),
        ]);
        return redirect()->back();
    }

    public function submit(Request $request){
        // $queue = Queue::find($request->id);
        $queue = Queue::firstWhere('updated_at', null);
        $queue->update([
            'users_id' => $request->user_id,
            'UPDATED_AT' => Carbon::now(),
        ]);
        return Inertia::location('/employee');
    }

    public function screen(){
        return Inertia::render('Screen', [
            'queue' => Queue::orderBy('updated_at', 'desc')->first()
        ]);
    }
}

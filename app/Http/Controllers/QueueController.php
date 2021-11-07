<?php

namespace App\Http\Controllers;

use App\Models\Queue;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
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
        $queue = Queue::firstWhere('updated_at', null);
        $queue->update([
            'users_id' => $request->id,
            'UPDATED_AT' => Carbon::now(),
        ]);
        return Redirect::route('employee')->with('voice', " على صاحب التسلسل " . $queue->queue . " مراجعة الحاسبة " . $request->id);
    }

    public function screen(){
        $queue = Queue::whereNotNull('updated_at')->orderBy('updated_at', 'desc')->first();
        return Inertia::render('Screen', [
            'queue' => $queue,
            'emp'   => User::findOrFail($queue->users_id)
        ]);
    }
}

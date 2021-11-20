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
        $lastUpdate = Queue::orderBy('updated_at','DESC')->first();
        if($lastUpdate->updated_at){
            if(($lastUpdate->updated_at)->addSeconds(10) <= now()){
                $queue->update([
                    'users_id' => $request->id,
                    'UPDATED_AT' => Carbon::now(),
                ]);
                return Redirect::back();
            }else{
                return Redirect::back()->with('alert', "يرجى الانتظار قليلا");
            }
        }else{
            $queue->update([
                'users_id' => $request->id,
                'UPDATED_AT' => Carbon::now(),
            ]);
            return Redirect::back();
        }
    }

    public function screen(){
        $queue = Queue::whereNotNull('updated_at')->orderBy('updated_at', 'desc')->first();
        if(isset($queue)){
            return Inertia::render('Screen', [
                'queue' => $queue,
                'queueCount' => Queue::where('updated_at', null)->count(),
                'emp'   => User::findOrFail($queue->users_id)
            ]);
        }else{
            return Inertia::render('Screen', [
                'queue' => null,
                'queueCount' => null,
                'emp'   => null
            ]);
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Queue;
use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function employee(){
        // dd(Queue::where('updated_at', null)->count());
        return Inertia::render('Employee', [
            // 'queue' => Queue::where('updated_at', null)->first(),
            'queueCount' => Queue::where('updated_at', null)->count(),
        ]);
    }

    public function dashboard(){
        $users = Queue::whereNotNull('updated_at')->with('users')->get();
        // dd($users);
        return Inertia::render('Dashboard', [
            'users' => $users,
        ]);
    }

    // public function submit(Request $request){
    //     $user = User::findOrFail($request->id);
    //     $user->update([

    //     ]);
    // }
}

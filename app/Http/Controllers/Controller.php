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
        return Inertia::render('Employee', [
            'queueCount' => Queue::where('updated_at', null)->count(),
        ]);
    }

    public function dashboard(){
        $query = Queue::query();
        if(request('date')){
            $users = $query->whereNotNull('updated_at')->whereDate('updated_at', '=', request('date'))->with('users')->orderBy('updated_at', 'desc')->get();
        }else{
            $users = $query->whereNotNull('updated_at')->with('users')->orderBy('updated_at', 'desc')->get();
        }
        return Inertia::render('Dashboard', [
            'users' => $users,
            'count' => $users->count(),
        ]);
    }

    public function dashboardID($id){
        if(intval($id) === Auth::user()->id){
            $queue = Queue::where('users_id', Auth::user()->id)->with('users')->orderBy('updated_at')->get();
        }elseif(Auth::user()->isAdmin){
            User::findOrFail($id);
            $queue = Queue::where('users_id', $id)->with('users')->orderBy('updated_at', 'desc')->get();
        }else{
            return abort(404);
        }
        return Inertia::render('Dashboard', [
            'users' => $queue,
            'count' => $queue->count(),
        ]);
    }

}

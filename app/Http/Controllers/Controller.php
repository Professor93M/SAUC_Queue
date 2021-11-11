<?php

namespace App\Http\Controllers;

use App\Models\Queue;
use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Validation\Rules;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function employee(){
        $last_user = Queue::whereNotNull('updated_at')->orderBy('updated_at', 'desc')->with('users')->first();

        return Inertia::render('Employee', [
            'queueCount' => Queue::where('updated_at', null)->count(),
            'queue' => Queue::where('updated_at', null)->orderBy('created_at')->limit(5)->get(['queue', 'created_at']),
            'last_user' => $last_user
        ]);
    }

    public function reset(){
        DB::table('queues')->truncate();
        return Redirect::route('dashboard');
    }

    public function dashboard(){
        $query = Queue::query();
        if(request('date')){
            $users = $query->whereNotNull('updated_at')->whereDate('updated_at', '=', request('date'))->with('users')->orderBy('updated_at', 'desc')->simplePaginate(20);
            $count = $query->whereNotNull('updated_at')->whereDate('updated_at', '=', request('date'))->with('users')->count();
        }else{
            $users = $query->whereNotNull('updated_at')->with('users')->orderBy('updated_at', 'desc')->simplePaginate(20);
            $count = $query->whereNotNull('updated_at')->with('users')->count();
        }
        return Inertia::render('Dashboard', [
            'users' => $users,
            'count' => $count,
        ]);
    }

    public function dashboardID($id){
        if(intval($id) === Auth::user()->id){
            $queue = Queue::where('users_id', Auth::user()->id)->with('users')->orderBy('updated_at')->simplePaginate(20);
            $count = Queue::where('users_id', Auth::user()->id)->with('users')->count();
        }elseif(Auth::user()->isAdmin){
            User::findOrFail($id);
            $queue = Queue::where('users_id', $id)->with('users')->orderBy('updated_at', 'desc')->simplePaginate(20);
            $count = Queue::where('users_id', $id)->with('users')->count();
        }else{
            return abort(404);
        }
        return Inertia::render('Dashboard', [
            'users' => $queue,
            'count' => $count,
        ]);
    }

    public function show(){
        return Inertia::render('Show', [
            'users' => User::all(),
        ]);
    }

    public function edit($id){
        $user = User::findOrFail($id);
        return Inertia::render('Edit', [
            'user' => $user,
        ]);
    }

    public function update(Request $request, $id){
        // dd($request->all());
        $user = User::findOrFail($id);
        if(($request->name !== $user->name) || ($request->email !== $user->email) || ($request->password !== $user->password) || ($request->isAdmin !== $user->isAdmin)){
            if($request->name !== $user->name){
                $request->validate([
                    'name' => 'required'
                    ],[
                    'name.required'        => 'يجب ادخال اسم الموظف',
                ]);
            }
            if($request->email !== $user->email){
                $request->validate([
                    'email' => 'required|unique:users|email'
                    ],[
                    'email.required'        => 'يجب ادخال البريد الالكتروني',
                    'email.unique'        => 'البريد الالكتروني مستخدم',
                    'email.email'        => 'البريد الالكتروني المدخل غير صالح',
                ]);
            }
            if($request->password !== $user->password && $request->password !== null){
                $request->validate([
                    'password' => ['required', 'confirmed', Rules\Password::min(8)],
                    ],[
                    'password.required'  => 'يجب ادخال كلمة المرور',
                    'password.confirmed' => 'كلمة المرور غير متطابقة',
                ]);
            }

            // dd(isset($request->password));
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'password' => !isset($request->password) ? $user->password : Hash::make($request->password),
            ]);
            return Redirect::route('show');
        }else{
            dd($request->all());

            return Redirect::route('show');
        }
    }

}

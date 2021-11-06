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
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
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
            $users = $query->whereNotNull('updated_at')->whereDate('updated_at', '=', request('date'))->with('users')->orderBy('updated_at', 'desc')->paginate(25);
        }else{
            $users = $query->whereNotNull('updated_at')->with('users')->orderBy('updated_at', 'desc')->paginate(25);
        }
        return Inertia::render('Dashboard', [
            'users' => $users,
            'count' => $users->count(),
        ]);
    }

    public function dashboardID($id){
        if(intval($id) === Auth::user()->id){
            $queue = Queue::where('users_id', Auth::user()->id)->with('users')->orderBy('updated_at')->paginate(25);
        }elseif(Auth::user()->isAdmin){
            User::findOrFail($id);
            $queue = Queue::where('users_id', $id)->with('users')->orderBy('updated_at', 'desc')->paginate(25);
        }else{
            return abort(404);
        }
        return Inertia::render('Dashboard', [
            'users' => $queue,
            'count' => $queue->count(),
        ]);
    }

    public function show(){
        return Inertia::render('Show', [
            'users' => User::all(),
        ]);
    }

    public function edit($id){
        $user = User::findOrFail($id);
        return Inertia::render('EditEmp', [
            'user' => $user,
        ]);
    }

    public function update(Request $request, $id){
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
                    // 'password'       => 'يجب ادخال على الاقل 8 حروف او رموز او ارقام',
                ]);
            }

            // dd(isset($request->password));
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'password' => !isset($request->password) ? $user->password : Hash::make($request->password),
            ]);
            return Redirect::route('employee')->with('success', 'تم تعديل بيانات المشرف بنجاح');
        }else{
            return Redirect::route('employee');
        }
    }

}

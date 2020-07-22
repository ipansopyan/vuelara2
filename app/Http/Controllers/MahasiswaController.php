<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\User;
use App\Matkul;
use Session;
use App\Present;

class MahasiswaController extends Controller
{
    public function index()
    {
        $mhs = User::where('role',1)
        ->orderBy('id','desc')
        ->paginate(10);
        return $mhs;
    }
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([
            'status'    => 'success'
        ],200);
    }


}

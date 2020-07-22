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


class MatkulController extends Controller
{
    public function index()
    {
        $matkuls = DB::table('matkuls')->join('users','matkuls.user_id' ,'=','users.id')
        ->select('matkuls.*','users.name')
        ->orderBy('id','desc')
        ->paginate(10);
        return $matkuls; 
    }
    public function create(Request $request)
    {
        $request->validate([
            'name_matkul'   => 'required|unique:matkuls|max:100',
            'user_id'       => 'required'
        ]);

        $matkul                 = new Matkul;
        $matkul->name_matkul    = $request->name_matkul;
        $matkul->user_id        = $request->user_id;
        $matkul->save();

        return response()->json(['status' => 'success'], 200);
    }
    public function update(Request $request, Matkul $matkul)
    {
        $request->validate([
            'name_matkul'   => 'required|max:100',
            'user_id'       => 'required'
        ]);

        $matkul->name_matkul    = $request->name_matkul;
        $matkul->user_id        = $request->user_id;
        $matkul->save();

        return response()->json([
            'data'  => $matkul,
            'status'=> 'success'
        ], 201);
    }
    public function destroy(Matkul $matkul)
    {
        $matkul->delete();
        return response()->json([
            'status'    => 'success'
        ],200);
    }
}

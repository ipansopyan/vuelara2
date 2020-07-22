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

class DosenController extends Controller
{
    public function index($user)
    {
        // $matkuls = User::find($user)->matkuls;
        $matkuls = User::find($user)->matkuls;
        return response()->json(['data'=> $matkuls]);
    }
    public function present(Request $request)
    {   
            $this->validate($request,[
                'mhs_id'    => 'required',
                'mtkl_id'    => 'required',
            ]);
    
            $mhs_id = $request->input('mhs_id');
            $mtkl_id= $request->input('mtkl_id');
            $prt    = $request->input('prt');
    
            $matkul = Matkul::find($mtkl_id);
            $user = User::find($mhs_id);
    
    
            $present = new Present([
                'mhs_id'    => $mhs_id,
                'mtkl_id'   => $mtkl_id,
                'prt'.$prt  => 1,
                'msg'   => 'percobaan'
            ]);
    
            $r_present = DB::table('presents')->where([
                'mtkl_id'   => $mtkl_id,
                'mhs_id'    => $mhs_id
            ])->first();
    
            if ($r_present != null ) {
               $result = DB::table('presents')
               ->where('id' , $r_present->id)
               ->update([
                    'prt'.$prt  =>1
                    ]);
                return response()->json([
                    "msg"   => "present updated",
                    "prt"   => $prt,
                    "matkul"   =>  $matkul->name_matkul,
                    'msg'   => 'berhasil',
                    'mahasiswa'   => $user->name,
    
                ], 200);
            }else {
                if ($present->save()) {
                    $response = [
                    "msg"   => "present updated",
                    "prt"   => $prt,
                    "matkul"   =>  $matkul->name_matkul,
                    'msg'   => 'berhasil',
                    'mahasiswa'   => $user->name,
                    ];
                    return response()->json($response, 200);
                }
            }
            return response()->json([
                'msg'   => 'error'
            ]);
    }
    public function show($mtkl_id)
    {
        // $present = Present::where('mtkl_id',$mtkl_id)->paginate(1);
        $presents = DB::table('presents')
        ->join('users','presents.mhs_id','=','users.id')
        ->join('matkuls','presents.mtkl_id','=','matkuls.id')
        ->select('presents.*','users.name','matkuls.name_matkul')
        ->where('mtkl_id',$mtkl_id)
        ->orderBy('id','desc')
        ->paginate(10);
        return $presents;
    }
    public function dosens()
    {
        $dsn = User::where('role',2)
        ->orderBy('id','desc')
        ->paginate(10);
        return $dsn;
    }
    public function dosenall()
    {
        $dsnall = User::where('role',2)
        ->orderBy('id','desc')->get();
        return $dsnall;
    }
    public function pall()
    {
        $pall = Present::all();
        return $pall;
    }
}

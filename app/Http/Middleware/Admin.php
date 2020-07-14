<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {   
        if (Auth::user() == null) {
            return abort(401, 'Maaf, anda tidak diizinkan mengakses halaman ini.');
        }

        if (Auth::user()->role == 3) {
            return $next($request);
        }

        return abort(401, 'Maaf, anda tidak diizinkan mengakses halaman ini.');
    }
}

<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class Dosen
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
        if (Auth::user()->role == 2) {
            return $next($request);
        }

        return abort(401, 'Maaf, anda tidak diizinkan mengakses halaman ini.');
    }
}

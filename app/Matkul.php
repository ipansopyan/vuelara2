<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Matkul extends Model
{
    protected $fillable = [
        'name'
    ];
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Queue extends Model
{
    use HasFactory;

    protected $fillable = ['users_id'];

    const UPDATED_AT = 'SERVED_AT';

    const SERVED_AT = NULL;

    public function user(){
        return $this->belongsTo(User::class);
    }

}
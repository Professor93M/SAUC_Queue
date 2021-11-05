<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Queue extends Model
{
    use HasFactory;

    protected $fillable = ['users_id', 'queue'];

    // const UPDATED_AT = 'SERVED_AT';

    // const UPDATED_AT = NULL;

    public function users(){
        return $this->belongsTo(User::class);
    }

    public function setUpdatedAt($value)
    {
      return NULL;
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class User extends Model {
    public $timestamps = false;

    protected $fillable = [
        'login',
        'password',
        'first_name',
        'last_name',
    ];

    public function fullName() : Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => $attributes['first_name'] . ' ' . $attributes['last_name'],
        );
    }
}
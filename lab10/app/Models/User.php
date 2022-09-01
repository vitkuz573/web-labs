<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static whereLogin(mixed $login)
 * @method static firstOrCreate(array $array)
 */
class User extends Model {
    public $timestamps = false;

    protected $fillable = [
        'login',
        'password',
        'first_name',
        'last_name',
    ];
}
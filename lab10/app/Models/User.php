<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @method static whereLogin(mixed $login)
 * @method static firstOrCreate(array $array)
 * @method static find(mixed $id)
 */
class User extends Model {
    protected $fillable = [
        'login',
        'password',
        'first_name',
        'last_name',
    ];

    protected $casts = [
        'is_admin' => 'boolean',
    ];

    public function orders() : HasMany
    {
        return $this->hasMany(Order::class);
    }

    public function fullName() : Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => $attributes['first_name'] . ' ' . $attributes['last_name'],
        );
    }
}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @method static create(array $array)
 * @method static find(string $id)
 */
class Order extends Model
{
    protected $fillable = [
        'user_id',
        'items',
    ];

    protected $casts = [
        'items' => 'array'
    ];

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function totalPrice() : Attribute
    {
        return Attribute::make(
            get: function ($value, $attributes) {
                dd($attributes['items']);
                $items = array_keys(json_decode($attributes['items']));

                $prices = Product::find($items)->pluck('price');
                $quantities = array_values(json_decode($attributes['items']));

                $sum = 0;

                for ($i = 0; $i < count($prices); $i++) {
                    $sum += $prices[$i] * $quantities[$i];
                }
            },
        );
    }
}
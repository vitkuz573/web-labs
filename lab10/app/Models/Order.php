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
        'user_ip',
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
                $data = json_decode(json_decode($attributes['items']), true);

                $items = array_keys($data);

                $prices = Product::find($items)->pluck('price')->toArray();
                $quantities = array_values($data);

                $data_items = array_combine($prices, $quantities);

                $result = 0;

                foreach ($data_items as $price => $quantity) {
                    $result += $price * $quantity;
                }

                return $result;
            },
        );
    }
}
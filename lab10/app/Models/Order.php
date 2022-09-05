<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @method static create(array $array)
 * @method static find(string $id)
 * @method static whereUserId(mixed $id)
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

    public function purchases() : HasMany
    {
        return $this->hasMany(Purchase::class);
    }

    public function totalPrice() : Attribute
    {
        return Attribute::make(
            get: function ($value, $attributes) {
                $order = Order::find($attributes['id']);

                $total_price = 0;

                foreach ($order->purchases as $purchase) {
                    $total_price += $purchase->price * $purchase->amount;
                }

                return $total_price;
            },
        );
    }
}
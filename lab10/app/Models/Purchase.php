<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @method static whereOrderId(string $id)
 * @method static create(array $array)
 */
class Purchase extends Model {
    protected $fillable = [
        'order_id',
        'product_id',
        'price',
        'amount',
    ];

    public function product() : BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Purchase extends Model {
    protected $fillable = [
        'order_id',
        'product_id',
        'price',
        'amount',
    ];

    public function product() : HasMany
    {
        return $this->hasMany(Product::class);
    }
}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @method static find(string $id)
 * @method static create(array $array)
 * @method static paginate(int $int)
 * @method static whereLike(string $string, mixed $term)
 */
class Product extends Model {
    protected $fillable = [
        'image',
        'name',
        'description',
        'price',
        'in_stock',
    ];

    public function purchases() : BelongsTo
    {
        return $this->belongsTo(Purchase::class);
    }
}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
}
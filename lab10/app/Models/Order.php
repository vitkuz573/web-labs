<?php

namespace App\Models;

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
}
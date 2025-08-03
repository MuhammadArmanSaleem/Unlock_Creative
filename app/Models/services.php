<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class services extends Model
{
    /** @use HasFactory<\Database\Factories\ServicesFactory> */
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'image',
        'reacts',
        'views',
    ];

    public function categories()
    {
        return $this->hasMany(Categories::class, 'service_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class categories extends Model
{
    /** @use HasFactory<\Database\Factories\CategoriesFactory> */
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'service_id',
        'image',
    ];
    public function service()
    {
        return $this->belongsTo(Services::class);
    }

    // In App\Models\Categories

    public function projects()
    {
        return $this->hasMany(Projects::class, 'category_id'); // <-- Ensure the foreign key is correct here
    }

}

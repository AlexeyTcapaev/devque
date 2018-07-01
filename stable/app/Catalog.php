<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Catalog extends Model
{
    use Sluggable;
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
    protected $fillable = ['name', 'catalog_id', 'description', 'slug'];

    public function Products()
    {
        return $this->hasMany(Product::class);
    }
    public function Subcategories()
    {
        return $this->hasMany(Catalog::class);
    }
}

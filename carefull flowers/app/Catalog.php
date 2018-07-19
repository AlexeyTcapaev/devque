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

    public function products()
    {
        return $this->hasMany(Product::class);
    }
    public function childrens()
    {
        return $this->hasMany(Catalog::class);
    }
}

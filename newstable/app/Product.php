<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
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
    protected $fillable = ['options', 'name', 'parent', 'description', 'slug', 'currentprice', 'oldprice', 'catalog_id'];

    public function category()
    {
        return $this->hasOne(Catalog::class);
    }
    public function uploadImage($image)
    {
        if ($image == null) {
            return;
        }
        if ($this->image != null)
            Storage::delete('public/uploads/' . $this->image);
        $filename = str_random(10) . '.' . $image->extension();
        $image->storeAs('public/uploads', $filename);
        $this->image = $filename;
        $this->save();
    }
    public function remove()
    {
        Storage::delete('public/uploads/' . $this->image);
        $this->delete();
    }
    public static function add($fields)
    {
        $product = Product::create($fields->all());
        return $product;
    }
}

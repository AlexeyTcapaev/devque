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
    protected $fillable = ['name', 'parent', 'description', 'slug', 'currentprice', 'oldprice', 'catalog_id'];

    public function category()
    {
        return $this->hasOne(Category::class);
    }
    public function uploadImage($image)
    {
        if ($image == null) {
            return;
        }
        if ($this->image != null)
            Storage::delete('uploads/' . $this->image);
        $filename = str_random(10) . '.' . $image->extension();
        $image->storeAs('uploads', $filename);
        $this->image = $filename;
        $this->save();
    }
    public function remove()
    {
        Storage::delete('uploads/' . $this->image);
        $this->delete();
    }
    public static function add($fields)
    {
        $product = Product::create($fields->all());
        /*$product = new static;
        $product->fill((array)$fields);
        $product->save();*/
        return $product;
    }
}

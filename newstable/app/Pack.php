<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Pack extends Model
{
    protected $fillable = ['name', 'price'];
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
        $product = Pack::create($fields->all());
        return $product;
    }
}

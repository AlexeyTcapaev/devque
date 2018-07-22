<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Options extends Model
{
    protected $fillable = ['option', 'price', 'product_id'];
    public static function add($fields, $id)
    {
        $options = [];
        foreach ($fields as $option) {
            $option->product_id = $id;
            array_push($options, Options::create((array)$option));
        }
        return $options;
    }
    public static function findAndUpdate($fields, $id)
    {
        $options = [];
        foreach ($fields as $option) {
            if (property_exists($option,'id')){
                $option->update($option->all());
                array_push($options, Options::create((array)$option));
            } else {
                $option->product_id = $id;
                array_push($options, Options::create((array)$option));
            }
        }
        return $options;

    }
}

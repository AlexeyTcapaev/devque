<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IndexConfig extends Model
{
    protected $table = 'indexconfig';
    protected $fillable = [ 'catalog_id'];
    public function category()
    {
        return $this->hasOne(Catalog::class, 'id','catalog_id');
    }
}

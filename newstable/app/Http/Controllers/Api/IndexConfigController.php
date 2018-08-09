<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\IndexConfig;

class IndexConfigController extends Controller
{
    public function index()
    {
        $indexcategory = IndexConfig::with('category.childrens.products','category.products')->get()->first();
        return $indexcategory;
    }
    public function store(Request $request)
    {
        IndexConfig::truncate();
        $indexcategory = IndexConfig::create($request->all());
        $indexcategory->category;
        return $indexcategory;
    }
    public function destroy($id)
    {

    }
    public function update(Request $request, $id)
    {

    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Catalog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CatalogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $catalog = Catalog::whereNull('catalog_id')->with('childrens.products', 'products')->get();
        return $catalog;
    }
    public function show($slug)
    {
        //return Catalog::findOrFail($id); stock method
        return Catalog::where('slug', $slug)->get();
    }
    public function getCategory($slug)
    {
        $subcat = Catalog::where('slug', $slug)->get()->first();
        $subcat->parentobj = Catalog::where('id', $subcat->catalog_id)->get()->first();
        $subcat->Products;
        return $subcat;
    }
    public function GetChildrens($id)
    {
        return Catalog::where('catalog_id', $id)->get();
    }
    public function update(Request $request, $id)
    {
        $company = Catalog::findOrFail($id);
        $company->update($request->all());

        return $company;
    }
    public function store(Request $request)
    {
        $company = Catalog::create($request->all());
        $company->childrens = [];
        return $company;
    }
    public function destroy($id)
    {
        $company = Catalog::findOrFail($id);
        $childrens = $this->GetChildrens($id);
        $childrens->each->delete();
        $company->delete();
        return '';
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
}

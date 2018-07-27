<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Pack;
class PackingController extends Controller
{
    public function index()
    {
        $packs = Pack::all();
        return $packs;
    }

    public function store(Request $request)
    {
        $pack = Pack::add($request);
        $pack->uploadImage($request->file('image'));
        return $pack;
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $pack = Pack::findOrFail($id);
        $pack->update($request->all());
        if ($request->hasFile('image')) {
            $pack->uploadImage($request->file('image'));
        }
        return $pack;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pack = Pack::findOrFail($id);
        $pack->remove();
        return '';
    }
}

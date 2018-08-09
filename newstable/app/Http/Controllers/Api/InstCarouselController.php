<?php

namespace App\Http\Controllers\Api;

use App\InstCarousel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InstCarouselController extends Controller
{
    public function index()
    {
        $slides = InstCarousel::all();
        return $slides;
    }
    public function store(Request $request)
    {
        $slide = InstCarousel::add($request);
        $slide->uploadImage($request->file('image'));
        return $slide;
    }
    public function update(Request $request, $id)
    {
        $slide = InstCarousel::findOrFail($id);
        $slide->update($request->all());
        if ($request->hasFile('image')) {
            $slide->uploadImage($request->file('image'));
        }
        return $slide;
    }
    public function destroy($id)
    {
        $pack = InstCarousel::findOrFail($id);
        $pack->remove();
        return '';
    }
}

<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use App\Carousel;

class CarouselController extends Controller
{
    public function index()
    {
        $carousel = Carousel::all();
        return $carousel;
    }
    public function store(Request $request)
    {
        $Carousel = Carousel::add($request);
        $Carousel->uploadImage($request->file('image'));
        return $Carousel;
    }
    public function destroy($id)
    {
        $carousel = Carousel::findOrFail($id);
        $carousel->remove();
        return '';
    }
    public function update(Request $request, $id)
    {
        $carousel = Carousel::findOrFail($id);
        $carousel->update($request->all());
        if ($request->hasFile('image')) {
            $carousel->uploadImage($request->file('image'));
        }

        return $carousel;
    }
    
}

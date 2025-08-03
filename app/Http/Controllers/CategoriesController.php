<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Categories;
use App\Models\Services;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCategoriesRequest;
use App\Http\Requests\UpdateCategoriesRequest;

class CategoriesController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Categories/CategoriesShow', [
            'categories' => Categories::all(),
            'services' => Services::all(),
        ]);
        
    }

    public function create()
    {
        return Inertia::render('Admin/Categories/CategoriesCreate',[
            'categories' => Categories::all(),
            'services' => Services::all(),

        ]);
    }

    public function store(StoreCategoriesRequest $request)
    {
        $validated = $request->validated();
        \Log::info('Validated data:', $validated); // Add this line


        if ($request->hasFile('image')) {
            $filename = time() . '.' . $request->image->extension();
            $request->image->move(public_path('assets/categories'), $filename);
            $validated['image'] = $filename;
        }

        Categories::create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'service_id' => $validated['service_id'], // ✅ Correct foreign key
            'image' => $validated['image'] ?? null,
        ]);
        return redirect()->route('categories.index')
            ->with('success', 'Category created successfully.');
    }

    public function edit(Categories $category)
    {
        return Inertia::render('Admin/Categories/CategoriesEdit', [
            'category' => $category,
            'services' => Services::all(),
        ]);
    }

   public function update(UpdatecategoriesRequest $request, $id)
    {
        \Log::info('Update request data:', $request->all());

        $category = Categories::findOrFail($id);

        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $oldImagePath = public_path('assets/categories/' . $category->image);
            if (file_exists($oldImagePath)) {
                unlink($oldImagePath);
            }

            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('assets/categories'), $imageName);
            $validated['image'] = $imageName;
        }

        $category->update($validated);

        return redirect()->route('categories.index')->with('success', 'Category updated successfully.');
    }

    public function destroy(Categories $category)
    {
        // Delete associated image
        if ($category->image && file_exists(public_path('assets/categories/' . $category->image))) {
            unlink(public_path('assets/categories/' . $category->image));
        }

        $category->delete();

        return redirect()->route('categories.index')
            ->with('success', 'Category deleted successfully.');
    }
}
<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Categories;
use App\Models\Services;
use App\Models\Projects;

class HomeController extends Controller
{
    public function aboutView()
    {
        return Inertia::render('Home/About', [
            'services' => Services::all(),
            'categories' => Categories::all(),
        ]);
    }

   public function servicesView($categoryId = null)
{
    $data = [];

    if ($categoryId) {
        // Load projects for both selected and related categories
        $category = Categories::with(['service', 'projects'])->findOrFail($categoryId);
        
        $relatedCategories = Categories::with('projects') // <-- fix here
            ->where('service_id', $category->service_id)
            ->where('id', '!=', $categoryId)
            ->get();

        $data = [
            'selectedCategory' => $category,
            'relatedCategories' => $relatedCategories,
            'service' => $category->service,
        ];
    }

    $data['services'] = Services::with('categories')->get();

    return Inertia::render('Home/Services', $data);
}


    public function insightsView()
    {
        return Inertia::render('Home/Insights',[
            'services' => Services::all(),
            'categories' => Categories::all(),
        ]);
    }

    public function contactView()
    {
        return Inertia::render('Home/Contact');
    }

    public function portfolioView()
{
    return Inertia::render('Portfolio/Portfolio', [
        'categories' => Categories::all([
            'id', 
            'title', 
            'description',
            'service_id', 
            'image'
        ]),
        'services' => Services::all([
            'id',
            'title',
            'description',
            'image',
        ]),
    ]);
}

}

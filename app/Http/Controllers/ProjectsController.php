<?php

namespace App\Http\Controllers;

use App\Models\projects;
use App\Http\Requests\StoreprojectsRequest;
use App\Http\Requests\UpdateprojectsRequest;
use Inertia\Inertia;
use App\Models\Categories;
use App\Models\Services;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Projects/ProjectsShow', [
            'categories' => Categories::all(),
            'services' => Services::all(),
            'projects' => projects::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Projects/ProjectsCreate',[
            'categories' => Categories::all(),
            'services' => Services::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreprojectsRequest $request)
    {
        $validated = $request->validated();
        \Log::info('Validated data:', $validated); // Add this line


        if ($request->hasFile('image')) {
            $filename = time() . '.' . $request->image->extension();
            $request->image->move(public_path('assets/projects'), $filename);
            $validated['image'] = $filename;
        }

        projects::create([
            'image' => $validated['image'] ?? null,
            'category_id' => $validated['category_id'], // ✅ Correct foreign key
        ]);
        return redirect()->route('projects.index')
            ->with('success', 'Project created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(projects $projects)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(projects $project)
    {
        return Inertia::render('Admin/Projects/ProjectsEdit', [
            'project' => $project,
            'categories' => Categories::all(),
            'services' => Services::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateprojectsRequest $request, $id)
    {
        \Log::info('Update request data:', $request->all());

        $project = projects::findOrFail($id);
        

        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $oldImagePath = public_path('assets/projects/' . $project->image);
            if (file_exists($oldImagePath)) {
                unlink($oldImagePath);
            }

            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('assets/projects'), $imageName);
            $validated['image'] = $imageName;
        }

        $success = $project->update($validated);
        \Log::info('Update success:', [$success]);

        return redirect()->route('projects.index')->with('success', 'Project updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Projects $project)  
    {
        if ($project->image && file_exists(public_path('assets/projects/' . $project->image))) {
            unlink(public_path('assets/projects/' . $project->image));
        }

        $project->delete();

        return redirect()->route('projects.index')
            ->with('success', 'Project deleted successfully.');
    }
}

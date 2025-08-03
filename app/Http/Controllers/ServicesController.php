<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\services;
use App\Http\Requests\StoreservicesRequest;
use App\Http\Requests\UpdateservicesRequest;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        return Inertia::render('Admin/Services/ServicesShow', [
            'services' => Services::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Services/ServicesCreate');
    }
    
    /**
     * Store a newly created resource in storage.
     */
  public function store(StoreservicesRequest $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $filename = time() . '.' . $request->image->extension();

            // Move image to /public/assets/services
            $request->image->move(public_path('assets/services'), $filename);

            // Save the relative path to DB
            $validated['image'] = $filename;
        }

        // Store the service with the authenticated user
        $services = Services::create($validated);


        // Redirect back to the index route (services.index)
        return redirect()->route('services.index')
            ->with('success', 'Service created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(services $services)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Services $service)
    {
        return Inertia::render('Admin/Services/ServicesEdit', [
            'service' => $service,
        ]);
    }

    public function update(Request $request, $id)
    {
        $service = Services::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        
        if ($request->hasFile('image')) {
            
            $oldImagePath = public_path('assets/services/' . $service->image);
            if (file_exists($oldImagePath)) {
                unlink($oldImagePath);
            }

            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('assets/services'), $imageName);
            $validated['image'] = $imageName;
        }

        $service->update($validated);

        return redirect()->route('services.index')->with('success', 'Service updated successfully.');
    }
    /**
     * Remove the specified resource from storage.
     */
    
     
    public function destroy(Services $service)
    {
        $service->delete();

        return redirect()->route('services.index')
            ->with('success', 'Service deleted successfully.');
    }
}

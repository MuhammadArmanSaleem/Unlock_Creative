<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Testimonials;
use App\Http\Requests\StoreTestimonialsRequest;
use App\Http\Requests\UpdateTestimonialsRequest;

class TestimonialsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonials = Testimonials::all(); // or any query
        return inertia('Admin/Testimonials/TestimonialShow', [
            'testimonials' => $testimonials,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Testimonials/TestimonialCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTestimonialsRequest $request)
    {
        $validated = $request->validated();
        \Log::info('Validated data:', $validated); // Add this line


        if ($request->hasFile('image')) {
            $filename = time() . '.' . $request->image->extension();
            $request->image->move(public_path('assets/testimonials'), $filename);
            $validated['image'] = $filename;
        }

        Testimonials::create([
            'name' => $validated['name'],
            'position' => $validated['position'],
            'context' => $validated['context'],
            'ratings' => $validated['ratings'],
            'image' => $validated['image'] ?? null,
        ]);
        return redirect()->route('testimonials.index')
            ->with('success', 'Testimonial created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Testimonials $testimonials)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Testimonials $testimonial)
    {
        return Inertia::render('Admin/Testimonials/TestimonialEdit', [
            'testimonial' => $testimonial, // matches parameter name and prop key
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTestimonialsRequest $request, Testimonials $testimonial)
    {
        \Log::info('Update request data:', $request->all());

        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $oldImagePath = public_path('assets/testimonials/' . $testimonial->image);
            if (file_exists($oldImagePath)) {
                unlink($oldImagePath);
            }

            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('assets/testimonials'), $imageName);
            $validated['image'] = $imageName;
        }

        $testimonial->update($validated);

        return redirect()->route('testimonials.index')->with('success', 'Testimonial updated successfully.');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Testimonials $testimonial)
    {
        if ($testimonial->image && file_exists(public_path('assets/testimonials/' . $testimonial->image))) {
            unlink(public_path('assets/testimonials/' . $testimonial->image));
        }

        $testimonial->delete();

        return redirect()->route('testimonials.index')
            ->with('success', 'Testimonial deleted successfully.');
    }

}

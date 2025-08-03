<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\MailController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Services;
use App\Models\Categories;
use App\Models\Projects;


Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'service' => Services::all(),
        
    ]);
})->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/about', [HomeController::class, 'aboutView'])->name('about');
    Route::get('/service/{category?}', [HomeController::class, 'servicesView'])->name('services');
    Route::get('/insights', [HomeController::class, 'insightsView'])->name('insights');
    Route::get('/contact', [HomeController::class, 'contactView'])->name('contact');
    Route::get('/portfolio', [HomeController::class, 'portfolioView'])->name('portfolio');
});



Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('services', ServicesController::class)->names([
        'index' => 'services.index',
        'create' => 'services.create',
        'store' => 'services.store',
        'show' => 'services.show',
        'edit' => 'services.edit',
        'update' => 'services.update',
        'destroy' => 'services.destroy'
    ]);
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('categories', CategoriesController::class)->names([
        'index' => 'categories.index',
        'create' => 'categories.create',
        'store' => 'categories.store',
        'show' => 'categories.show',
        'edit' => 'categories.edit',
        'update' => 'categories.update',
        'destroy' => 'categories.destroy'
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('projects', ProjectsController::class)->names([
        'index' => 'projects.index',
        'create' => 'projects.create',
        'store' => 'projects.store',
        'show' => 'projects.show',
        'edit' => 'projects.edit',
        'update' => 'projects.update',
        'destroy' => 'projects.destroy'
    ]);
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('/contact-form', [MailController::class, 'sendContactEmail'])->name('contact.submit');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/chat/UserMessagesView', [ChatController::class, 'UserMessagesView'])->name('chat.UserMessagesView');
    Route::get('/chat/{receiverId}', [ChatController::class, 'index'])->name('chat.index');
    Route::post('/chat/send', [ChatController::class, 'send'])->name('chat.send');
});



require __DIR__.'/auth.php';

import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, router, usePage } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function CategoriesEdit() {
    const { category } = usePage().props;
    const { services = [] } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        title: category.title || '',
        description: category.description || '',
        service_id: category.service_id || '',
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('service_id', data.service_id);
        if (data.image) {
            formData.append('image', data.image);
        }
        formData.append('_method', 'PUT');

        router.post(route('categories.update', category.id), formData, {
            forceFormData: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-1 via-dark-2 to-dark-3">
            <AuthenticatedLayout>
                <Head title="Update Category" />
            </AuthenticatedLayout>
            
            <div className="container mx-auto px-4 py-12">
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                        <div className="bg-gradient-to-br from-dark-3/90 to-dark-2/90 rounded-xl shadow-2xl overflow-hidden border border-primary-3/30 backdrop-blur-sm">
                            {/* Form Header with Gradient */}
                            <div className="px-8 py-6 bg-gradient-to-r from-primary-3/20 via-primary-2/20 to-primary-4/20 border-b border-primary-1/50">
                                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-1  to-primary-1/50">
                                    Update Category
                                </h2>
                                <p className="text-light-3/80 text-sm mt-2">Update the details below for this category</p>
                            </div>

                            {/* Form Body */}
                            <form onSubmit={submit} className="p-8 bg-gradient-to-r from-primary-3/20 via-primary-2/20 to-primary-4/20 border-b border-primary-3/30">
                                {/* Title Field */}
                                <div className="mb-6">
                                    <label htmlFor="title" className="block text-light-2 text-sm font-medium mb-2">
                                        Category Title <span className="text-primary-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-dark-2/70 border border-primary-3/40 text-light-1 placeholder-light-3/60 focus:outline-none focus:ring-2 focus:ring-primary-2/60 focus:border-primary-3 transition-all duration-200"
                                        placeholder="e.g. Web Development"
                                        required
                                    />
                                    {errors.title && (
                                        <p className="mt-1 text-sm text-primary-1 animate-pulse">{errors.title}</p>
                                    )}
                                </div>

                                {/* Description Field */}
                                <div className="mb-6">
                                    <label htmlFor="description" className="block text-light-2 text-sm font-medium mb-2">
                                        Description <span className="text-primary-1">*</span>
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows="4"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-dark-2/70 border border-primary-3/40 text-light-1 placeholder-light-3/60 focus:outline-none focus:ring-2 focus:ring-primary-2/60 focus:border-primary-3 transition-all duration-200"
                                        placeholder="Describe what this category is about..."
                                        required
                                    ></textarea>
                                    {errors.description && (
                                        <p className="mt-1 text-sm text-primary-1 animate-pulse">{errors.description}</p>
                                    )}
                                </div>

                                {/* Service Selection */}
                                <div className="mb-6">
                                    <label htmlFor="service_id" className="block text-light-2 text-sm font-medium mb-2">
                                        Associated Service <span className="text-primary-1">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="service_id"
                                            name="service_id"
                                            value={data.service_id}
                                            onChange={(e) => setData('service_id', e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg bg-dark-2/70 border border-primary-3/40 text-light-1 focus:outline-none focus:ring-2 focus:ring-primary-2/60 focus:border-primary-3 transition-all duration-200 appearance-none"
                                            required
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service) => (
                                                <option key={service.id} value={service.id}>
                                                    {service.title}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-primary-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    {errors.service_id && (
                                        <p className="mt-1 text-sm text-primary-1 animate-pulse">{errors.service_id}</p>
                                    )}
                                </div>

                                {/* Image Upload */}
                                <div className="mb-8">
                                    <label htmlFor="image" className="block text-light-2 text-sm font-medium mb-2">
                                        Category Image
                                    </label>
                                    
                                    {category.image && (
                                        <div className="mb-3">
                                            <p className="text-sm text-light-3">Current Image: <span className="text-primary-1 font-medium">{category.image}</span></p>
                                        </div>
                                    )}
                                    
                                    <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gradient-to-br from-dark-2/70 to-dark-3/70 border-primary-3/40 hover:border-primary-2 transition-all duration-200 group">
                                            <div className="flex flex-col items-center justify-center pt-7">
                                                <svg className="w-8 h-8 text-primary-3 group-hover:text-primary-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                                <p className="pt-1 text-sm text-light-3 group-hover:text-primary-1 transition-all">
                                                    {data.image ? data.image.name : 'Click to upload a new image'}
                                                </p>
                                            </div>
                                            <input 
                                                id="image" 
                                                type="file" 
                                                className="opacity-0" 
                                                onChange={(e) => setData('image', e.target.files[0])}
                                                accept="image/*"
                                            />
                                        </label>
                                    </div>
                                    {errors.image && (
                                        <p className="mt-1 text-sm text-primary-1 animate-pulse">{errors.image}</p>
                                    )}
                                </div>

                                {/* Form Actions */}
                                <div className="flex items-center justify-between pt-6 border-t border-primary-3/30">
                                    <Link
                                        href={route('categories.index')}
                                        className="px-6 py-2.5 text-light-3 hover:text-primary-1 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-dark-2/50"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="px-8 py-2.5 bg-gradient-to-l from-primary-1 via-primary-2 to-primary-3 hover:from-primary-2 hover:via-primary-3 hover:to-primary-4 text-light-1 rounded-lg text-sm font-bold shadow-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {processing ? (
                                            <span className="flex items-center">
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Updating...
                                            </span>
                                        ) : (
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                Update Category
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}
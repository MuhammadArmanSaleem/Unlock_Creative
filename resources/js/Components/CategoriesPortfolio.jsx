import { Link } from '@inertiajs/react';

export default function CategoriesSection({ categories }) {
    return (
        <div className="container w-[80%] mx-auto px-4 py-12 md:py-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-light-1 bg-clip-text bg-gradient-to-r from-primary-1 to-primary-1/80 mb-4">
                    Categories
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-2 to-primary-3 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => (
                    <div 
                        key={category.id}
                        className="group relative overflow-hidden rounded-xl shadow-2xl border border-primary-3/30 hover:border-primary-1/50 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-dark-1/50 to-dark-3/90 z-10"></div>
                        <div className="relative h-64 w-full">
                            <img 
                                src={`/assets/categories/${category.image}`} 
                                alt={category.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                            <h3 className="text-2xl font-bold text-light-1 mb-2 group-hover:text-primary-1/90 transition-colors duration-300">
                                {category.title}
                            </h3>
                            <p className="text-light-2/80 mb-4 line-clamp-2">
                                {category.description}
                            </p>
                            <Link
                                href={route('services', category.id)}
                                className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary-1/80 to-primary-3/80 rounded-lg text-light-1 font-medium hover:from-primary-2 hover:to-primary-4 transition-all duration-300 transform group-hover:translate-x-1"
                            >
                                View Projects
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
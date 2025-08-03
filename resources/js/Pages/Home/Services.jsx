import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import React, { useState } from 'react';
import ProjectsModal from '@/Components/ProjectModal';
import TalkToChatUser from '@/Components/TalkToChatUser';


export default function Services({ auth, services, selectedCategory, relatedCategories, service }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProjects, setSelectedProjects] = useState([]);
    const user = auth?.user;

    const openProjectsModal = (projects) => {
        console.log('Opening modal with projects:', projects); // <- Debug
        setSelectedProjects(projects);
        setIsModalOpen(true);
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-1 via-dark-2 to-dark-3">
            <AuthenticatedLayout>
                <Head title="Services" />

                {/* Hero Section */}
                <div className="relative overflow-hidden mt-10">
                    <div className="absolute inset-0 bg-[url('/assets/images/portfolio_bg.jpg')] bg-cover bg-center transform scale-105 group-hover:scale-100 transition-transform duration-1000"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-1/90 via-dark-3/80 to-dark-2/90"></div>
                    <div className="relative h-[32rem] flex items-center justify-center">
                        <div className="text-center px-6 max-w-4xl mx-auto">
                            <h1 className="text-5xl md:text-7xl font-bold text-light-1 mb-6 leading-tight">
                                {selectedCategory ? (
                                    <>
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-primary-3">
                                            {service.title}
                                        </span>
                                        <span className="block text-xl md:text-2xl font-normal mt-4 text-light-2/90">
                                            {service.description}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        Unleash Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-primary-3">Creative Vision</span>
                                        <span className="block text-2xl md:text-3xl font-normal mt-4 text-light-2/90">
                                            Explore our premium creative services
                                        </span>
                                    </>
                                )}
                            </h1>
                            {!selectedCategory && (
                                <button
                                    onClick={() => document.getElementById('services-grid').scrollIntoView({ behavior: 'smooth' })}
                                    className="mt-8 px-8 py-3 bg-gradient-to-r from-primary-1 to-primary-3 rounded-full text-light-1 font-medium hover:from-primary-2 hover:to-primary-4 transition-all duration-300 shadow-lg hover:shadow-primary-1/30 animate-bounce"
                                >
                                    Discover Services
                                    <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Services List */}
                {!selectedCategory && (
                    <div id="services-grid" className="container mx-auto px-4 py-20">
                        <div className="text-center mb-20 relative">
                            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-8xl font-bold text-dark-3/20 z-0">
                                Services
                            </span>
                            <h2 className="relative text-4xl md:text-5xl font-bold text-light-1 mb-6 z-10">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-primary-3">Premium</span> Services
                            </h2>
                            <div className="w-32 h-1 bg-gradient-to-r from-primary-2 to-primary-3 mx-auto rounded-full mb-6"></div>
                            <p className="text-lg text-light-2/80 max-w-2xl mx-auto">
                                We deliver exceptional creative solutions tailored to your unique needs
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="group relative bg-dark-2/70 rounded-2xl p-8 border border-primary-3/20 hover:border-primary-1/50 transition-all duration-500 overflow-hidden"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-br from-primary-1/10 to-primary-3/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center mb-6">
                                            <div className="p-4 rounded-xl bg-gradient-to-br from-primary-1 to-primary-3 shadow-lg mr-5">
                                                {/* Replace with actual icon component */}
                                                <svg className="w-8 h-8 text-light-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-bold text-light-1">{service.title}</h3>
                                        </div>

                                        <p className="text-light-2/90 mb-8 leading-relaxed">{service.description}</p>

                                        {service.categories.length > 0 && (
                                            <Link
                                                href={route('services', service.categories[0].id)}
                                                className="inline-flex items-center text-primary-1 hover:text-primary-2 font-medium group/link transition-all"
                                            >
                                                <span className="border-b border-transparent group-hover/link:border-primary-2 transition-all">
                                                    Explore Categories
                                                </span>
                                                <svg className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Categories Section (shown when a service/category is selected) */}
                {selectedCategory && (
                    <div className="container w-[80%] mx-auto px-4 py-12 md:py-20">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-primary-1/80 mb-4">
                                {service.title} Categories
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-2 to-primary-3 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[selectedCategory, ...relatedCategories].map((category) => (
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
                                        <button
                                            onClick={() => openProjectsModal(category.projects || [])}
                                            className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary-1/80 to-primary-3/80 rounded-lg text-light-1 font-medium hover:from-primary-2 hover:to-primary-4 transition-all duration-300 transform group-hover:translate-x-1"
                                        >
                                            View Projects
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </AuthenticatedLayout>

            <ProjectsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                projects={selectedProjects}
            />

            {auth?.user?.role === 'user' ? (
                <>
                    <TalkToChatUser currentUserId={auth.user.id} />                
                </>
            ) : (
                <div className="text-center mt-10">
                    <h2 className="text-2xl font-bold mb-4">Welcome, {user?.name}!</h2>
                    <p className="text-gray-600">Explore our services and find the perfect solution for your needs.</p>
                </div>
            )}

            <Footer />
        </div>
    );
}
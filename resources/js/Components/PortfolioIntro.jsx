import { Link } from '@inertiajs/react';
import React from 'react';

export default function PortfolioIntro() {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative overflow-hidden mt-[50px]">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-1/40 via-primary-2/5 to-primary-1/40 backdrop-blur-sm z-0">
                    <div className="absolute inset-0 bg-['/assets/images/portfolio_bg.jpg')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary-1 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary-2 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
                </div>

                <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Enhanced heading with animation */}
                        <h1 className="text-4xl md:text-6xl font-bold text-light-1 bg-clip-text bg-gradient-to-r from-primary-1 via-primary-2 to-primary-1 mb-3 animate-fade-in-up">
                            Our Portfolio
                        </h1>
                        <div className="w-48 h-1 bg-gradient-to-r from-primary-2 to-primary-3 mx-auto rounded-full mb-6"></div>


                        {/* Improved description */}
                        <p className="text-lg md:text-xl text-light-2/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Explore our diverse range of work across different industries. Each project represents our commitment to excellence, innovation, and client satisfaction.
                        </p>

                        {/* Added stats section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            <div className="bg-dark-2/40 backdrop-blur-md rounded-xl p-4 border border-light-1/10 hover:border-primary-1/30 transition-all hover:scale-105 duration-500">
                                <div className="text-3xl font-bold text-primary-1 mb-1">100+</div>
                                <div className="text-sm text-light-2/80">Projects Completed</div>
                            </div>
                            <div className="bg-dark-2/40 backdrop-blur-md rounded-xl p-4 border border-light-1/10 hover:border-primary-1/30 transition-all  hover:scale-105 duration-500">
                                <div className="text-3xl font-bold text-primary-1 mb-1">95%</div>
                                <div className="text-sm text-light-2/80">Client Satisfaction</div>
                            </div>
                            <div className="bg-dark-2/40 backdrop-blur-md rounded-xl p-4 border border-light-1/10 hover:border-primary-1/30 transition-all hover:scale-105 duration-500">
                                <div className="text-3xl font-bold text-primary-1 mb-1">30+</div>
                                <div className="text-sm text-light-2/80">Appreciations</div>
                            </div>
                            <div className="bg-dark-2/40 backdrop-blur-md rounded-xl p-4 border border-light-1/10 hover:border-primary-1/30 transition-all hover:scale-105 duration-500">
                                <div className="text-3xl font-bold text-primary-1 mb-1">2500+</div>
                                <div className="text-sm text-light-2/80">Views</div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>

    );
}
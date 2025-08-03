import { Link } from '@inertiajs/react';

export default function AboutHeroSection( { aboutData }) {
    return (
        <div className="relative overflow-hidden mt-12">
            <div className="absolute inset-0 bg-[url('/assets/images/portfolio_bg.jpg')] bg-cover bg-center opacity-20"></div>
            <div className="relative container mx-auto px-6 py-32 md:py-40">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-light-1 mb-6">
                        About <span className="text-transparent bg-clip-text bg-primary-1">Our Company</span>
                    </h1>
                    <p className="text-lg md:text-md text-light-2/90 max-w-3xl mx-auto">
                        {aboutData.subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
}
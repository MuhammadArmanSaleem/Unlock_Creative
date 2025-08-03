import { Link } from '@inertiajs/react';

export default function AboutWhoWeAreSection({ aboutData }) {
    return (
        <section className="container  mx-auto px-6 py-20 bg-dark-2">
            <div className="flex flex-col w-[80%] mx-auto lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                    <div className="relative">
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary-1/50 rounded-lg z-0"></div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary-2/50 rounded-lg z-0"></div>
                        <img
                            src="/assets/images/about.jpg"
                            alt="Our Team"
                            className="relative z-10 rounded-lg shadow-2xl w-[80%] mx-auto h-auto object-cover hover:scale-105 transition-transform duration-1000 ease-in-out"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://via.placeholder.com/800x600?text=Our+Team";
                            }}
                        />
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-light-1 mb-6">
                        Who <span className="text-primary-1">We Are</span>
                    </h2>
                    <p className="text-light-2/90 mb-8 leading-relaxed">
                        {aboutData.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        {aboutData.stats.map((stat, index) => (
                            <div key={index} className="bg-dark-2/70 border border-dark-3 rounded-lg p-4 text-center hover:border-primary-1 transition-all duration-800">
                                <div className="text-2xl md:text-3xl font-bold text-primary-1 mb-1">{stat.value}</div>
                                <div className="text-sm text-light-2/80">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>

    );
}
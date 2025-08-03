import { Link } from '@inertiajs/react';

export default function ServicesSection({ services }) {
    return (
        <div className="bg-gradient-to-br from-dark-2/80 via-dark-3/90 to-dark-2/80 py-16">
            <div className="container w-[90%] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-light-1 bg-clip-text bg-gradient-to-r from-primary-1 to-primary-1/80 mb-4">
                        Our Services
                    </h2>
                    <div className="w-24 h-1 bg-primary-1 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-gradient-to-br from-dark-1/60 to-dark-2/80 rounded-xl p-6 border border-primary-3/30 hover:border-primary-2/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-3 bg-gradient-to-r from-primary-1/20 to-primary-3/20 rounded-lg mr-4">
                                    <img
                                        src={`/assets/services/${service.image}`}
                                        alt={service.title}
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-light-1">{service.title}</h3>
                            </div>
                            <p className="text-light-2/80 mb-6">{service.description}</p>
                            <Link
                                href="#"
                                className="text-light-1 hover:text-primary-1 font-medium inline-flex items-center transition-colors duration-300"
                            >
                                Learn more
                                <span className='text-primary-1'>
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>

                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
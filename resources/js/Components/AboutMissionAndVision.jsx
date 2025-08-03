import { Link } from '@inertiajs/react';
import { FiCheck } from 'react-icons/fi';

export default function AboutMissionAndVision({ aboutData }) {
    return (
        <section className="bg-gradient-to-br from-light-3/20 via-light-3 to-light-3/20 py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-light-1 mb-4">
                        Our <span className="text-transparent bg-clip-text bg-primary-1">Core Values</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary-1 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto ">
                    <div className="bg-dark-1/70 border border-dark-3 rounded-xl p-8 shadow-lg hover:-translate-x-2 hover:shadow-primary-1/10 transition-all duration-500">
                        <div className="text-primary-1 text-4xl mb-4">Mission</div>
                        <p className="text-light-2/90">{aboutData.mission}</p>
                        <div className="mt-6 pt-6 border-t border-dark-3">
                            <h3 className="text-light-1 font-medium mb-3">What We Do</h3>
                            <ul className="space-y-2">
                                {['Innovative Solutions', 'Client-Centric Approach', 'Cutting-Edge Technology'].map((item, i) => (
                                    <li key={i} className="flex items-center text-light-2/90">
                                        <FiCheck className="text-primary-1 mr-2" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-dark-1/70 border border-dark-3 rounded-xl p-8 shadow-lg hover:translate-x-2 hover:shadow-primary-1/10 transition-all duration-500">
                        <div className="text-primary-1 text-4xl mb-4">Vision</div>
                        <p className="text-light-2/90">{aboutData.vision}</p>
                        <div className="mt-6 pt-6 border-t border-dark-3">
                            <h3 className="text-light-1 font-medium mb-3">Our Goals</h3>
                            <ul className="space-y-2">
                                {['Global Recognition', 'Sustainable Growth', 'Industry Leadership'].map((item, i) => (
                                    <li key={i} className="flex items-center text-light-2/90">
                                        <FiCheck className="text-primary-1 mr-2" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
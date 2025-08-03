import { Link } from '@inertiajs/react';
import { FiStar } from 'react-icons/fi';


export default function Testimonials({ aboutData }) {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-light-1 mb-4">
                        What Our <span className="text-transparent bg-clip-text bg-primary-1 ">Clients Say</span>
                    </h2>
                    <p className="text-light-2/80 max-w-2xl mx-auto">
                        Don't just take our word for it - hear from our satisfied clients
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-dark-1/70 border border-dark-3 rounded-xl p-8 md:p-12 shadow-lg relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-1/5 to-primary-3/5 rounded-xl opacity-30 z-0"></div>
                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <div className="w-20 h-20 rounded-full overflow-hidden mr-6 border-4 border-primary-1/30">
                                    <img
                                        src="/assets/images/boy.jpg"
                                        alt="Testimonial"
                                        className="w-full h-full object-cover"
                                        
                                    />
                                </div>
                                <div>
                                    <h4 className="text-light-1 font-bold text-xl">Sarah Johnson</h4>
                                    <p className="text-light-2/70">CEO, Tech Innovations</p>
                                </div>
                            </div>
                            <p className="text-light-1 text-lg mb-6">
                                "Working with this team transformed our digital presence. Their innovative approach and attention to detail resulted in a 300% increase in our online engagement. They truly understand how to align technology with business goals."
                            </p>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FiStar key={star} className="text-yellow-400 fill-current w-5 h-5" />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 space-x-2">
                        {[1, 2, 3].map((dot) => (
                            <div key={dot} className={`w-3 h-3 rounded-full ${dot === 1 ? 'bg-primary-1' : 'bg-dark-3'}`}></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}
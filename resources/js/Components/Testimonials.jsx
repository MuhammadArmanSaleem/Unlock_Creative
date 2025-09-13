import { Link } from '@inertiajs/react';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

export default function Testimonials({ testimonials = [] }) {
    // If there are no testimonials, return null or a message
    if (!testimonials || testimonials.length === 0) {
        return (
            <section className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-light-2">No testimonials available yet.</p>
                </div>
            </section>
        );
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const activeTestimonial = testimonials[activeIndex];

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-light-1 mb-4">
                        What Our <span className="text-transparent bg-clip-text bg-primary-1">Clients Say</span>
                    </h2>
                    <p className="text-light-2/80 max-w-2xl mx-auto">
                        Don't just take our word for it - hear from our satisfied clients
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Navigation Arrows */}
                    <button 
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-dark-2/70 hover:bg-dark-3/80 rounded-full p-2 transition-all duration-200 z-20"
                        aria-label="Previous testimonial"
                    >
                        <FiChevronLeft className="w-6 h-6 text-light-1" />
                    </button>
                    
                    <button 
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-dark-2/70 hover:bg-dark-3/80 rounded-full p-2 transition-all duration-200 z-20"
                        aria-label="Next testimonial"
                    >
                        <FiChevronRight className="w-6 h-6 text-light-1" />
                    </button>

                    {/* Testimonial Card */}
                    <div className="bg-dark-1/70 border border-dark-3 rounded-xl p-8 md:p-12 shadow-lg relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-1/5 to-primary-3/5 rounded-xl opacity-30 z-0"></div>
                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <div className="w-20 h-20 rounded-full overflow-hidden mr-6 border-4 border-primary-1/30">
                                    <img
                                        src={`/assets/testimonials/${activeTestimonial.image}`}
                                        alt={activeTestimonial.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = '/assets/images/default-avatar.jpg';
                                        }}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-light-1 font-bold text-xl">{activeTestimonial.name}</h4>
                                    <p className="text-light-2/70">{activeTestimonial.position}</p>
                                </div>
                            </div>
                            <p className="text-light-1 text-lg mb-6">
                                "{activeTestimonial.context}"
                            </p>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar 
                                        key={i} 
                                        className={`w-5 h-5 ${i < activeTestimonial.ratings ? 'text-yellow-400 fill-current' : 'text-dark-3'}`} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button 
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-primary-1' : 'bg-dark-3 hover:bg-primary-1/50'}`}
                                aria-label={`View testimonial ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
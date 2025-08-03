import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';


export default function FAQs({ aboutData }) {
        const [openFaqs, setOpenFaqs] = useState({});
    
        const toggleFaq = (index) => {
            setOpenFaqs(prev => ({
                ...prev,
                [index]: !prev[index]
            }));
        };
    
    return (
        <section className="bg-gradient-to-br from-light-3/20 via-light-3 to-light-3/20 py-20">
            <div className="container w-[90%] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-light-1 mb-4">
                        Frequently <span className="text-transparent bg-clip-text bg-primary-1 ">Asked Questions</span>
                    </h2>
                    <p className="text-dark-2 max-w-2xl mx-auto">
                        Find answers to common questions about our services and process
                    </p>
                </div>

                <div className="mx-auto">
                    {aboutData.faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="mb-2 bg-dark-1/70 border border-dark-3 rounded-xl overflow-hidden transition-all duration-300"
                        >
                            <button
                                className="w-full p-6 text-left flex justify-between items-center hover:bg-dark-2/30 transition-colors duration-200"
                                onClick={() => toggleFaq(index)}
                            >
                                <h3 className="text-lg font-medium text-light-1">{faq.question}</h3>
                                <svg
                                    className={`w-5 h-5 text-primary-1 transition-transform duration-300 ${openFaqs[index] ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openFaqs[index] ? 'max-h-[1000px]' : 'max-h-0'}`}
                            >
                                <div className="px-6 pb-6 pt-2 text-light-2/90">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="text-center mt-12">
                        <Link
                            href={route('contact')}
                            className="inline-flex px-6 py-2 bg-gradient-to-r from-primary-1 to-primary-3 rounded-lg text-light-1 font-medium hover:from-primary-2 hover:to-primary-4 transition-all duration-300 items-center"
                        >
                            Contact Us <FiArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
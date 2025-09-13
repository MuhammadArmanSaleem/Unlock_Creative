import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function PoliciesSection() {
    const [expandedPolicy, setExpandedPolicy] = useState(null);

    const togglePolicy = (policy) => {
        setExpandedPolicy(expandedPolicy === policy ? null : policy);
    };

    const policies = {
        terms: {
            title: "Terms & Conditions",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            summary: "By using our services, you agree to comply with and be bound by the following terms and conditions.",
            highlights: [
                "Service usage guidelines and restrictions",
                "Intellectual property rights",
                "User responsibilities and conduct",
                "Limitation of liability"
            ],
            details: [
                "All services provided are subject to availability and may be modified or discontinued without notice.",
                "Users must not engage in any activity that disrupts or interferes with our services.",
                "Content created by our agency remains our intellectual property unless otherwise agreed in writing.",
                "We reserve the right to terminate services to any client violating these terms."
            ],
            color: "primary-1"
        },
        privacy: {
            title: "Privacy Policy",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            summary: "We are committed to protecting your privacy and handling your data responsibly.",
            highlights: [
                "Information we collect and how we use it",
                "Data protection and security measures",
                "Cookies and tracking technologies",
                "Your rights and choices regarding your data"
            ],
            details: [
                "We collect personal information only when voluntarily submitted by our clients.",
                "All data is stored using industry-standard encryption and security protocols.",
                "We use cookies to enhance user experience and analyze website traffic patterns.",
                "You may request access to your personal data or ask for its deletion at any time."
            ],
            color: "primary-1"
        },
        refund: {
            title: "Refund Policy",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            summary: "Our policy outlines the terms under which refunds may be granted for our services.",
            highlights: [
                "Eligibility criteria for refunds",
                "Refund request process and timelines",
                "Non-refundable services and circumstances",
                "Processing time and refund methods"
            ],
            details: [
                "Refund requests must be submitted within 14 days of service completion.",
                "Digital products and completed work are generally non-refundable.",
                "Refunds may take 5-10 business days to process after approval.",
                "All refunds will be issued to the original payment method."
            ],
            color: "primary-1"
        }
    };

    return (
        <section className="container mx-auto px-6 py-20 bg-dark-2">
            <div className="w-[90%] lg:w-[80%] mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block text-primary-1 text-sm font-semibold mb-3 tracking-widest uppercase">
                        Legal Policies
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-1 mb-4">
                        Our <span className="text-primary-1">Policies</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-1 to-primary-2 mx-auto"></div>
                </div>
                
                <div className="flex flex-col gap-8">
                    {Object.entries(policies).map(([key, policy]) => (
                        <div 
                            key={key}
                            className={`bg-dark-3/70 border border-dark-4 rounded-xl p-6 hover:border-${policy.color} transition-all duration-1000 group shadow-lg hover:shadow-xl hover:shadow-dark-4/20`}
                        >
                            <div className="flex items-center gap-4 mb-4 cursor-pointer" onClick={() => togglePolicy(key)}>
                                <div className={`bg-${policy.color}/20 group-hover:bg-${policy.color}/30 p-3 rounded-lg transition-all duration-1000`}>
                                    {policy.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-light-1 flex-grow">{policy.title}</h3>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className={`h-6 w-6 text-${policy.color} transition-transform duration-1000 ${expandedPolicy === key ? 'rotate-180' : ''}`}
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            
                            <div className="text-light-2/90 pl-14">
                                <p className="mb-4">{policy.summary}</p>
                                <ul className="list-disc pl-5 space-y-2 mb-4">
                                    {policy.highlights.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                
                                {expandedPolicy === key && (
                                    <div className="mt-6 pt-6 border-t border-dark-4">
                                        <h4 className="font-semibold text-light-1 mb-3">Additional Details:</h4>
                                        <ul className="list-disc pl-5 space-y-2">
                                            {policy.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import React, { useState } from 'react';
import Modal from '@/Components/Modal';
import ContactDescription from '@/Components/ContactDescription';
import ContactInfo from '@/Components/ContactInfo';
import TalkToChatUser from '@/Components/TalkToChatUser';


export default function Contact({auth}) {
    const user = auth?.user;

    const { data, setData, post, processing, errors, reset } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        isNotRobot: false
    });

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.submit'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                reset();
                setShowSuccessModal(true);
            }
        });

    };

    const closeModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-1 via-dark-2 to-dark-3">
            <AuthenticatedLayout>
                <Head title="Contact Us" />
            </AuthenticatedLayout>

            <ContactDescription />

            {/* Section 2: Contact Info + Form */}
            <section id="contact-form" className="container w-[90%] mx-auto px-6 py-12 md:py-20">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: Contact Info */}
                    <ContactInfo />

                    {/* Right Column: Contact Form */}
                    <div className="lg:w-2/3 h-full">
                        <div className="bg-gradient-to-br from-dark-3/90 to-dark-2/90 rounded-xl shadow-2xl overflow-hidden border border-primary-3/30 backdrop-blur-sm">
                            <div className="px-8 py-6 bg-gradient-to-r from-primary-3/20 via-primary-2/20 to-primary-4/20 border-b border-primary-1/50">
                                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-primary-1/50">
                                    Send Us a Message
                                </h2>
                                <p className="text-light-3/80 text-sm mt-2">We'll get back to you within 24 hours</p>
                            </div>

                            <form onSubmit={submit} className="p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-light-2 text-sm font-medium mb-2">
                                            First Name <span className="text-primary-1">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={data.firstName}
                                            onChange={(e) => setData('firstName', e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg bg-dark-2/70 border border-primary-3/40 text-light-1 placeholder-light-3/60 focus:outline-none focus:ring-2 focus:ring-primary-2/60 focus:border-primary-3 transition-all duration-200"
                                            placeholder="John"
                                            required
                                        />
                                        {errors.firstName && (
                                            <p className="mt-1 text-sm text-primary-1 animate-pulse">{errors.firstName}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="lastName" className="block text-light-2 text-sm font-medium mb-2">
                                            Last Name <span className="text-primary-1">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={data.lastName}
                                            onChange={(e) => setData('lastName', e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg bg-dark-2/70 border border-primary-3/40 text-light-1 placeholder-light-3/60 focus:outline-none focus:ring-2 focus:ring-primary-2/60 focus:border-primary-3 transition-all duration-200"
                                            placeholder="Doe"
                                            required
                                        />
                                        {errors.lastName && (
                                            <p className="mt-1 text-sm text-primary-1 animate-pulse">{errors.lastName}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="mt-6">
                                        <label htmlFor="email" className="block text-light-2 text-sm font-medium mb-2">
                                            Email <span className="text-primary-1">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg bg-dark-2/70 border border-primary-3/40 text-light-1 placeholder-light-3/60 focus:outline-none focus:ring-2 focus:ring-primary-2/60 focus:border-primary-3 transition-all duration-200"
                                            placeholder="your@email.com"
                                            required
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-primary-1 animate-pulse">{errors.email}</p>
                                        )}
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="phone" className="block text-light-2 text-sm font-medium mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg bg-dark-2/70 border border-primary-3/40 text-light-1 placeholder-light-3/60 focus:outline-none focus:ring-2 focus:ring-primary-2/60 focus:border-primary-3 transition-all duration-200"
                                            placeholder="+1 (___) ___-____"
                                        />
                                        {errors.phone && (
                                            <p className="mt-1 text-sm text-primary-1 animate-pulse">{errors.phone}</p>
                                        )}
                                    </div>

                                </div>


                                <div className="mt-6">
                                    <label htmlFor="subject" className="block text-light-2 text-sm font-medium mb-2">
                                        Subject <span className="text-primary-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={data.subject}
                                        onChange={(e) => setData('subject', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-dark-2/70 border border-primary-3/40 text-light-1 placeholder-light-3/60 focus:outline-none focus:ring-2 focus:ring-primary-2/60 focus:border-primary-3 transition-all duration-200"
                                        placeholder="What's this about?"
                                        required
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-primary-1 animate-pulse">{errors.subject}</p>
                                    )}
                                </div>

                                <div className="mt-6">
                                    <label htmlFor="message" className="block text-light-2 text-sm font-medium mb-2">
                                        Message <span className="text-primary-1">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-dark-2/70 border border-primary-3/40 text-light-1 placeholder-light-3/60 focus:outline-none focus:ring-2 focus:ring-primary-2/60 focus:border-primary-3 transition-all duration-200"
                                        placeholder="Tell us about your project..."
                                        required
                                    ></textarea>
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-primary-1 animate-pulse">{errors.message}</p>
                                    )}
                                </div>

                                <div className="mt-6">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="isNotRobot"
                                                name="isNotRobot"
                                                type="checkbox"
                                                checked={data.isNotRobot}
                                                onChange={(e) => setData('isNotRobot', e.target.checked)}
                                                className="h-4 w-4 rounded bg-dark-2/70 border-primary-3/40 text-primary-1 focus:ring-primary-2/60"
                                                required
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="isNotRobot" className="text-light-2">
                                                I'm not a robot <span className="text-primary-1">*</span>
                                            </label>
                                        </div>
                                    </div>
                                    {errors.isNotRobot && (
                                        <p className="mt-1 text-sm text-primary-1 animate-pulse">{errors.isNotRobot}</p>
                                    )}
                                </div>

                                <div className="mt-8">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full px-6 py-3 bg-gradient-to-r from-primary-1 to-primary-3 text-light-1 rounded-lg font-bold shadow-lg hover:from-primary-2 hover:to-primary-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {processing ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Modal show={showSuccessModal} onClose={closeModal} maxWidth="md">
                <div className="text-center">
                    {/* Green checkmark with animation */}
                    <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-500/10 mb-6 relative">
                        <svg
                            className="h-12 w-12 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                                className="animate-draw-check"
                                style={{
                                    strokeDasharray: 24,
                                    strokeDashoffset: 24,
                                    animation: 'draw-check 0.6s ease-out forwards'
                                }}
                            />
                        </svg>
                        <div className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ping-slow opacity-0"></div>
                    </div>

                    {/* Title with gradient text */}
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-primary-1 mb-4">
                        Message Sent!
                    </h3>

                    {/* Description text */}
                    <p className="text-light-2/90 mb-8 text-lg">
                        Thank you for contacting us. Our team will get back to you within <span className="text-green-400 font-medium">24 hours</span>.
                    </p>

                    {/* Close button with proper spacing */}
                    <div className="mt-6"> {/* Added margin-top for spacing */}
                        <button
                            onClick={closeModal}
                            className="px-8 py-3 bg-gradient-to-r from-primary-1 to-primary-3 text-light-1 rounded-lg font-bold hover:from-primary-2 hover:to-primary-4 transition-all duration-300 shadow-lg hover:shadow-primary-1/20"
                        >
                            Got It!
                        </button>
                    </div>
                </div>
            </Modal>

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
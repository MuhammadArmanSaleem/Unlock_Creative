
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import React from 'react';
import TalkToChatUser from '@/Components/TalkToChatUser';


export default function Insights({ auth, services}) {
    const user = auth?.user;

    // Enhanced content with your brand colors
    const featuredInsights = [
        {
            id: 1,
            title: "Neuromorphic Design: The Future of UI in 2024",
            excerpt: "How brain-inspired interfaces are increasing user engagement by 47% and what it means for your digital products.",
            category: "UX Design",
            date: "June 2, 2024",
            readTime: "9 min read",
            image: "https://tse2.mm.bing.net/th/id/OIP.YdpxBPE9qr3sK6UhkIYgBgHaD3?pid=Api&P=0&h=220",
            badgeColor: "bg-primary-1/10 text-primary-2" // Using your primary colors
        },
        {
            id: 2,
            title: "WebGL Magic: 3D Experiences That Convert",
            excerpt: "Case study showing how interactive 3D increased e-commerce conversions by 32% for luxury brands.",
            category: "Development",
            date: "May 22, 2024",
            readTime: "14 min read",
            image: "https://tse3.mm.bing.net/th/id/OIP.NJn1j7BMdn6LmzGrmTX4zQHaEK?pid=Api&P=0&h=220",
            badgeColor: "bg-primary-3/10 text-primary-1"
        },
        {
            id: 3,
            title: "AI-Powered Personalization at Scale",
            excerpt: "Implementing machine learning for dynamic content that adapts to user behavior in real-time.",
            category: "Marketing",
            date: "May 15, 2024",
            readTime: "11 min read",
            image: "https://tse4.mm.bing.net/th/id/OIP.uoorexdE_jdJ8TYwaqp93QHaEr?pid=Api&P=0&h=220",
            badgeColor: "bg-primary-2/10 text-primary-3"
        }
    ];


    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-1 via-dark-2 to-dark-3">
            <AuthenticatedLayout>
                <Head title="Insights | Thought Leadership" />

                {/* Hero Section - Enhanced with gradient overlay */}
                <section className="relative h-[40rem] overflow-hidden mt-12">
                    <div className="absolute inset-0 bg-[url('/assets/images/insights-hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-1/95 via-dark-2/70 to-dark-3/90"></div>
                    <div className="relative h-full flex items-center">
                        <div className="container mx-auto px-6 text-center">
                            <span className="inline-block px-4 py-2 mb-6 bg-primary-1/20 text-primary-2 rounded-full text-sm font-medium">
                                Industry Insights
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold text-light-1 mb-6 leading-tight">
                                Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-primary-3">Vision</span> Meets Reality
                            </h1>
                            <p className="text-xl md:text-2xl text-light-2/80 max-w-3xl mx-auto mb-10">
                                Data-driven strategies, cutting-edge case studies, and actionable perspectives from the frontier of digital innovation.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button
                                    onClick={() => document.getElementById('featured-insights').scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-3 bg-gradient-to-r from-primary-1 to-primary-3 rounded-full text-light-1 font-medium hover:from-primary-2 hover:to-primary-4 transition-all duration-300 shadow-lg hover:shadow-primary-1/40"
                                >
                                    Explore Articles
                                </button>
                                <button className="px-8 py-3 border border-primary-3/40 text-light-1 rounded-full hover:border-primary-2 hover:text-primary-2 transition-colors duration-300">
                                    Watch Keynotes
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Insights - Cards with hover effects */}
                <section id="featured-insights" className="py-20 bg-gradient-to-br from-dark-2/80 via-dark-1/90 to-dark-3">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-light-1 mb-4">
                                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-primary-3">Research</span>
                            </h2>
                            <div className="w-32 h-1 bg-gradient-to-r from-primary-2 to-primary-3 mx-auto mb-6"></div>
                            <p className="text-lg text-light-2/80 max-w-2xl mx-auto">
                                Deep dives into the technologies shaping tomorrow's digital landscape
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {featuredInsights.map((insight) => (
                                <div
                                    key={insight.id}
                                    className="group relative h-full bg-dark-2/60 rounded-2xl overflow-hidden border border-primary-3/20 hover:border-primary-2/50 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-primary-1/20"
                                >
                                    <div className="h-64 overflow-hidden relative">
                                        <img
                                            src={insight.image}
                                            alt={insight.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark-1 to-transparent"></div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className={`px-3 py-1 ${insight.badgeColor} rounded-full text-xs font-semibold`}>
                                                {insight.category}
                                            </span>
                                            <span className="text-light-3/60 text-sm">
                                                {insight.date}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-light-1 mb-3 group-hover:text-primary-2 transition-colors duration-300">
                                            {insight.title}
                                        </h3>
                                        <p className="text-light-2/80 mb-5">{insight.excerpt}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-light-3/50 text-sm">{insight.readTime}</span>
                                            <Link
                                                href="#"
                                                className="inline-flex items-center text-primary-2 hover:text-primary-1 font-medium group/link"
                                            >
                                                Read Full Study
                                                <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trending Services Section with Clickable Items */}
                <section className="py-20 bg-gradient-to-br from-dark-3 via-dark-2 to-dark-1">
                    <div className="container mx-auto px-4">
                        <div className="bg-dark-2/50 rounded-2xl p-10 border border-primary-3/20">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-light-1 mb-4">
                                    Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-primary-3">Services</span>
                                </h2>
                                <div className="w-24 h-1 bg-gradient-to-r from-primary-2 to-primary-3 mx-auto rounded-full mb-4"></div>
                                <p className="text-light-2/80 max-w-2xl mx-auto">
                                    Explore our most popular service offerings this month
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6">
                                {services?.map((service, index) => {
                                    const serviceIcons = [
                                        '/assets/icons/1-01.png',
                                        '/assets/icons/1-02.png',
                                        '/assets/icons/1-03.png',
                                        '/assets/icons/1-04.png',
                                        '/assets/icons/1-05.png'
                                    ];
                                    const iconSrc = serviceIcons[index % serviceIcons.length];

                                    return (
                                        <Link
                                            key={service.id}
                                            href={route('portfolio')}  // or service.id depending on your route
                                            className="relative group group/topic overflow-hidden rounded-full px-8 py-4 bg-dark-1/70 border border-primary-3/30 hover:border-primary-2/60 transition-all duration-500 hover:shadow-lg hover:shadow-primary-1/20"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary-1/10 to-primary-3/10 opacity-0 group-hover/topic:opacity-100 transition-opacity duration-300"></div>
                                            <div className="relative z-10 flex items-center gap-4">
                                                {/* Service Icon Image */}
                                                <div className="w-10 h-10 flex items-center justify-center">
                                                    <img
                                                        src={iconSrc}
                                                        alt={service.title}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                {/* Service Title */}
                                                <div className="text-light-1 font-medium">{service.title}</div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                {/* All Insights - Magazine Layout */}
                <section className="py-20 bg-gradient-to-br from-dark-2 via-dark-1 to-dark-3">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-light-1 mb-4">
                                Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-primary-3">Archive</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-2 to-primary-3 mx-auto mb-6"></div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...featuredInsights, ...featuredInsights.slice().reverse()].map((insight, index) => (
                                <article
                                    key={`all-${index}`}
                                    className="group bg-dark-2/60 rounded-xl overflow-hidden border border-primary-3/20 hover:border-primary-2/50 transition-all duration-300"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={insight.image}
                                            alt={insight.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className={`px-2 py-1 ${insight.badgeColor} rounded-full text-xs font-medium`}>
                                                {insight.category}
                                            </span>
                                            <span className="text-light-3/50 text-xs">{insight.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-light-1 mb-2 group-hover:text-primary-2 transition-colors duration-300">
                                            {insight.title}
                                        </h3>
                                        <p className="text-light-2/70 text-sm mb-4 line-clamp-2">{insight.excerpt}</p>
                                        <Link
                                            href="#"
                                            className="inline-flex items-center text-sm text-primary-2 hover:text-primary-1 font-medium"
                                        >
                                            Continue Reading
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                    </div>
                </section>


                {auth?.user ? (
                     <TalkToChatUser currentUserId={auth.user.id} />
                ) : (
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-bold text-light-1 mb-4">Want Full Access?</h2>
                        <p className="text-light-2/80 max-w-xl mx-auto mb-6">Create an account to bookmark articles and receive personalized recommendations.</p>
                        <button className="px-8 py-3 bg-gradient-to-r from-primary-1 to-primary-3 rounded-full text-light-1 font-medium hover:from-primary-2 hover:to-primary-4 transition-all duration-300">
                            Join Our Community
                        </button>
                    </div>
                )}

            </AuthenticatedLayout>

            <Footer />
        </div>
    );
}
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import React, { useState, useEffect } from 'react';
import ServicePortfolio from '@/Components/ServicesPortfolio';
import AboutHeroSection from '@/Components/AboutHeroSection';
import AboutWhoWeAreSection from '@/Components/AboutWhoWeAreSection';
import AboutMissionAndVision from '@/Components/AboutMissionAndVision';
import ProjectsSlider from '@/Components/ProjectsSlider';
import ClientsSuccessStories from '@/Components/ClientsSuccessStories';
import Testimonials from '@/Components/Testimonials';
import FAQs from '@/Components/FAQs';
import PoliciesSection from '@/Components/PolicySection';
import TalkToChat from '@/Components/TalkToChatUser';
import TalkToChatUser from '@/Components/TalkToChatUser';


const chunkArray = (arr, size) => {
    if (!arr || !Array.isArray(arr)) return [];
    return arr.reduce((acc, _, i) => {
        if (i % size === 0) acc.push(arr.slice(i, i + size));
        return acc;
    }, []);
};
export default function About({auth, services }) {
    const { categories = [] } = usePage().props;
    const [chunkSize, setChunkSize] = useState(1);
    const user = auth?.user;


    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            if (width >= 1280) setChunkSize(3);
            else if (width >= 1024) setChunkSize(3);
            else if (width >= 768) setChunkSize(2);
            else if (width >= 640) setChunkSize(2);
            else setChunkSize(1);
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const slides = chunkArray(categories, chunkSize);

    // Debug logs
    console.log('categories:', categories);
    console.log('slides:', slides);


    // Sample data - replace with your actual data
    const aboutData = {
        subtitle: "Innovative Solutions for Modern Businesses",
        description: "We are a creative digital agency specializing in innovative solutions that transform businesses. With over a decade of experience, our team delivers exceptional results through cutting-edge technology and design.",
        stats: [
            { value: "7+", label: "Years Experience" },
            { value: "100+", label: "Projects Completed" },
            { value: "95%", label: "Client Satisfaction" }
        ],
        mission: "To empower businesses through innovative digital solutions that drive growth and create meaningful connections with their audience.",
        vision: "To be the most trusted digital partner for businesses worldwide, recognized for our creativity, technical excellence, and client-focused approach.",
        team: [
            { name: "John Doe", role: "CEO & Founder", image: "/assets/images/team1.jpg" },
            { name: "Jane Smith", role: "Creative Director", image: "/assets/images/team2.jpg" },
            { name: "Mike Johnson", role: "Lead Developer", image: "/assets/images/team3.jpg" }
        ],
        testimonials: [
            { name: "Sarah Williams", company: "TechCorp", text: "Their team delivered beyond our expectations. The project was completed on time and exceeded all our KPIs.", rating: 5 },
            { name: "David Chen", company: "Innovate Inc", text: "Exceptional service and attention to detail. We've seen a 40% increase in engagement since launch.", rating: 5 },
            { name: "Emily Rodriguez", company: "Global Solutions", text: "Professional, creative, and reliable. They've become our go-to digital partner.", rating: 4 }
        ],
        faqs: [
            {
                question: "What services does Unloock Creatives offer?",
                answer: "We specialize in end-to-end digital solutions including: UI/UX Design, Web & App Development, 2D/3D Animation, E-Book Design & Publishing, Brand Identity Design (logos, style guides), and Digital Marketing (SEO, Social Media, Ads)."
            },
            {
                question: "How experienced is your animation team?",
                answer: "Our animation team has 7+ years creating explainer videos, motion graphics, and 3D product animations for industries like education, healthcare, and e-commerce. We use tools like After Effects, Blender, and Maya."
            },
            {
                question: "Do you design interactive e-books?",
                answer: "Yes! We create responsive e-books with animations, embedded videos, and clickable elements that work across Kindle, Apple Books, and web readers. Our designs enhance readability while maintaining publishing standards."
            },
            {
                question: "What's included in your branding packages?",
                answer: "Our branding solutions cover: Logo Design, Brand Guidelines (colors/typography), Stationery Design, Social Media Kits, and Brand Voice Development. We deliver 3+ logo concepts with unlimited revisions."
            },
            {
                question: "Can you handle both design and development?",
                answer: "Absolutely. We're a full-stack team - our designers and developers collaborate closely to ensure pixel-perfect implementation of your website/app with optimized performance and clean code architecture."
            },
            {
                question: "How do you approach social media marketing?",
                answer: "We create platform-specific strategies with: Content Calendars, Targeted Ads, Influencer Collaborations, and Performance Analytics. For visual brands, we combine motion graphics with trend-focused copywriting."
            },
            {
                question: "What file formats do you deliver for animations?",
                answer: "We provide MP4, MOV, GIF, and Lottie files (for web/mobile apps) with optional source files. All deliverables are optimized for web, social media, or broadcast standards as needed."
            },
            {
                question: "Do you offer 3D product modeling for e-commerce?",
                answer: "Yes! We create photorealistic 3D product renders and 360° spin animations that boost conversion rates by 25-40%. Perfect for Shopify stores and Amazon listings."
            },
            {
                question: "How long does a typical website project take?",
                answer: "Basic websites: 4-6 weeks | Complex web apps: 8-12 weeks. We move faster for landing pages (7-10 days). Animation projects vary by length (1-2 weeks per minute of animation)."
            },
            {
                question: "What makes your e-book designs stand out?",
                answer: "We combine editorial design principles with interactive elements: Custom Illustrations, Animated Page Transitions, Embedded Quizzes, and AR-enhanced covers for physical books."
            }
        ]
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-1 via-dark-2 to-dark-1">
            <AuthenticatedLayout>
                <Head title="About Us" />

                <AboutHeroSection aboutData={aboutData} />

                <AboutWhoWeAreSection aboutData={aboutData} />

                <AboutMissionAndVision aboutData={aboutData} />

                <ServicePortfolio services={services} />

                <ProjectsSlider categories={categories} />

                <ClientsSuccessStories aboutData={aboutData} />

                <Testimonials aboutData={aboutData} />

                <FAQs aboutData={aboutData} />

                <PoliciesSection />



            </AuthenticatedLayout>

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
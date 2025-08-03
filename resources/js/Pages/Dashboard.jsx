import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import HomeTopContent from '@/Components/HomeTopContent';
import { Head } from '@inertiajs/react';
import ServicesSection from '@/Components/ServicesHome';
import WhatMakesUsStandOut from '@/Components/WhatMakesUsStandOut';
import ProjectInMind from '@/Components/ProjectInMind';
import ProjectsCarousel from '@/Components/ProjectsCarousel';
import Packages from '@/Components/Packages';
import Footer from '@/Components/Footer';
import TalkToChatUser from '@/Components/TalkToChatUser';

export default function Dashboard({ auth, services }) {
    const user = auth?.user;

    return (
        <div>
            <div className='bg-[length:110%_100%] bg-left bg-no-repeat bg-[url("/assets/images/Home_Page_Bg.jpg")] bg-blend-multiply '>
                <AuthenticatedLayout>
                    <Head title="Dashboard" />
                    <HomeTopContent />
                </AuthenticatedLayout>
            </div>

            <ServicesSection services={services} />
            <WhatMakesUsStandOut />
            <ProjectInMind />
            <ProjectsCarousel />
            <Packages />

            {auth?.user?.role === 'user' ? (
                <>
                    <TalkToChatUser currentUserId={auth.user.id} />
                </>
            ): (
                <div className="text-center mt-10">
                    <h2 className="text-2xl font-bold mb-4">Welcome, {user?.name}!</h2>
                    <p className="text-gray-600">Explore our services and find the perfect solution for your needs.</p>
                </div>
            )}
            <Footer />
        </div>
    );
}

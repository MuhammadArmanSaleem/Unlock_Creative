import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import React from 'react';
import CategoriesSection from '@/Components/CategoriesPortfolio';
import ServicesSection from '@/Components/ServicesPortfolio';
import PortfolioIntro from '@/Components/PortfolioIntro';
import TalkToChatUser from '@/Components/TalkToChatUser';

export default function Portfolio({ auth, categories, services }) {
    const user = auth?.user;
    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-1 via-dark-2 to-dark-3">
            <AuthenticatedLayout>
                <Head title="Portfolio" />

                <PortfolioIntro />


                <CategoriesSection categories={categories} />


                <ServicesSection services={services} />

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
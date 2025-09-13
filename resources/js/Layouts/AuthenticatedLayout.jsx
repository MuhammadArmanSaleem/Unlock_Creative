import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const { auth, services } = usePage().props;
    const user = auth?.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const selectedService = route().current('services')
        ? services?.find(s => s.id === usePage().props.service?.id)
        : null;

    return (
        <div className="relative bg-transparent">
            <nav className="border-b border-transparent bg-transparent relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex h-24 pt-20">
                        <div className="flex w-[75%] lg:mx-auto items-center justify-between">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo />
                                </Link>
                            </div>

                            <div className="hidden sm:space-x-3 md:space-x-6 sm:-my-px sm:ms-10 sm:flex">
                                {auth?.user?.role === 'admin' ? (
                                    <>

                                        <NavLink href={route('services.index')} active={route().current('services.index')} className="text-white hover:text-white/80 transition">
                                            Services
                                        </NavLink>
                                        <NavLink href={route('categories.index')} active={route().current('categories.index')} className="text-white hover:text-white/80 transition">
                                            Categories
                                        </NavLink>
                                        <NavLink href={route('projects.index')} active={route().current('projects.index')} className="text-white hover:text-white/80 transition">
                                            Projects
                                        </NavLink>
                                        <NavLink href={route('chat.UserMessagesView')} active={route().current('chat.UserMessagesView')} className="text-white hover:text-white/80 transition">
                                            Messages
                                        </NavLink>
                                        <NavLink href={route('testimonials.index')} active={route().current('testimonials.index')} className="text-white hover:text-white/80 transition">
                                            Testimonials
                                        </NavLink>
                                        
                                         <Dropdown>
                                            <Dropdown.Trigger>
                                                <button type="button" className="inline-flex items-center border-b-2 border-transparent py-2 text-sm font-medium text-white hover:border-white focus:outline-none transition">
                                                    Admin
                                                </button>
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Dropdown.Link href={route('logout')} method="post" as="button">Log Out</Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </>
                                ) : auth?.user?.role === 'user' ? (
                                    <>
                                        <NavLink href={route('dashboard')} active={route().current('dashboard')} className="text-white hover:text-white/80 transition">
                                            Home
                                        </NavLink>
                                        <NavLink href={route('about')} active={route().current('about')} className="text-white hover:text-white/80 transition">
                                            About
                                        </NavLink>

                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center border-b-2 border-transparent py-2 text-sm font-medium text-white hover:text-primary-2 hover:border-primary-2 focus:outline-none transition-all duration-300 group"
                                                >
                                                    <span className="relative">
                                                        Services
                                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-1 to-primary-3 transition-all duration-300 group-hover:w-full"></span>
                                                    </span>
                                                    <svg
                                                        className="ml-1.5 h-4 w-4 text-primary-2 group-hover:text-primary-1 transition-transform duration-300 group-hover:rotate-180"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content className="w-64 py-2 bg-dark-2 border border-primary-3/30 rounded-lg shadow-xl backdrop-blur-sm">
                                                <div className="space-y-1">
                                                    {services?.map((service) => {
                                                        const firstCategoryId = service.categories?.[0]?.id || '';
                                                        return (
                                                            <Dropdown.Link
                                                                key={service.id}
                                                                href={route('services', firstCategoryId)}
                                                                className={`px-4 py-2.5 text-light-1 transition-all duration-200 flex items-center ${route().current('services') && selectedService?.id === service.id
                                                                        ? 'bg-gradient-to-r from-primary-1/20 to-primary-3/20 text-primary-2 font-medium'
                                                                        : 'hover:bg-dark-3/50 hover:text-primary-2'
                                                                    }`}
                                                            >
                                                                <div className="w-2 h-2 mr-3 rounded-full bg-primary-2"></div>
                                                                <span className="truncate">{service.title}</span>
                                                                {service.categories?.length > 0 && (
                                                                    <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-dark-3 text-light-2">
                                                                        {service.categories.length}
                                                                    </span>
                                                                )}
                                                            </Dropdown.Link>
                                                        );
                                                    })}
                                                </div>

                                                <div className="mt-2 pt-2 border-t border-primary-3/20">
                                                    <Dropdown.Link
                                                        href={route('services')}
                                                        className="px-4 py-2 text-sm text-primary-2 hover:text-primary-1 font-medium flex items-center justify-center"
                                                    >
                                                        View All Services
                                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </Dropdown.Link>
                                                </div>
                                            </Dropdown.Content>
                                        </Dropdown>

                                        <NavLink href={route('portfolio')} active={route().current('portfolio')} className="text-white hover:text-white/80 transition">
                                            Portfolio
                                        </NavLink>
                                        <NavLink href={route('insights')} active={route().current('insights')} className="text-white hover:text-white/80 transition">
                                            Insights
                                        </NavLink>
                                        <NavLink href={route('contact')} active={route().current('contact')} className="text-white hover:text-white/80 transition">
                                            Contact
                                        </NavLink>

                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <button type="button" className="inline-flex items-center border-b-2 border-transparent py-2 text-sm font-medium text-white hover:border-white focus:outline-none transition">
                                                    {user.name}
                                                </button>
                                            </Dropdown.Trigger>
                                            <Dropdown.Content>
                                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                                <Dropdown.Link href={route('logout')} method="post" as="button">Log Out</Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </>
                                ) : (
                                    <>
                                        <NavLink href={route('login')} className="text-white hover:text-white/80 transition">
                                            Login
                                        </NavLink>
                                        <NavLink href={route('register')} className="text-white hover:text-white/80 transition">
                                            Register
                                        </NavLink>

                                    </>

                                )}
                            </div>
                        </div>

                        {/* Mobile menu toggle */}
                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    <path className={showingNavigationDropdown ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${showingNavigationDropdown ? 'block' : 'hidden'} sm:hidden bg-[#0b0b1a] text-white`}>
                    <div className="space-y-1 px-4 pt-4 pb-2">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>Home</ResponsiveNavLink>
                        <ResponsiveNavLink href={route('about')} active={route().current('about')}>About</ResponsiveNavLink>
                        <ResponsiveNavLink href={route('services')} active={route().current('services')}>Services</ResponsiveNavLink>
                        <ResponsiveNavLink href={route('portfolio')} active={route().current('portfolio')}>Portfolio</ResponsiveNavLink>
                        <ResponsiveNavLink href={route('insights')} active={route().current('insights')}>Insights</ResponsiveNavLink>
                        <ResponsiveNavLink href={route('contact')} active={route().current('contact')}>Contact</ResponsiveNavLink>
                    </div>

                    {user && (
                        <div className="border-t border-gray-700 px-4 py-4">
                            <div className="text-base font-medium">{user.name}</div>
                            <div className="text-sm text-gray-400">{user.email}</div>
                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                                <ResponsiveNavLink method="post" href={route('logout')} as="button">Log Out</ResponsiveNavLink>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
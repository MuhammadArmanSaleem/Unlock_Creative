import React from "react";
import { Link } from "@inertiajs/react";
import { usePage } from '@inertiajs/react';

const Footer = () => {
    const {  services } = usePage().props;
    return (
        <div className='bg-dark-1 text-light-1'>
            <footer className="w-[80%] mx-auto relative px-6 py-12 sm:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between items-start">
                    {/* First Column - Logo and Social */}
                    <div className="space-y-4">
                        <img src="/assets/logos/unlock_creatives_logo_light.png" alt="Unlock Creatives Logo" className="w-36" />
                        <p className="text-xs max-w-sm">
                            Transform your online presence with cutting-edge design, powerful strategies, and innovative solutions.
                            Elevate your brand with stunning visuals and expert marketing tailored for success!
                        </p>

                        <div className="flex space-x-4 text-sm mt-2 text-gray-400">
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>

                        <div className="flex items-center space-x-4 mt-4">
                            <h5 className='text-xs'><span className='text-green text-xl'>★</span>TrustPilot</h5>
                            <h2 className='text-white text-md'>Clutch</h2>
                        </div>
                    </div>

                    {/* Second Column - Services */}
                    <div className="space-y-4 ml-10">
                        <h3 className="text-lg font-bold text-light-1">Our Services</h3>
                        <ul className="space-y-2 text-sm">
                            {services.map((service) => {
                               const firstCategoryId = service.categories?.[0]?.id || ''; 
                               return (
                                   <li key={service.id}>
                                       <Link href={route('services', firstCategoryId)} className="hover:text-primary-1 transition-colors">
                                           {service.title}
                                       </Link>
                                   </li>
                               );
                            })}
                        </ul>
                    </div>

                    {/* Third Column - Quick Links */}
                    <div className="space-y-4 ml-10">
                        <h3 className="text-lg font-bold text-light-1">Unlock Creatives</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-primary-1 transition-colors">Insights</Link></li>
                            <li><Link href="#" className="hover:text-primary-1 transition-colors">Testimonials</Link></li>
                            <li><Link href="#" className="hover:text-primary-1 transition-colors">Our Work</Link></li>
                            <li><Link href="#" className="hover:text-primary-1 transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Fourth Column - Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-light-1">Contact Us</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start space-x-3">
                                <i className="fas fa-envelope mt-1 text-primary-1"></i>
                                <span >info@unlockcreatives.com</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <i className="fas fa-phone-alt mt-1 text-primary-1"></i>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <i className="fas fa-map-marker-alt mt-1 text-primary-1"></i>
                                <span>123 Creative Lane, Design District, New York, NY 10001</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='my-6 border-light-1/20'></hr>
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-light-1">
                    <p className="text-light-1/80">Copyright © 2025 Unlock Creatives</p>
                    <div className="flex flex-wrap justify-center gap-x-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:underline hover:text-primary-1">Terms and Conditions</Link>
                        <Link href="#" className="hover:underline hover:text-primary-1">Privacy Policy</Link>
                        <Link href="#" className="hover:underline hover:text-primary-1">Refund Policy</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
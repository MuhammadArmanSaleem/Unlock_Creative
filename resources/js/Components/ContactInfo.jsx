import { Link } from '@inertiajs/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';


export default function ContactInfo() {
    return (
        <div className="lg:w-1/3 h-full">
            <div className="bg-gradient-to-br from-dark-3/90 to-dark-2/90 rounded-xl shadow-2xl p-8 border border-primary-3/30 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-light-1 mb-6">
                    Our <span className="text-primary-1">Contact</span> Information
                </h2>

                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="bg-primary-1/20 p-3 rounded-lg mr-4">
                            <FaEnvelope className="text-light-1 text-xl" />
                        </div>
                        <div>
                            <h3 className="text-light-2 font-medium mb-1">Email</h3>
                            <a href="mailto:contact@unloockcreatives.com" className="text-light-1 hover:text-primary-1 transition-colors">
                                contact@unloockcreatives.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-primary-1/20 p-3 rounded-lg mr-4">
                            <FaPhone className="text-light-1 text-xl" />
                        </div>
                        <div>
                            <h3 className="text-light-2 font-medium mb-1">Phone</h3>
                            <a href="tel:+1234567890" className="text-light-1 hover:text-primary-1 transition-colors">
                                +1 (234) 567-890
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="bg-primary-1/20 p-3 rounded-lg mr-4">
                            <FaMapMarkerAlt className="text-light-1 text-xl" />
                        </div>
                        <div>
                            <h3 className="text-light-2 font-medium mb-1">Address</h3>
                            <p className="text-light-1">
                                123 Creative Lane<br />
                                Design District, CA 90210<br />
                                United States
                            </p>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-primary-3/30">
                        <h3 className="text-light-2 font-medium mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-dark-2/70 hover:bg-primary-1/20 p-3 rounded-lg transition-all duration-300 group">
                                <FaInstagram className="text-light-1 group-hover:text-primary-1 text-xl" />
                            </a>
                            <a href="#" className="bg-dark-2/70 hover:bg-primary-1/20 p-3 rounded-lg transition-all duration-300 group">
                                <FaFacebook className="text-light-1 group-hover:text-primary-1 text-xl" />
                            </a>
                            <a href="#" className="bg-dark-2/70 hover:bg-primary-1/20 p-3 rounded-lg transition-all duration-300 group">
                                <FaLinkedin className="text-light-1 group-hover:text-primary-1 text-xl" />
                            </a>
                            <a href="#" className="bg-dark-2/70 hover:bg-primary-1/20 p-3 rounded-lg transition-all duration-300 group">
                                <FaYoutube className="text-light-1 group-hover:text-primary-1 text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import { Link } from '@inertiajs/react';

export default function ContactDescription() {
    return (<section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/contact_bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-6 py-12 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-light-1 mb-6">
                    Get in <span className="text-transparent bg-clip-text bg-primary-1">Touch</span>
                </h1>
                <p className="text-lg text-light-2/90 max-w-3xl mx-auto mb-8">
                    We're here to help and answer any questions you might have. Whether you're looking to start a new project,
                    need support for an existing one, or just want to learn more about our services, our team is ready to assist you.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link
                        href="#contact-form"
                        className="px-6 py-3 bg-gradient-to-r from-primary-2 via-primary-1 to-primary-2 text-light-1 rounded-lg font-medium hover:from-primary-2 hover:to-primary-4 transition-all duration-300"
                    >
                        Contact Us Now
                    </Link>
                    <Link
                        href="/services"
                        className="px-6 py-3 border border-primary-3 text-light-1 rounded-lg font-medium hover:bg-primary-1/10 transition-all duration-300"
                    >
                        Explore Services
                    </Link>
                </div>
            </div>
        </div>
    </section>);
}
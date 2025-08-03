import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-dark-1/90 to-dark-3/90">
            <div className="w-full flex flex-col items-center">
                <Link href="/" className="mt-10 mb-4">
                    <ApplicationLogo className=" fill-current mx-auto" />
                </Link>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
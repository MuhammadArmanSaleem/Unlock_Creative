import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-1 via-dark-2 to-dark-3">
            <GuestLayout>
                <Head title="Email Verification" />
                
                <div className="container mx-auto p-4">
                    <div className="flex justify-center">
                        <div className="w-full max-w-lg">
                            <div className="bg-gradient-to-br from-dark-3/90 to-dark-2/90 rounded-xl shadow-2xl overflow-hidden border border-primary-3/30 backdrop-blur-sm">
                                {/* Form Header with Gradient */}
                                <div className="px-8 py-4 bg-gradient-to-r from-primary-3/20 via-primary-2/20 to-primary-4/20 border-b border-primary-1/50">
                                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-primary-1/50">
                                        Verify Email
                                    </h2>
                                    <p className="text-light-3/80 text-sm mt-1">Complete your registration</p>
                                </div>

                                {/* Form Body */}
                                <div className="p-6 bg-gradient-to-r from-primary-3/20 via-primary-2/20 to-primary-4/20">
                                    <div className="mb-4 text-sm text-light-2">
                                        Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
                                    </div>

                                    {status === 'verification-link-sent' && (
                                        <div className="mb-4 text-sm font-medium text-primary-1 animate-pulse">
                                            A new verification link has been sent to the email address you provided during registration.
                                        </div>
                                    )}

                                    <form onSubmit={submit} className="mt-6">
                                        <div className="flex items-center justify-between">
                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="px-6 py-2 bg-gradient-to-r from-primary-1 via-primary-2 to-primary-3 hover:from-primary-2 hover:via-primary-3 hover:to-primary-4 text-light-1 rounded-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                            >
                                                {processing ? (
                                                    <span className="flex items-center">
                                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Sending...
                                                    </span>
                                                ) : (
                                                    'Resend Verification Email'
                                                )}
                                            </button>

                                            <Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                                className="text-sm text-primary-2 hover:text-primary-1 underline focus:outline-none focus:ring-2 focus:ring-primary-2/60 focus:ring-offset-2 focus:ring-offset-dark-3 transition-colors duration-200"
                                            >
                                                Log Out
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GuestLayout>
        </div>
    );
}
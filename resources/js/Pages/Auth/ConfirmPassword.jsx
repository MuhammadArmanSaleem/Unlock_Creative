import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-1 via-dark-2 to-dark-3">
            <GuestLayout>
                <Head title="Confirm Password" />
                
                <div className="container mx-auto p-4">
                    <div className="flex justify-center">
                        <div className="w-full max-w-lg">
                            <div className="bg-gradient-to-br from-dark-3/90 to-dark-2/90 rounded-xl shadow-2xl overflow-hidden border border-primary-3/30 backdrop-blur-sm">
                                {/* Form Header with Gradient */}
                                <div className="px-8 py-4 bg-gradient-to-r from-primary-3/20 via-primary-2/20 to-primary-4/20 border-b border-primary-1/50">
                                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-primary-1/50">
                                        Confirm Password
                                    </h2>
                                    <p className="text-light-3/80 text-sm mt-1">Secure area verification</p>
                                </div>

                                {/* Form Body */}
                                <form onSubmit={submit} className="p-6 bg-gradient-to-r from-primary-3/20 via-primary-2/20 to-primary-4/20">
                                    <div className="mb-4 text-sm text-light-3">
                                        This is a secure area of the application. Please confirm your password before continuing.
                                    </div>

                                    {/* Password Field */}
                                    <div className="mb-6">
                                        <label htmlFor="password" className="block text-light-2 text-sm font-medium pl-1 mb-1">
                                            Password <span className="text-primary-1">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg bg-dark-2/70 border border-primary-3/40 text-light-1 placeholder-light-3/60 focus:outline-none focus:ring-2 focus:ring-primary-2/60 focus:border-primary-3 transition-all duration-200"
                                            placeholder="Enter your password"
                                            autoComplete="current-password"
                                            autoFocus
                                            required
                                        />
                                        {errors.password && (
                                            <p className="mt-1 text-sm text-primary-1 animate-pulse">{errors.password}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full px-8 py-2 bg-gradient-to-l from-primary-1 via-primary-2 to-primary-3 hover:from-primary-2 hover:via-primary-3 hover:to-primary-4 text-light-1 rounded-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {processing ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Verifying...
                                            </span>
                                        ) : (
                                            'Confirm Password'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </GuestLayout>
        </div>
    );
}
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-1 via-dark-2 to-dark-3">

        <AuthenticatedLayout>
            <Head title="Profile" />

            <div className="min-h-screen bg-gradient-to-br from-dark-1 via-dark-2 to-dark-3 py-12">
                <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
                    {/* Profile Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-primary-3 mb-4">
                            Profile Settings
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-2 to-primary-3 mx-auto rounded-full"></div>
                    </div>

                    {/* Update Profile Information */}
                    <div className="bg-dark-2/70 backdrop-blur-sm rounded-2xl p-6 border border-primary-3/20 shadow-lg">
                        <h2 className="text-2xl font-bold text-light-1 mb-6 flex items-center">
                            <span className="w-2 h-8 bg-gradient-to-b from-primary-1 to-primary-3 mr-3 rounded-full"></span>
                            Profile Information
                        </h2>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="space-y-6"
                        />
                    </div>

                    {/* Update Password */}
                    <div className="bg-dark-2/70 backdrop-blur-sm rounded-2xl p-6 border border-primary-3/20 shadow-lg">
                        <h2 className="text-2xl font-bold text-light-1 mb-6 flex items-center">
                            <span className="w-2 h-8 bg-gradient-to-b from-primary-1 to-primary-3 mr-3 rounded-full"></span>
                            Update Password
                        </h2>
                        <UpdatePasswordForm className="space-y-6" />
                    </div>

                    {/* Delete Account */}
                    <div className="bg-dark-2/70 backdrop-blur-sm rounded-2xl p-6 border border-primary-3/20 shadow-lg">
                        <h2 className="text-2xl font-bold text-light-1 mb-6 flex items-center">
                            <span className="w-2 h-8 bg-gradient-to-b from-red-400 to-red-600 mr-3 rounded-full"></span>
                            Delete Account
                        </h2>
                        <p className="text-light-2/80 mb-6">
                            Once your account is deleted, all of its resources and data will be permanently deleted.
                            Before deleting your account, please download any data or information that you wish to retain.
                        </p>
                        <DeleteUserForm className="space-y-6" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
        </div>
    );
}
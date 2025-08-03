import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link, useForm } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import ConfirmationModal from '@/Components/ConfirmationModal';

export default function ProjectsShow() {
    const { categories } = usePage().props;
    const { services } = usePage().props;
    const { projects } = usePage().props;
    const [showModal, setShowModal] = useState(false);
    const [projectToDelete, setProjectToDelete] = useState(null);
    const { delete: destroy } = useForm();

    const handleDelete = () => {
        if (projectToDelete) {
            destroy(route('projects.destroy', projectToDelete.id), {
                onSuccess: () => {
                    setShowModal(false);
                    setProjectToDelete(null);
                },
                onError: () => {
                    alert('Something went wrong while deleting the project.');
                }
            });
        }
    };

    return (
        <div className="bg-gradient-to-br from-dark-1 to-dark-2 min-h-screen">
            <AuthenticatedLayout>
                <Head title="Projects List" />
            </AuthenticatedLayout>

            <div className="justify-center items-center py-8 mt-10">
                <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-1 via-primary-1/90 to-primary-1 mb-6">
                    Projects List
                </h2>

                <div className='w-[90%] mx-auto flex justify-end my-6'>
                    <Link
                        href={route('projects.create')}
                        className="px-8 py-2.5 bg-gradient-to-r from-primary-1 via-primary-2 to-primary-3 hover:from-primary-2 hover:via-primary-3 hover:to-primary-4 text-light-1 rounded-lg text-sm font-bold shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                    >
                        Add New Project
                    </Link>
                </div>

                <div className="container w-[90%] mx-auto overflow-hidden bg-gradient-to-br from-dark-2/80 via-dark-3/90 to-dark-2/80 rounded-xl shadow-2xl border border-primary-3/30 backdrop-blur-sm">
                    <table className="w-full table-auto text-sm text-left text-light-2">
                        <thead>
                            <tr className="bg-gradient-to-r from-dark-1/60 via-dark-1/40 to-dark-1/60 border-b border-primary-3/30">
                                <th className="px-6 py-4 text-light-2 font-bold">Image</th>
                                <th className="px-6 py-4 text-light-2 font-bold">Category</th>
                                <th className="px-6 py-4 text-light-2 font-bold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => {
                                const matchedCategory = categories.find(category => category.id === project.category_id);

                                return (
                                    <tr 
                                        key={project.id} 
                                        className="border-b border-primary-3/30 hover:bg-dark-2/50 transition-all duration-200"
                                    >
                                        <td className="px-6 py-4">
                                            <img
                                                src={`/assets/projects/${project.image}`}
                                                alt={project.title}
                                                className="w-16 h-12 object-cover rounded-md border border-primary-3/40"
                                            />
                                        </td>
                                        
                                        <td className="px-6 py-4">{matchedCategory ? matchedCategory.title : 'N/A'}</td>
                                        <td className="px-6 py-4 space-x-2">
                                            <Link
                                                href={route('projects.edit', project.id)}
                                                className="px-6 py-2.5 text-light-3 hover:text-lime rounded-lg text-sm font-medium transition-all duration-200 hover:bg-dark-2/50"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    setProjectToDelete(project);
                                                    setShowModal(true);
                                                }}
                                                className=" px-6 py-2.5 text-light-3 hover:text-primary-1 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-dark-2/50"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                
            </div>

            <ConfirmationModal
                show={showModal}
                title="Confirm Deletion"
                message="Are you sure you want to delete this Project?"
                onConfirm={handleDelete}
                onCancel={() => {
                    setShowModal(false);
                    setProjectToDelete(null);
                }}
            />
            <Footer />
        </div>
    );
}
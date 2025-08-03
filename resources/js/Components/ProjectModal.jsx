import React from 'react';
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectsModal({ isOpen, onClose, projects }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-1/90 backdrop-blur-md transition-opacity duration-300">
            <div className="relative w-[90vw] max-w-6xl h-[85vh] bg-gradient-to-br from-dark-2 to-dark-3 rounded-2xl shadow-2xl border border-dark-4 overflow-hidden transform transition-all duration-300 scale-[0.98] hover:scale-100">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-dark-4/80 hover:bg-primary-1/20 text-light-2 hover:text-primary-1 transition-all duration-300 hover:rotate-90"
                    aria-label="Close modal"
                >
                    <FiX size={24} />
                </button>

                <div className="h-full overflow-y-auto  scrollbar-thin scrollbar-thumb-primary-3/80 scrollbar-track-dark-3 px-8 py-10 space-y-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-light-1 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-1 to-primary-2">
                            Projects Showcase
                        </h2>
                        <p className="text-light-3 max-w-2xl mx-auto">
                            Explore my collection of work. Each project represents unique challenges and solutions.
                        </p>
                    </div>

                    {projects.length > 0 ? (
                        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group bg-dark-4 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-dark-3 hover:border-primary-2/30 hover:-translate-y-1"
                                >
                                    <div className="relative overflow-hidden h-full">
                                        <img
                                            src={`/assets/projects/${project.image}`}
                                            alt={project.title}
                                            className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-4/90 to-transparent opacity-20 group-hover:opacity-0 transition-opacity duration-300 flex items-end p-4">
                                            <div className="flex gap-3 flex-wrap">
                                                {project.techStack?.map((tech, index) => (
                                                    <span key={index} className="text-xs bg-dark-2/80 text-light-2 px-2 py-1 rounded">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col gap-3">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-semibold text-light-1">{project.title}</h3>
                                            <div className="flex gap-3">
                                                {project.link && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-light-3 hover:text-primary-1 transition-colors"
                                                        aria-label="Live Demo"
                                                    >
                                                        <FiExternalLink size={18} />
                                                    </a>
                                                )}
                                                {project.repo && (
                                                    <a
                                                        href={project.repo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-light-3 hover:text-primary-1 transition-colors"
                                                        aria-label="GitHub Repository"
                                                    >
                                                        <FiGithub size={18} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-60 animate-pulse">
                            <div className="text-center max-w-md">
                                <div className="text-6xl mb-4">😕</div>
                                <h3 className="text-2xl font-bold text-light-1 mb-3">No Projects Found</h3>
                                <p className="text-light-3 mb-6">We're currently working on new projects for this category. Check back soon!</p>
                                <button
                                    onClick={onClose}
                                    className="px-8 py-3 bg-gradient-to-r from-primary-1 to-primary-2 hover:from-primary-2 hover:to-primary-1 rounded-lg text-light-1 font-medium transition-all duration-300 shadow-lg hover:shadow-primary-2/30 hover:scale-105"
                                >
                                    Close Modal
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
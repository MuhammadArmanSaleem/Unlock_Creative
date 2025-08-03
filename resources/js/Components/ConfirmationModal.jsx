import React from 'react';

export default function ConfirmationModal({ show, onConfirm, onCancel, title, message }) {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-dark-1/90 backdrop-blur-sm z-50">
            <div className="bg-gradient-to-br from-dark-2 to-dark-3 p-8 rounded-xl border border-primary-3/30 shadow-2xl w-[90%] max-w-md">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-light-1 bg-clip-text bg-gradient-to-r from-primary-1 to-primary-3 mb-2">
                        {title || 'Confirm Action'}
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-2 to-primary-3 mx-auto rounded-full mb-4"></div>
                    <p className="text-light-2/90">{message || 'Are you sure you want to proceed?'}</p>
                </div>
                
                <div className="flex justify-center gap-6">
                    <button
                        onClick={onConfirm}
                        className="px-6 py-2.5 bg-gradient-to-r from-primary-1/90 to-primary-3/90 rounded-lg text-light-1 font-medium hover:from-primary-2 hover:to-primary-4 transition-all duration-300 transform hover:scale-105"
                    >
                        Confirm
                        <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </button>
                    <button
                        onClick={onCancel}
                        className="px-6 py-2.5 border border-primary-3/50 rounded-lg text-light-2 font-medium hover:bg-dark-1/50 hover:text-light-1 transition-all duration-300"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
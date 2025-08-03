import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import TalkToChatAdmin from '@/Components/TalkToChatAdmin';

export default function UserMessages({ auth, messages }) {
    const [selectedUserId, setSelectedUserId] = useState(null);

    const messageThreads = messages?.reduce((threads, message) => {
        if (!message?.sender || !message?.receiver) return threads;

        const isAdminSender = message.sender_id === auth.user.id;
        const otherUser = isAdminSender ? message.receiver : message.sender;
        const otherUserId = otherUser.id;

        if (otherUserId === auth.user.id) return threads;

        if (!threads[otherUserId]) {
            threads[otherUserId] = {
                user: otherUser,
                lastMessage: message,
                unread: !isAdminSender && !message.read_at,
            };
        }

        return threads;
    }, {}) || {};

    return (
        <div className="bg-gradient-to-br from-dark-1 to-dark-2 min-h-screen">
            <AuthenticatedLayout>
                <Head title="Message Inbox" />
            </AuthenticatedLayout>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="bg-dark-2/80 rounded-2xl border border-primary-3/20 shadow-lg">
                    <div className="bg-dark-3 px-6 py-4 border-b border-primary-3/20">
                        <h2 className="text-3xl font-bold text-light-1">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-primary-3">
                                Message Inbox
                            </span>
                        </h2>
                        <p className="text-light-2/80 mt-1">Conversations with users</p>
                    </div>

                    <div className="divide-y divide-primary-3/20">
                        {Object.values(messageThreads).length > 0 ? (
                            Object.values(messageThreads).map(thread => (
                                <button
                                    key={thread.user.id}
                                    onClick={() => setSelectedUserId(thread.user.id)}
                                    className="w-full text-left hover:bg-dark-1/50 transition-colors duration-200"
                                >
                                    <div className="px-6 py-4 flex items-center">
                                        {/* Avatar */}
                                        <div className="h-12 w-12 rounded-full bg-primary-1/10 flex items-center justify-center">
                                            {thread.user.profile_photo_path ? (
                                                <img
                                                    src={thread.user.profile_photo_path}
                                                    alt={thread.user.name}
                                                    className="h-full w-full rounded-full object-cover"
                                                />
                                            ) : (
                                                <span className="text-xl text-primary-2">
                                                    {thread.user.name?.charAt(0).toUpperCase()}
                                                </span>
                                            )}
                                        </div>
                                        {/* Message preview */}
                                        <div className="ml-4 flex-1 min-w-0">
                                            <div className="flex justify-between items-baseline">
                                                <h3 className="text-lg font-medium text-light-1 truncate">
                                                    {thread.user.name || 'Unknown User'}
                                                </h3>
                                                <span className="text-xs text-light-2/60">
                                                    {new Date(thread.lastMessage.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            </div>
                                            <p className={`text-sm ${thread.unread ? 'text-primary-2 font-medium' : 'text-light-2/80'} truncate`}>
                                                {thread.lastMessage.sender_id === auth.user.id && (
                                                    <span className="text-light-2/60 mr-1">You:</span>
                                                )}
                                                {thread.lastMessage.message}
                                            </p>
                                        </div>
                                        {thread.unread && (
                                            <div className="ml-2 h-3 w-3 rounded-full bg-primary-2"></div>
                                        )}
                                    </div>
                                </button>
                            ))
                        ) : (
                            <div className="px-6 py-12 text-center">
                                <p className="text-light-2/80">No messages yet</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* TalkToChat Modal */}
            {selectedUserId && (
                <TalkToChatAdmin
                    currentUserId={auth.user.id}
                    otherUserId={selectedUserId}
                    role={auth.user.role} // e.g. 'admin' or 'user'
                    onClose={() => setSelectedUserId(null)}
                />
            )}
        </div>
    );
}

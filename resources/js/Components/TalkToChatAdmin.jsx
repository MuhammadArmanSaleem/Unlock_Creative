import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FiSend, FiMessageSquare } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';


export default function TalkToChatAdmin({ currentUserId, otherUserId, role = 'user', onClose }) {
  const [open, setOpen] = useState(true);
  const [msgs, setMsgs] = useState([]);
  const [text, setText] = useState('');
  const scroll = useRef();

  useEffect(() => {
    if (!open) return;
    axios.get(`/chat/${otherUserId}`).then(res => setMsgs(res.data));

    window.Echo.private(`chat.${currentUserId}`)
      .listen('ChatMessageSent', e => {
        setMsgs(m => [...m, e.message]);
      });

    return () => window.Echo.leave(`chat.${currentUserId}`);
  }, [open]);

  const send = async () => {
    if (!text.trim()) return;

    try {
      const res = await axios.post('/chat/send', {
        receiver_id: otherUserId,
        content: text.trim()
      });
      setMsgs(m => [...m, res.data]);
      setText('');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    scroll.current?.scrollTo({ top: scroll.current.scrollHeight });
  }, [msgs]);

  // determine if message is from self
  const isSelf = (msg) =>
    (role === 'admin' && msg.sender_id === currentUserId) ||
    (role !== 'admin' && msg.sender_id === currentUserId);

  return (
    <>
      {open && (
        <div className="fixed bottom-5 right-5 w-[350px] h-[500px] bg-dark-1 border border-dark-3 rounded-xl shadow-xl flex flex-col z-50">
          <div className="p-4 text-center bg-dark-2 border-b border-dark-3 rounded-t-xl text-light-1 font-semibold relative">
            Live Chat
            <button
              onClick={() => {
                setOpen(false);
                onClose?.(); // let parent close
              }}
              className="absolute top-3 right-3 text-light-1 hover:text-primary-1 transition"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>
          </div>

          <div
            ref={scroll}
            className="flex-1 overflow-y-auto px-4 py-2 space-y-2 text-sm bg-gradient-to-br from-dark-2 via-dark-1 to-dark-3"
          >
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${isSelf(m) ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-lg text-light-1 ${isSelf(m) ? 'bg-primary-1' : 'bg-dark-3'}`}>
                  {m.message}
                </div>
              </div>
            ))}
          </div>

          <div className="p-2 border-t border-dark-3 bg-dark-2 flex items-center">
            <input
              className="flex-1 p-2 bg-dark-3 text-light-1 rounded-lg border border-dark-4 outline-none focus:ring-2 focus:ring-primary-1/40"
              value={text}
              onChange={e => setText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Type your message..."
            />
            <button
              onClick={send}
              className="ml-2 bg-primary-1 hover:bg-primary-2 text-white p-2 rounded-full transition"
            >
              <FiSend className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Message;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function index($receiverId)
    {
        $userId = Auth::id();

        if (!User::find($receiverId)) {
            return response()->json(['error' => 'Receiver not found.'], 404);
        }

        $messages = Message::where(function ($q) use ($userId, $receiverId) {
            $q->where('sender_id', $userId)
              ->where('receiver_id', $receiverId);
        })->orWhere(function ($q) use ($userId, $receiverId) {
            $q->where('sender_id', $receiverId)
              ->where('receiver_id', $userId);
        })->orderBy('created_at')->get();

        return response()->json($messages);
    }

    public function send(Request $request)
    {
        $data = $request->validate([
            'receiver_id' => 'required|exists:users,id',
            'content' => 'required|string|max:1000',
        ]);

        $message = Message::create([
            'sender_id' => auth()->id(),
            'receiver_id' => $data['receiver_id'],
            'message' => $data['content'],
        ]);

        broadcast(new ChatController($message))->toOthers();

        return response()->json($message);
        }
    public function UserMessagesView()
    {
        return Inertia::render('Admin/Messages/UserMessages', [
            'messages' => Message::where('receiver_id', auth()->id())
                                ->orWhere('sender_id', auth()->id())
                                ->latest()
                                ->with(['sender', 'receiver'])
                                ->get()
        ]);
    }
}

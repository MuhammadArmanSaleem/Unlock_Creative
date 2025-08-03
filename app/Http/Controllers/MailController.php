<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormEmail;

class MailController extends Controller
{
    
    public function sendContactEmail(Request $request)
    {
        $validated = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'nullable|string',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        $data = [
            'firstName' => $validated['firstName'],
            'lastName' => $validated['lastName'],
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? 'Not provided',
            'subject' => $validated['subject'],
            'messageContent' => $validated['message'],
        ];

        Mail::to('mrdev1245229@gmail.com')->send(new ContactFormEmail($data));
        
        return redirect()->back()->with('success', 'Your message has been sent successfully!');
    }
}

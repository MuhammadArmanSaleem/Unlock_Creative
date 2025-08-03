<!DOCTYPE html>
<html>
<head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #e2e8f0;
            background-color: #0f172a;
            margin: 0;
            padding: 0;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: linear-gradient(to bottom right, #1e293b, #0f172a);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(100, 116, 139, 0.3);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }
        
        .header {
            background: linear-gradient(to right, #7c3aed, #4f46e5);
            padding: 24px;
            text-align: center;
            border-bottom: 1px solid rgba(167, 139, 250, 0.3);
        }
        
        .header h2 {
            margin: 0;
            color: white;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        
        .content {
            padding: 24px;
        }
        
        .detail {
            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid rgba(100, 116, 139, 0.2);
        }
        
        .detail:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        
        .label {
            font-weight: 600;
            color: #a5b4fc;
            display: block;
            margin-bottom: 4px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .value {
            color: #e2e8f0;
            font-size: 16px;
        }
        
        .message-content {
            background-color: rgba(30, 41, 59, 0.5);
            border-left: 3px solid #7c3aed;
            color: #e2e8f0;
            padding: 12px;
            border-radius: 4px;
            margin-top: 8px;
            white-space: pre-wrap;
        }
        
        .footer {
            margin-top: 24px;
            padding-top: 24px;
            border-top: 1px solid rgba(100, 116, 139, 0.3);
            font-size: 13px;
            color: #94a3b8;
            text-align: center;
        }
        
        .logo {
            color: white;
            font-weight: 700;
            background: linear-gradient(to right, #a78bfa, #818cf8);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            margin-bottom: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Contact Form Submission</h2>
        </div>
        
        <div class="content">
            <div class="detail">
                <span class="label">Name</span>
                <span class="value">{{ $data['firstName'] }} {{ $data['lastName'] }}</span>
            </div>
            
            <div class="detail">
                <span class="label">Email</span>
                <span class="value">{{ $data['email'] }}</span>
            </div>
            
            <div class="detail">
                <span class="label">Phone</span>
                <span class="value">{{ $data['phone'] }}</span>
            </div>
            
            <div class="detail">
                <span class="label">Subject</span>
                <span class="value">{{ $data['subject'] }}</span>
            </div>
            
            <div class="detail">
                <span class="label">Message</span>
                <div class="message-content">{{ $data['messageContent'] }}</div>
            </div>
        </div>
        
        <div class="footer">
            <div class="logo">UNLOOCK CREATIVES</div>
            <p>This email was sent from the contact form on your website</p>
            <p style="margin-top: 8px; font-size: 12px;">&copy; {{ date('Y') }} All rights reserved</p>
        </div>
    </div>
</body>
</html>
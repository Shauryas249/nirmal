export default function MaintenancePage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nirmal Auto Tech - Website Maintenance</title>
        <style jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #333;
          }
          
          .container {
            background: white;
            padding: 60px 40px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 500px;
            width: 90%;
          }
          
          .logo {
            width: 80px;
            height: 80px;
            background: #2a5298;
            border-radius: 50%;
            margin: 0 auto 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
            font-weight: bold;
          }
          
          h1 {
            color: #2a5298;
            margin-bottom: 20px;
            font-size: 28px;
            font-weight: 600;
          }
          
          .subtitle {
            color: #666;
            font-size: 18px;
            margin-bottom: 30px;
            line-height: 1.5;
          }
          
          .message {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 10px;
            margin: 30px 0;
            border-left: 4px solid #2a5298;
          }
          
          .message p {
            color: #555;
            line-height: 1.6;
            margin-bottom: 15px;
          }
          
          .contact-info {
            margin-top: 30px;
            padding: 20px;
            background: #2a5298;
            color: white;
            border-radius: 10px;
          }
          
          .contact-info h3 {
            margin-bottom: 15px;
            font-size: 18px;
          }
          
          .contact-info p {
            margin: 5px 0;
            opacity: 0.9;
          }
          
          .status-indicator {
            display: inline-block;
            width: 12px;
            height: 12px;
            background: #ffa500;
            border-radius: 50%;
            margin-right: 8px;
            animation: pulse 2s infinite;
          }
          
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
          
          .footer {
            margin-top: 30px;
            color: #888;
            font-size: 14px;
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="logo">NT</div>
          
          <h1>Nirmal Auto Tech</h1>
          <p className="subtitle">Two Wheeler Parts Specialist</p>
          
          <div className="message">
            <p><span className="status-indicator"></span><strong>Website Temporarily Under Maintenance</strong></p>
            <p>We are currently updating our website to serve you better. Our services will be back online shortly.</p>
            <p>For immediate assistance with auto parts and services, please contact us directly.</p>
          </div>
          
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>📧 Email: info@nirmalautotech.com</p>
            <p>📱 Phone: [Your Phone Number]</p>
            <p>📍 Location: [Your Address]</p>
          </div>
          
          <div className="footer">
            <p>Thank you for your patience</p>
            <p>&copy; 2025 Nirmal Auto Tech. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  );
}

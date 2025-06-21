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
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
          }
          
          .maintenance-container {
            text-align: center;
            max-width: 600px;
            padding: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          }
          
          .logo {
            width: 120px;
            height: 120px;
            margin: 0 auto 30px;
            background: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            color: #667eea;
            font-weight: bold;
          }
          
          h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            font-weight: 300;
          }
          
          .subtitle {
            font-size: 1.2rem;
            margin-bottom: 30px;
            opacity: 0.9;
          }
          
          .message {
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 40px;
            opacity: 0.8;
          }
          
          .contact-info {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 30px;
          }
          
          .contact-info h3 {
            margin-bottom: 15px;
            font-size: 1.3rem;
          }
          
          .contact-info p {
            margin-bottom: 8px;
            font-size: 1rem;
          }
          
          .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .eta {
            font-size: 0.9rem;
            opacity: 0.7;
            margin-top: 20px;
          }
        `}</style>
      </head>
      <body>
        <div className="maintenance-container">
          <div className="logo">
            🔧
          </div>
          <h1>Website Under Maintenance</h1>
          <p className="subtitle">Nirmal Auto Tech</p>
          
          <div className="message">
            <p>We're currently performing scheduled maintenance to improve your experience. Our website will be back online shortly.</p>
          </div>
          
          <div className="spinner"></div>
          
          <p className="eta">Expected completion: [Time/Date]</p>
        </div>
      </body>
    </html>
  );
}

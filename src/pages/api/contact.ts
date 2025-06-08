import type { NextApiRequest, NextApiResponse } from 'next';

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  queryType?: string;
};

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Get form data from request body
    const formData: ContactFormData = req.body;
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email and message are required fields' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    // Log the form submission (for debugging purposes)
    console.log('Contact form submission:', {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || 'Contact Form Submission',
      timestamp: new Date().toISOString()
    });

    // In a real implementation, you would:
    // 1. Send an email notification
    // 2. Store the submission in a database
    // 3. Integrate with a CRM system
    
    // For now, we'll simulate a successful submission
    // with a slight delay to mimic network latency
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon!'
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    return res.status(500).json({
      success: false,
      message: 'There was an error sending your message. Please try again later.'
    });
  }
}
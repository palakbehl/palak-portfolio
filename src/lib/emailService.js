import emailjs from '@emailjs/browser';

/**
 * Send email using EmailJS
 * @param {Object} formData - { name, email, message }
 * @returns {Promise} - EmailJS response
 */
export const sendContactEmail = async (formData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Debug: Log keys (masked) to console to verify loading
  console.log("EmailJS Config Check:", {
    serviceId: serviceId ? `${serviceId.substring(0, 5)}...` : "MISSING",
    templateId: templateId ? `${templateId.substring(0, 5)}...` : "MISSING",
    publicKey: publicKey ? "PRESENT" : "MISSING"
  });

  if (!serviceId || !templateId || !publicKey) {
    console.error("Missing EmailJS keys in .env file");
    throw new Error("EmailJS configuration is missing. Please check your .env file.");
  }

  const templateParams = {
    // Standard params
    to_name: "Palak",
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    reply_to: formData.email,

    // Aliases to match potential template variables
    name: formData.name,   // Common variable
    email: formData.email, // Common variable
    body: formData.message, // Sometimes used as 'body'
    
    // Additional common defaults for "Contact Us" templates
    user_name: formData.name,
    user_email: formData.email,
    contact_number: "Not Provided" // Some templates ask for this
  };

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    console.log("EmailJS Success:", response);
    return response;
  } catch (error) {
    console.error('EmailJS Error Details:', error);
    throw error;
  }
};

/**
 * Previously used backend implementation (Kept for reference if needed)
 */
// export const sendContactEmailBackend = async (formData) => { ... }

/**
 * Setup Instructions for Backend:
 * 
 * 1. If using Node.js/Express backend:
 *    - Install nodemailer: npm install nodemailer
 *    - Create endpoint POST /api/contact
 *    - Configure email service (Gmail, SendGrid, etc.)
 * 
 * 2. If using Firebase:
 *    - Use Cloud Functions with nodemailer
 * 
 * 3. If using third-party service:
 *    - Use SendGrid, Mailgun, or similar
 * 
 * Example Express endpoint:
 * 
 * const nodemailer = require('nodemailer');
 * 
 * const transporter = nodemailer.createTransport({
 *   service: 'gmail',
 *   auth: {
 *     user: process.env.EMAIL_USER,
 *     pass: process.env.EMAIL_PASSWORD
 *   }
 * });
 * 
 * app.post('/api/contact', async (req, res) => {
 *   const { name, email, message } = req.body;
 *   
 *   try {
 *     await transporter.sendMail({
 *       from: process.env.EMAIL_USER,
 *       to: 'palakbehls@gmail.com',
 *       subject: `New message from ${name}`,
 *       text: `From: ${email}\n\n${message}`
 *     });
 *     
 *     res.json({ success: true, message: 'Email sent successfully' });
 *   } catch (error) {
 *     res.status(500).json({ success: false, error: error.message });
 *   }
 * });
 */

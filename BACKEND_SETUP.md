# Backend Setup Guide - Node.js/Express with Nodemailer

This guide will help you set up a Node.js backend server for handling contact form submissions.

## 📋 Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- An email account (Gmail recommended for simplicity)
- Basic knowledge of terminal/command line

---

## 🚀 Step-by-Step Setup

### Step 1: Move server files to backend folder

```bash
# Create backend folder (if not already created)
mkdir backend

# Move server.js to backend folder
mv server.js backend/

# Move .env.example to backend folder and rename it
cd backend
cp .env.example .env
```

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

This will install:
- **express** - Web framework
- **cors** - Enable cross-origin requests
- **nodemailer** - Email sending
- **dotenv** - Environment variable management
- **nodemon** (dev) - Auto-reload server during development

### Step 3: Configure Email Service

#### For Gmail:

1. **Enable 2-Factor Authentication** on your Google Account:
   - Go to https://myaccount.google.com/
   - Select Security (left menu)
   - Enable 2-Step Verification

2. **Generate App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer" (or your device)
   - Google will generate a 16-character password
   - Copy this password

3. **Update .env file**:
   ```env
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  # The 16-char password from step 2
   ADMIN_EMAIL=your-email@gmail.com
   ```

#### Alternative: Using Other Email Services

**SendGrid:**
```bash
npm install @sendgrid/mail
```
```env
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your-api-key
EMAIL_USER=noreply@yourdomain.com
```

**Mailgun:**
```env
EMAIL_SERVICE=mailgun
MAILGUN_API_KEY=your-api-key
MAILGUN_DOMAIN=your-domain.mailgun.org
EMAIL_USER=noreply@your-domain.mailgun.org
```

### Step 4: Update Frontend API Endpoint

Update `src/lib/emailService.js`:

```javascript
export const sendContactEmail = async (formData) => {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
```

### Step 5: Start the Backend Server

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

You should see:
```
✅ Email service is ready to send messages
🚀 Server is running on http://localhost:5000
```

### Step 6: Test the Connection

```bash
# In another terminal, test the API
curl http://localhost:5000/api/health
```

You should get:
```json
{"status":"Server is running","timestamp":"2026-01-26T..."}
```

---

## 🔌 API Endpoints

### Health Check
```http
GET /api/health
```

**Response:**
```json
{
  "status": "Server is running",
  "timestamp": "2026-01-26T10:30:45.123Z"
}
```

### Send Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email sent successfully! I will get back to you soon."
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "error": "Error description"
}
```

---

## 🔒 Security Considerations

1. **Never commit .env file** - Add to .gitignore:
   ```
   backend/.env
   backend/node_modules/
   ```

2. **Use App-Specific Passwords** - Not your actual Gmail password

3. **Validate Input** - Server validates:
   - Email format
   - Message length (10-5000 characters)
   - Required fields

4. **CORS Enabled** - Only allow requests from your frontend URL

5. **XSS Prevention** - HTML escaping for user input

---

## 📦 Deployment Options

### Option 1: Heroku (Free for small apps)
```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create your-app-name

# Set environment variables
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-password
heroku config:set ADMIN_EMAIL=your-email@gmail.com

# Deploy
git push heroku main
```

### Option 2: Railway.app
1. Go to https://railway.app
2. Connect GitHub repository
3. Set environment variables in dashboard
4. Auto-deploys on push

### Option 3: Render
1. Go to https://render.com
2. Create New Web Service
3. Connect GitHub
4. Set environment variables
5. Deploy

### Option 4: DigitalOcean App Platform
1. Go to https://www.digitalocean.com
2. Create new app from repository
3. Set environment variables
4. Deploy

---

## 🛠️ Troubleshooting

### "Cannot find module 'express'"
```bash
npm install
```

### "Gmail authentication failed"
- Check if 2FA is enabled
- Verify app-specific password is correct
- Check EMAIL_USER matches the account that generated the password

### "CORS error"
- Update `FRONTEND_URL` in .env to match your frontend URL
- Ensure backend is running on correct PORT

### "Email not sending"
```bash
# Test email configuration
node -e "require('nodemailer').createTransport({service:'gmail',auth:{user:'your-email@gmail.com',pass:'your-password'}}).verify((e,s)=>console.log(e||'OK'))"
```

---

## 📝 Monitoring & Logging

### View Server Logs
```bash
npm run dev
```

### Log Contact Form Submissions
Add to `server.js`:
```javascript
app.post('/api/contact', async (req, res) => {
  console.log('📩 New contact form submission:', {
    name: req.body.name,
    email: req.body.email,
    timestamp: new Date().toISOString(),
  });
  // ... rest of code
});
```

---

## 🎯 Next Steps

1. ✅ Set up backend
2. ✅ Configure email service
3. Test contact form from portfolio
4. Monitor email deliveries
5. Consider adding email rate limiting for production
6. Set up email templates for better formatting

---

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Nodemailer Guide](https://nodemailer.com/)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
- [CORS Explained](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

**Need Help?** Check the troubleshooting section or create an issue on GitHub!

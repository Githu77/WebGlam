# Email Configuration Setup

## Overview
This guide will help you configure the email functionality for the contact form to resolve the `ECONNRESET` connection error.

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# SMTP Server Settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Email Addresses
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=your-email@gmail.com
```

## Email Provider Setup

### Gmail Setup
1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `SMTP_PASSWORD` (not your regular Gmail password)

### Other Email Providers

#### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
```

#### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
```

#### Custom Domain
Check with your hosting provider for SMTP settings.

## Troubleshooting ECONNRESET Error

The `ECONNRESET` error typically occurs due to:

1. **Incorrect SMTP Settings**
   - Verify host, port, username, and password
   - Ensure you're using an App Password for Gmail

2. **Network Issues**
   - Check your internet connection
   - Try from a different network if possible

3. **Firewall/Security Software**
   - Temporarily disable firewall/antivirus
   - Check if your network blocks SMTP ports

4. **Email Provider Restrictions**
   - Some providers require specific security settings
   - Check if your account has sending limits

## Testing the Configuration

1. Create the `.env.local` file with your settings
2. Restart your development server
3. Try submitting the contact form
4. Check the console for detailed error messages

## Alternative Solutions

If SMTP continues to fail, consider:

1. **Email Service Providers**:
   - SendGrid
   - Mailgun
   - Resend
   - AWS SES

2. **Serverless Email Services**:
   - Vercel's built-in email functionality
   - Netlify Forms

## Security Notes

- Never commit `.env.local` to version control
- Use App Passwords instead of regular passwords
- Consider using environment-specific configurations for production 
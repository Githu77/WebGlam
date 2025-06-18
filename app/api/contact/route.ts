import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if environment variables are set
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('Missing SMTP environment variables')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    // Debug: Log SMTP configuration (remove sensitive info in production)
    console.log('SMTP Configuration:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      passwordLength: process.env.SMTP_PASSWORD?.length || 0,
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER
    } as Record<string, any>)

    // Create a transporter using SMTP with improved connection settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // Connection timeout settings
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000,   // 30 seconds
      socketTimeout: 60000,     // 60 seconds
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false,
        // Additional TLS options for better compatibility
        ciphers: 'SSLv3'
      },
      // Retry configuration
      maxConnections: 1,
      maxMessages: 3,
      pool: false, // Disable pooling to avoid connection issues
    })

    // Verify SMTP connection with timeout
    try {
      await Promise.race([
        transporter.verify(),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Connection timeout')), 30000)
        )
      ])
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        { error: 'Unable to connect to email server. Please try again later.' },
        { status: 500 }
      )
    }

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">New Contact Form Submission</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #6B7280; font-size: 14px;">This message was sent from the contact form on your website.</p>
        </div>
      `,
    }

    // Send email with timeout
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Send timeout')), 60000)
      )
    ])

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    
    // Handle specific error cases
    if (error instanceof Error) {
      const errorMessage = error.message.toLowerCase()
      
      if (errorMessage.includes('invalid login') || errorMessage.includes('authentication failed')) {
        return NextResponse.json(
          { error: 'Email configuration error. Please check your SMTP credentials.' },
          { status: 500 }
        )
      }
      
      if (errorMessage.includes('econnrefused') || errorMessage.includes('econnreset') || errorMessage.includes('esocket')) {
        return NextResponse.json(
          { error: 'Unable to connect to email server. Please check your internet connection and try again later.' },
          { status: 500 }
        )
      }
      
      if (errorMessage.includes('timeout')) {
        return NextResponse.json(
          { error: 'Email server is taking too long to respond. Please try again later.' },
          { status: 500 }
        )
      }
      
      if (errorMessage.includes('quota exceeded') || errorMessage.includes('rate limit')) {
        return NextResponse.json(
          { error: 'Email service quota exceeded. Please try again later.' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
} 
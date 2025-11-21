import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    console.log('Sending email with Resend...');
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'FAMES Hawaii Contact Form <onboarding@resend.dev>',
      to: ['info@fameshawaii.org', 'joan@fameshawaii.org', 'joni@fameshawaii.org'],
      subject: subject || 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 400 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}


import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, frequency, firstName, lastName, email, phone } = body;

    console.log('Sending donation email with Resend...');
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'FAMES Hawaii Donation Form <onboarding@resend.dev>',
      to: ['info@fameshawaii.org', 'joan@fameshawaii.org', 'joni@fameshawaii.org'],
      subject: `Donation Request - $${amount} ${frequency === 'monthly' ? 'Monthly' : 'One-Time'}`,
      html: `
        <h2>New Donation Request</h2>
        <p><strong>Amount:</strong> $${amount}</p>
        <p><strong>Frequency:</strong> ${frequency === 'monthly' ? 'Monthly' : 'One-Time'}</p>
        <h3>Donor Information:</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><em>Please contact this donor to process the donation.</em></p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 400 });
    }

    console.log('Donation email sent successfully:', data);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}


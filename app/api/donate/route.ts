import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, frequency, firstName, lastName, email, phone } = body;

    console.log('Sending donation email with Resend...');
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);

    // Send to info inbox
    const { data, error } = await resend.emails.send({
      from: 'FAMES Hawaii Donation Form <noreply@fameshawaii.org>',
      to: ['info@fameshawaii.org'],
      replyTo: email,
      subject: `Donation Received - $${amount} ${frequency === 'monthly' ? 'Monthly' : 'One-Time'}`,
      html: `
        <h2>New Donation Received</h2>
        <p><strong>Amount:</strong> $${amount}</p>
        <p><strong>Frequency:</strong> ${frequency === 'monthly' ? 'Monthly' : 'One-Time'}</p>
        <h3>Donor Information:</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 400 });
    }

    // Send payment notification to Joan and Rochelle
    const paymentNotificationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #eb6e2d; border-bottom: 3px solid #eb6e2d; padding-bottom: 10px;">
          💳 New Payment Received
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Full Name:</td>
              <td style="padding: 8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Payment For:</td>
              <td style="padding: 8px 0;"><strong>Donation (${frequency === 'monthly' ? 'Monthly' : 'One-Time'})</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Amount:</td>
              <td style="padding: 8px 0; font-size: 18px; color: #eb6e2d; font-weight: bold;">$${amount}.00</td>
            </tr>
          </table>
        </div>
        
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
          This is an automated payment notification from the FAMES Hawaii website.
        </p>
      </div>
    `

    await resend.emails.send({
      from: 'FAMES Hawaii <noreply@fameshawaii.org>',
      to: ['joan@fameshawaii.org', 'rochelle@fameshawaii.org'],
      subject: `New Payment: Donation - $${amount}`,
      html: paymentNotificationHtml,
    });

    console.log('Donation email sent successfully:', data);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}


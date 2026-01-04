import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #eb6e2d; border-bottom: 3px solid #eb6e2d; padding-bottom: 10px;">
          🎉 You have a new ${formData.tier} Sponsor!
        </h2>
        
        <div style="background-color: #f0f7ff; padding: 20px; border-left: 4px solid #eb6e2d; margin: 20px 0; border-radius: 4px;">
          <p style="margin: 0; font-size: 18px; color: #323c82; font-weight: bold;">
            Sponsorship Tier: ${formData.tier}
          </p>
          <p style="margin: 5px 0 0 0; font-size: 16px; color: #eb6e2d; font-weight: bold;">
            Amount: ${formData.amount}
          </p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #323c82; margin-top: 0;">Sponsor Information</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td>
              <td style="padding: 8px 0;">${formData.name}</td>
            </tr>
            ${formData.company ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Company Name:</td>
              <td style="padding: 8px 0;">${formData.company}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Address:</td>
              <td style="padding: 8px 0;">${formData.address}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Mailing Address:</td>
              <td style="padding: 8px 0;">${formData.mailingAddress}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${formData.email}">${formData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0;">${formData.phone}</td>
            </tr>
            ${formData.website ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Website:</td>
              <td style="padding: 8px 0;"><a href="${formData.website}" target="_blank">${formData.website}</a></td>
            </tr>
            ` : ''}
          </table>
        </div>
        
        <div style="background-color: #e8f5e9; padding: 15px; border-left: 4px solid #4caf50; margin: 20px 0; border-radius: 4px;">
          <p style="margin: 0; color: #2e7d32;">
            <strong>✓ Payment Successful</strong><br/>
            The sponsor has completed their payment through Stripe.
          </p>
        </div>
        
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
          This is an automated notification from the FAMES Hawaii sponsorship system.
        </p>
      </div>
    `

    const data = await resend.emails.send({
      from: "FAMES Hawaii <onboarding@resend.dev>",
      to: ["fameshawaiiformsubmissions@outlook.com"],
      subject: `You have a new ${formData.tier} Sponsor`,
      html: emailHtml,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}


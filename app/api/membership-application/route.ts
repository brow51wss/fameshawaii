import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #eb6e2d; border-bottom: 3px solid #eb6e2d; padding-bottom: 10px;">
          🎉 You have a new Member
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #323c82; margin-top: 0;">Member Information</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Full Name:</td>
              <td style="padding: 8px 0;">${formData.name}</td>
            </tr>
            ${formData.company ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td>
              <td style="padding: 8px 0;">${formData.company}</td>
            </tr>
            ` : ''}
            ${formData.position ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Position:</td>
              <td style="padding: 8px 0;">${formData.position}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Business Address:</td>
              <td style="padding: 8px 0;">${formData.businessAddress}</td>
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
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Mobile Phone:</td>
              <td style="padding: 8px 0;">${formData.mobilePhone}</td>
            </tr>
            ${formData.workPhone ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Work Phone:</td>
              <td style="padding: 8px 0;">${formData.workPhone}</td>
            </tr>
            ` : ''}
            ${formData.businessWebsite ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Business Website:</td>
              <td style="padding: 8px 0;"><a href="${formData.businessWebsite}" target="_blank">${formData.businessWebsite}</a></td>
            </tr>
            ` : ''}
            ${formData.sponsoredBy ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Sponsored By:</td>
              <td style="padding: 8px 0;">${formData.sponsoredBy}</td>
            </tr>
            ` : ''}
            ${formData.volunteerHelp ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Volunteer Help:</td>
              <td style="padding: 8px 0;">${formData.volunteerHelp}</td>
            </tr>
            ` : ''}
          </table>
        </div>
        
        <div style="background-color: #e8f5e9; padding: 15px; border-left: 4px solid #4caf50; margin: 20px 0; border-radius: 4px;">
          <p style="margin: 0; color: #2e7d32;">
            <strong>✓ Payment Successful</strong><br/>
            The member has completed their payment through Stripe.
          </p>
        </div>
        
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
          This is an automated notification from the FAMES Hawaii membership system.
        </p>
      </div>
    `

    const data = await resend.emails.send({
      from: "FAMES Hawaii <onboarding@resend.dev>",
      to: ["fameshawaiiformsubmissions@outlook.com"],
      subject: "You have a new Member",
      html: emailHtml,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}


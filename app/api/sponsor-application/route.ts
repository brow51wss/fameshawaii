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

    // Send to form submissions inbox
    const data = await resend.emails.send({
      from: "FAMES Hawaii <onboarding@resend.dev>",
      to: ["fameshawaiiformsubmissions@outlook.com"],
      subject: `You have a new ${formData.tier} Sponsor`,
      html: emailHtml,
    })

    // Send full form submission to Joan and Rochelle (print-friendly)
    const currentDate = new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })

    // Determine tier badge color
    const tierColors: Record<string, string> = {
      'Bronze': '#cd7f32',
      'Silver': '#6c757d',
      'Gold': '#ffc107',
      'Platinum': '#6f42c1',
      'Diamond': '#17a2b8'
    }
    const tierColor = tierColors[formData.tier] || '#eb6e2d'
    
    const printableFormHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          @media print {
            .no-print { display: none !important; }
            body { margin: 0; padding: 20px; }
          }
        </style>
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
        
        <!-- PRINT INSTRUCTIONS - Won't show when printed -->
        <div class="no-print" style="background-color: #fff3cd; border: 2px solid #ffc107; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
          <h2 style="color: #856404; margin: 0 0 10px 0; font-size: 20px;">📄 HOW TO PRINT THIS APPLICATION</h2>
          <ol style="color: #856404; margin: 0; padding-left: 20px; font-size: 16px; line-height: 1.8;">
            <li><strong>On your keyboard, press Ctrl + P</strong> (or Cmd + P on Mac)</li>
            <li>A print window will open</li>
            <li>Click the <strong>"Print"</strong> button</li>
          </ol>
          <p style="color: #856404; margin: 15px 0 0 0; font-size: 14px;">
            💡 <em>Tip: This yellow box will NOT appear on the printed page.</em>
          </p>
        </div>

        <!-- PRINTABLE APPLICATION FORM -->
        <div style="border: 2px solid #323c82; padding: 30px;">
          
          <!-- Header -->
          <div style="text-align: center; border-bottom: 3px solid #eb6e2d; padding-bottom: 20px; margin-bottom: 25px;">
            <h1 style="color: #323c82; margin: 0; font-size: 28px;">FAMES HAWAII</h1>
            <h2 style="color: #eb6e2d; margin: 10px 0 0 0; font-size: 22px;">SPONSORSHIP APPLICATION</h2>
            <p style="color: #666; margin: 10px 0 0 0;">Date Submitted: ${currentDate}</p>
          </div>

          <!-- Sponsorship Tier Banner -->
          <div style="background-color: ${tierColor}; padding: 20px; text-align: center; margin-bottom: 25px; border-radius: 8px;">
            <span style="color: white; font-size: 24px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">
              ★ ${formData.tier.toUpperCase()} SPONSOR ★
            </span>
            <br/>
            <span style="color: white; font-size: 20px; font-weight: bold;">${formData.amount}</span>
          </div>

          <!-- Payment Status Banner -->
          <div style="background-color: #d4edda; border: 2px solid #28a745; padding: 15px; text-align: center; margin-bottom: 25px;">
            <span style="color: #155724; font-size: 18px; font-weight: bold;">✓ PAYMENT COMPLETE via Stripe</span>
          </div>

          <!-- Sponsor Information -->
          <div style="margin-bottom: 25px;">
            <h3 style="color: #323c82; border-bottom: 2px solid #323c82; padding-bottom: 8px; margin-bottom: 15px;">SPONSOR INFORMATION</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; width: 35%; background-color: #f8f9fa; font-weight: bold;">Name</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.name}</td>
              </tr>
              ${formData.company ? `
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;">Company Name</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.company}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <!-- Contact Information -->
          <div style="margin-bottom: 25px;">
            <h3 style="color: #323c82; border-bottom: 2px solid #323c82; padding-bottom: 8px; margin-bottom: 15px;">CONTACT INFORMATION</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; width: 35%; background-color: #f8f9fa; font-weight: bold;">Address</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.address}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;">Mailing Address</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.mailingAddress}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;">Email</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;">Phone</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.phone}</td>
              </tr>
              ${formData.website ? `
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;">Website</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.website}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <!-- Footer -->
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #eb6e2d;">
            <p style="color: #666; margin: 0; font-size: 12px;">
              This application was submitted online at fameshawaii.org
            </p>
          </div>

        </div>
      </body>
      </html>
    `

    await resend.emails.send({
      from: "FAMES Hawaii <onboarding@resend.dev>",
      to: ["joan@fameshawaii.org", "rochelle@fameshawaii.org"],
      subject: `📄 New ${formData.tier} Sponsor Application: ${formData.name} - ${formData.amount}`,
      html: printableFormHtml,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}


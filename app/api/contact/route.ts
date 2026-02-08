import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
        const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

        // 1. Send Admin Notification Email
        const adminEmailHtml = `
      <div style="font-family: 'Helvetica', 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #000; color: #fff;">
        <h2 style="color: #ff3e3e; text-transform: uppercase;">New Contact Request - SplitX Studio</h2>
        <div style="background-color: #111; padding: 20px; border-radius: 8px; border: 1px solid #333;">
          <p style="margin-bottom: 5px; color: #aaa; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</p>
          <p style="margin-top: 0; font-size: 16px;"><strong>${name}</strong> (${email})</p>

          <p style="margin-bottom: 5px; color: #aaa; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-top: 20px;">Message</p>
          <div style="background-color: #222; padding: 15px; border-radius: 4px; border-left: 4px solid #ff3e3e;">
            <p style="margin: 0; line-height: 1.6;">${message}</p>
          </div>
        </div>
        <p style="font-size: 12px; color: #666; margin-top: 20px; text-align: center;">Sent via SplitX Studio Website Contact Form</p>
      </div>
    `;

        // 2. Send Client Confirmation Email
        const clientEmailHtml = `
      <div style="font-family: 'Helvetica', 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #000; color: #fff;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #fff; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; margin: 0;">SplitX<span style="color: #ff3e3e;">.</span></h1>
        </div>

        <div style="background-color: #111; padding: 30px; border-radius: 8px; border: 1px solid #333; text-align: center;">
          <h2 style="color: #fff; margin-top: 0;">Message Received</h2>
          <p style="color: #ccc; line-height: 1.6;">Hello ${name},</p>
          <p style="color: #ccc; line-height: 1.6;">Thank you for reaching out to us. We have received your message and our team will review it shortly.</p>
          <p style="color: #ccc; line-height: 1.6;">If your inquiry is urgent, please note that our typical response time is within 24-48 hours.</p>

          <div style="margin-top: 30px; border-top: 1px solid #333; padding-top: 20px;">
            <p style="color: #ff3e3e; font-size: 14px; font-weight: bold; margin: 0;">SplitX Studio</p>
            <p style="color: #666; font-size: 12px; margin: 5px 0 0;">Cinematic 3D for Digital Worlds</p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 30px;">
           <a href="https://22labs.studio" style="color: #666; text-decoration: none; font-size: 12px; margin: 0 10px;">Website</a>
           <a href="#" style="color: #666; text-decoration: none; font-size: 12px; margin: 0 10px;">Twitter</a>
           <a href="#" style="color: #666; text-decoration: none; font-size: 12px; margin: 0 10px;">Instagram</a>
        </div>
      </div>
    `;

        // Send emails in parallel
        await Promise.all([
            resend.emails.send({
                from: fromEmail,
                to: adminEmail,
                subject: `New Contact Request – SplitX Studio`,
                html: adminEmailHtml,
                replyTo: email, // Reply directly to the client
            }),
            resend.emails.send({
                from: fromEmail,
                to: email,
                subject: `We Received Your Message – SplitX Studio`,
                html: clientEmailHtml,
            })
        ]);

        return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

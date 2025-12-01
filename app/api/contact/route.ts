// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, number, enquiry } = await req.json();

    if (!name || !email || !enquiry) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const toBusiness = process.env.CONTACT_TO_EMAIL;

    const fromAddress = process.env.RESEND_FROM_EMAIL;

    if (!toBusiness || !fromAddress) {
      console.error('Missing CONTACT_TO_EMAIL or RESEND_FROM_EMAIL in env');
      return NextResponse.json(
        { success: false, message: 'Server misconfiguration.' },
        { status: 500 }
      );
    }

    // 1) Email to YOU (the business)
    await resend.emails.send({
      from: fromAddress, // must be a verified sender/domain in Resend
      to: toBusiness,
      subject: `New enquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${number || 'N/A'}</p>
        <p><strong>Enquiry:</strong></p>
        <p>${(enquiry || '').replace(/\n/g, '<br />')}</p>
      `,
    });

    // 2) Auto-reply to the user
    await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: 'Thanks for your enquiry – FOTO GOATS',
      html: `
        <p>Hey ${name},</p>
        <p>Thanks for reaching out – we’ve received your message and we’ll get back to you as soon as possible.</p>
        <p>– FOTO GOATS</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('CONTACT_API_ERROR', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong sending your message.' },
      { status: 500 }
    );
  }
}

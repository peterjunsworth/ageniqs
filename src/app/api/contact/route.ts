import { NextRequest, NextResponse } from 'next/server';
import { resend, EMAIL_CONFIG } from '@/lib/email/resend';
import { contactFormSchema } from '@/lib/validations/schemas';
import ContactNotification from '@/lib/email/templates/contact-notification';
import ContactConfirmation from '@/lib/email/templates/contact-confirmation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, errors: validationResult.error.errors },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    try {
      await resend.emails.send({
        from: EMAIL_CONFIG.from,
        to: EMAIL_CONFIG.adminEmail,
        replyTo: data.email,
        subject: `New Contact Form Submission from ${data.name}`,
        react: ContactNotification({ data }),
      });
    } catch (emailError) {
      console.error('Failed to send admin notification:', emailError);
    }

    /*try {
      await resend.emails.send({
        from: EMAIL_CONFIG.from,
        to: data.email,
        subject: 'Thank you for contacting Ageniqs',
        react: ContactConfirmation({ name: data.name }),
      });
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
    }*/

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

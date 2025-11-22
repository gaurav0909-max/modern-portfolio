import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

/**
 * POST /api/contact
 * Handles contact form submissions
 * 
 * TODO: Integrate with email service (Resend, SendGrid, etc.)
 * Example with Resend:
 * 
 * import { Resend } from 'resend';
 * const resend = new Resend(process.env.RESEND_API_KEY);
 * 
 * await resend.emails.send({
 *   from: 'onboarding@resend.dev',
 *   to: 'gp67853@gmail.com',
 *   subject: data.subject,
 *   html: `<p>From: ${data.name} (${data.email})</p><p>${data.message}</p>`,
 * });
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = contactSchema.parse(body);

    // TODO: Replace with actual email service integration
    // For now, log the data (remove in production)
    console.log('Contact form submission:', validatedData);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed', 
          errors: error.errors 
        },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again later.' 
      },
      { status: 500 }
    );
  }
}


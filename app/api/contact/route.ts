import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(3).max(200),
  message: z.string().min(10).max(2000),
});

// In-memory rate limiter: max 5 requests per IP per 15 minutes
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: 'Invalid form data.' }, { status: 422 });
  }

  const { name, email, subject, message } = result.data;

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>',
    to: 'gp627853@gmail.com',
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
        <h2 style="color: #171b1c; margin-bottom: 24px;">New message from your portfolio</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #457850; font-weight: 600; width: 100px;">Name</td>
            <td style="padding: 8px 0; color: #171b1c;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #457850; font-weight: 600;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4db2b3;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #457850; font-weight: 600;">Subject</td>
            <td style="padding: 8px 0; color: #171b1c;">${subject}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #c7ced1; margin: 24px 0;" />
        <p style="color: #45505a; line-height: 1.7; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
        <hr style="border: none; border-top: 1px solid #c7ced1; margin: 24px 0;" />
        <p style="color: #737f8c; font-size: 12px;">Sent via gauravpatel.dev contact form</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

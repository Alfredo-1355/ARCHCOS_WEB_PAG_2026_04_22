// ============================================================
// ARCHCOS — /api/contact (Vercel Serverless Function)
// Receives executive consultation form data and sends email via Resend.
// ============================================================

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { buildContactEmail } from '../src/api/emailTemplates';

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  // ─── Read env vars ────────────────────────────────────────
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'areyes@archcos.com';
  const FROM_EMAIL = process.env.FROM_EMAIL || 'ARCHCOS Forms <onboarding@resend.dev>';

  if (!RESEND_API_KEY) {
    console.error('[/api/contact] RESEND_API_KEY is not set.');
    return res.status(500).json({ success: false, message: 'Server configuration error. Please contact us directly.' });
  }

  const resend = new Resend(RESEND_API_KEY);

  // ─── Validate body ────────────────────────────────────────
  const { fullName, workEmail, company, projectType, details } = req.body || {};

  if (!fullName || !workEmail || !company) {
    return res.status(400).json({ success: false, message: 'Full Name, Email, and Company are required.' });
  }
  if (!isValidEmail(workEmail)) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }

  // ─── Build & send email ───────────────────────────────────
  try {
    const html = buildContactEmail({ fullName, workEmail, company, projectType, details });

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: workEmail,
      subject: `📋 Consultation Request: ${fullName} — ${company}`,
      html,
    });

    if (error) {
      console.error('[/api/contact] Resend error:', error);
      return res.status(500).json({ success: false, message: 'Failed to send email. Please try again.' });
    }

    console.log(`[/api/contact] Email sent for: ${fullName} <${workEmail}>`);
    return res.status(200).json({
      success: true,
      message: 'Your consultation request has been received! Our team will follow up within 24 business hours.',
    });
  } catch (err) {
    console.error('[/api/contact] Unexpected error:', err);
    return res.status(500).json({ success: false, message: 'An unexpected error occurred.' });
  }
}

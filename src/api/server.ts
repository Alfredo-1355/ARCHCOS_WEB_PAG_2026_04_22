// ============================================================
// ARCHCOS — Express API Server
// Handles form submissions and sends emails via Resend
// Run with: npm run api
// ============================================================

import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import { Resend } from 'resend';
import { buildInquiryEmail, buildContactEmail } from './emailTemplates.js';

// ─── Configuration ───────────────────────────────────────────
const PORT = 3001;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'areyes@archcos.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'ARCHCOS Forms <onboarding@resend.dev>';
const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
  console.error('\n❌ RESEND_API_KEY is not set. Please add it to your .env file.\n');
  process.exit(1);
}

const resend = new Resend(RESEND_API_KEY);
const app = express();

// ─── Middleware ───────────────────────────────────────────────
app.use(express.json());
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// ─── Validation Helpers ───────────────────────────────────────
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ─── POST /api/inquiry ────────────────────────────────────────
app.post('/api/inquiry', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, projectType, location, budget, timeline } = req.body;

    // Validation
    if (!name || !email) {
      res.status(400).json({ success: false, message: 'Name and Email are required.' });
      return;
    }
    if (!isValidEmail(email)) {
      res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
      return;
    }

    const html = buildInquiryEmail({ name, email, phone, projectType, location, budget, timeline });

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `🎯 New Lead: ${name} — Executive Inquiry`,
      html,
    });

    if (error) {
      console.error('[/api/inquiry] Resend error:', error);
      res.status(500).json({ success: false, message: 'Failed to send email. Please try again.' });
      return;
    }

    console.log(`[/api/inquiry] Email sent successfully for: ${name} <${email}>`);
    res.json({ success: true, message: 'Your inquiry has been sent! We will contact you within 24 business hours.' });
  } catch (err) {
    console.error('[/api/inquiry] Unexpected error:', err);
    res.status(500).json({ success: false, message: 'An unexpected error occurred.' });
  }
});

// ─── POST /api/contact ────────────────────────────────────────
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { fullName, workEmail, company, projectType, details } = req.body;

    // Validation
    if (!fullName || !workEmail || !company) {
      res.status(400).json({ success: false, message: 'Full Name, Email, and Company are required.' });
      return;
    }
    if (!isValidEmail(workEmail)) {
      res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
      return;
    }

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
      res.status(500).json({ success: false, message: 'Failed to send email. Please try again.' });
      return;
    }

    console.log(`[/api/contact] Email sent successfully for: ${fullName} <${workEmail}>`);
    res.json({ success: true, message: 'Your consultation request has been received! Our team will follow up within 24 business hours.' });
  } catch (err) {
    console.error('[/api/contact] Unexpected error:', err);
    res.status(500).json({ success: false, message: 'An unexpected error occurred.' });
  }
});

// ─── Health Check ─────────────────────────────────────────────
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'ARCHCOS Forms API' });
});

// ─── Start Server ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n✅ ARCHCOS API Server running on http://localhost:${PORT}`);
  console.log(`📧 Emails will be sent to: ${RECIPIENT_EMAIL}\n`);
});

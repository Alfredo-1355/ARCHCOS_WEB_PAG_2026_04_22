// ============================================================
// ARCHCOS — /api/health (Vercel Serverless Function)
// Simple health check endpoint.
// ============================================================

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  return res.status(200).json({ status: 'ok', service: 'ARCHCOS Forms API', timestamp: new Date().toISOString() });
}

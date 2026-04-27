// ============================================================
// ARCHCOS — Shared Form Submission Hook
// Reusable fetch logic for both contact forms
// ============================================================

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface ApiResponse {
  success: boolean;
  message: string;
}

/**
 * Generic form submission handler that calls the ARCHCOS API.
 * Returns the server response or throws on network failure.
 * Handles non-JSON responses gracefully to prevent UI crashes.
 */
export async function submitForm(
  endpoint: '/api/inquiry' | '/api/contact',
  payload: Record<string, string | undefined>
): Promise<ApiResponse> {
  let response: Response;

  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error('Could not connect to the server. Please check your connection and try again.');
  }

  // Read raw text first to avoid a JSON parse crash if the server
  // returns an HTML error page (e.g. Vercel 404 / 500 pages).
  const rawText = await response.text();

  let data: ApiResponse;
  try {
    data = JSON.parse(rawText) as ApiResponse;
  } catch {
    // The server returned something that is not JSON (e.g. an HTML page).
    // This normally means the API route is not deployed yet.
    console.error(`[submitForm] Non-JSON response from ${endpoint}:`, rawText.slice(0, 200));
    throw new Error('Service temporarily unavailable. Please contact us directly at adrianasarro@archcos.com');
  }

  // Treat non-2xx responses with a server message as handled errors.
  if (!response.ok) {
    throw new Error(data.message || 'An unexpected error occurred.');
  }

  return data;
}

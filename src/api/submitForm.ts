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
 */
export async function submitForm(
  endpoint: '/api/inquiry' | '/api/contact',
  payload: Record<string, string | undefined>
): Promise<ApiResponse> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data: ApiResponse = await response.json();

  // Treat non-2xx with a server message as a handled error
  if (!response.ok) {
    throw new Error(data.message || 'An unexpected error occurred.');
  }

  return data;
}

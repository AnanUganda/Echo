/**
 * Posts a form submission to the Google Apps Script web app (see
 * docs/forms-setup.md). The script appends a row to the Google Sheet and
 * emails the team. Configure the deployed URL via VITE_SHEET_ENDPOINT.
 */
const ENDPOINT = import.meta.env.VITE_SHEET_ENDPOINT as string | undefined;

type FormType = 'contact' | 'application';

export async function submitForm(
  formType: FormType,
  data: Record<string, string>,
  file?: File | null,
): Promise<void> {
  const payload: Record<string, string> = { formType, ...data };

  if (file) {
    payload.photoBase64 = await fileToBase64(file);
    payload.photoName = file.name;
    payload.photoType = file.type || 'application/octet-stream';
  }

  if (!ENDPOINT) {
    // Not configured yet (e.g. local dev before the Sheet is set up).
    // Resolve so the UI still shows success, but make the gap obvious.
    console.warn('[submitForm] VITE_SHEET_ENDPOINT is not set — submission was not delivered.');
    return;
  }

  // Apps Script reads e.parameter. url-encoded + no custom headers keeps this a
  // CORS "simple request" (no preflight); no-cors because the script's response
  // isn't readable cross-origin — delivery is confirmed by the row/email, not here.
  await fetch(ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    body: new URLSearchParams(payload),
  });
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result);
      resolve(result.includes(',') ? result.split(',')[1] : result);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

// ============================================================
// ARCHCOS — Email HTML Templates
// Premium, branded HTML email templates for form notifications
// ============================================================

const BASE_STYLES = `
  body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f0f4f8; }
  .wrapper { max-width: 640px; margin: 0 auto; padding: 40px 20px; }
  .card { background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
  .header { background: #0f172a; padding: 32px 40px; text-align: center; }
  .header-logo { font-size: 22px; font-weight: 700; letter-spacing: 0.2em; color: #ffffff; }
  .header-badge { display: inline-block; margin-top: 10px; padding: 4px 14px; border-radius: 999px; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
  .body { padding: 36px 40px; }
  .title { font-size: 20px; font-weight: 700; color: #0f172a; margin: 0 0 6px 0; }
  .subtitle { font-size: 13px; color: #64748b; margin: 0 0 28px 0; }
  .divider { border: none; border-top: 1px solid #e2e8f0; margin: 24px 0; }
  .field-row { display: flex; align-items: baseline; padding: 10px 0; border-bottom: 1px solid #f1f5f9; }
  .field-label { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #94a3b8; min-width: 180px; flex-shrink: 0; }
  .field-value { font-size: 14px; color: #1e293b; line-height: 1.5; word-break: break-word; }
  .highlight-value { font-weight: 600; }
  .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 40px; text-align: center; }
  .footer-text { font-size: 11px; color: #94a3b8; margin: 0; letter-spacing: 0.05em; }
`;

interface InquiryData {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  location?: string;
  budget?: string;
  timeline?: string;
}

interface ContactData {
  fullName: string;
  workEmail: string;
  company: string;
  projectType?: string;
  details?: string;
}

const renderField = (label: string, value?: string, highlight = false): string => {
  if (!value) return '';
  const valClass = highlight ? 'field-value highlight-value' : 'field-value';
  return `
    <div class="field-row">
      <span class="field-label">${label}</span>
      <span class="${valClass}">${value}</span>
    </div>`;
};

export function buildInquiryEmail(data: InquiryData): string {
  const projectLabel = data.projectType ? data.projectType : '—';
  const timelineLabel = data.timeline ? data.timeline : '—';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead — ARCHCOS Inquiry</title>
  <style>${BASE_STYLES}</style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <div class="header-logo">ARCHCOS</div>
        <div class="header-badge" style="background: rgba(140,198,63,0.15); color: #8CC63F;">
          🎯 New Executive Lead
        </div>
      </div>
      <div class="body">
        <p class="title">Initiate Your Vision — Form Submission</p>
        <p class="subtitle">A prospective client has submitted a project inquiry. Review the details below.</p>
        <hr class="divider">
        ${renderField('Client / Company', data.name, true)}
        ${renderField('Preferred Email', data.email)}
        ${renderField('Phone Number', data.phone || 'Not provided')}
        ${renderField('Project Type', projectLabel, true)}
        ${renderField('Project Location', data.location || 'Not provided')}
        ${renderField('Est. Budget / Sq. Ft.', data.budget || 'Not specified')}
        ${renderField('Estimated Timeline', timelineLabel, true)}
      </div>
      <div class="footer">
        <p class="footer-text">Submitted via archcos.com · Route: /inquiry · ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago', timeZoneName: 'short' })}</p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

export function buildContactEmail(data: ContactData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Executive Consultation — ARCHCOS Contact</title>
  <style>${BASE_STYLES}</style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <div class="header-logo">ARCHCOS</div>
        <div class="header-badge" style="background: rgba(37,99,235,0.15); color: #2563eb;">
          📋 Consultation Request
        </div>
      </div>
      <div class="body">
        <p class="title">Executive Consultation — Form Submission</p>
        <p class="subtitle">A client has requested an executive consultation. Review the details below and follow up within 24 business hours.</p>
        <hr class="divider">
        ${renderField('Full Name', data.fullName, true)}
        ${renderField('Work Email', data.workEmail)}
        ${renderField('Company / Developer', data.company, true)}
        ${renderField('Project Type', data.projectType || 'Not specified')}
        ${renderField('Project Details', data.details || 'No additional details provided.')}
      </div>
      <div class="footer">
        <p class="footer-text">Submitted via archcos.com · Route: /contact · ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago', timeZoneName: 'short' })}</p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

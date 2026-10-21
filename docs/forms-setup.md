# Form submissions → Google Sheet + email (no Zoho)

Both the **Contact** form (`/contact`) and the **Apply** form (`/signup`) post to a
Google Apps Script web app. The script appends a row to a Google Sheet (your
database) and emails you. The applicant photo is saved to a Drive folder and
linked in the row.

You do this once in your own Google account, then paste one URL into the site's
environment variable. No server to run or maintain.

---

## 1. Create the Sheet

1. Go to <https://sheets.google.com> and create a blank spreadsheet, e.g. **"ECHO Form Submissions"**.
   (The script creates the `Contact` and `Applications` tabs automatically on the first submission.)

## 2. Add the script

1. In the sheet: **Extensions → Apps Script**.
2. Delete the starter code and paste **all** of `Code.gs` below.
3. Change `NOTIFY_EMAIL` if you want submissions to go somewhere other than `projectechokenya@gmail.com`.
4. Click **Save**.

```javascript
// ===== Code.gs =====
const NOTIFY_EMAIL = 'projectechokenya@gmail.com';
const PHOTO_FOLDER = 'ECHO Applicant Photos';

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    if (p.formType === 'application') return handleApplication(ss, p);
    return handleContact(ss, p);
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function handleContact(ss, p) {
  const sh = sheet(ss, 'Contact',
    ['Timestamp', 'First name', 'Last name', 'Email', 'Subject', 'Message']);
  sh.appendRow([new Date(), p.firstName || '', p.lastName || '', p.email || '', p.subject || '', p.message || '']);
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: p.email || NOTIFY_EMAIL,
    subject: 'New contact message — ' + (p.subject || 'General Inquiry'),
    body: 'Name: ' + (p.firstName || '') + ' ' + (p.lastName || '') +
      '\nEmail: ' + (p.email || '') +
      '\nSubject: ' + (p.subject || '') +
      '\n\n' + (p.message || ''),
  });
  return json({ ok: true });
}

function handleApplication(ss, p) {
  let photoUrl = '';
  if (p.photoBase64) {
    const folder = folderByName(PHOTO_FOLDER);
    const blob = Utilities.newBlob(Utilities.base64Decode(p.photoBase64), p.photoType || 'image/jpeg', p.photoName || 'photo');
    const file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    photoUrl = file.getUrl();
  }
  const sh = sheet(ss, 'Applications',
    ['Timestamp', 'Trip', 'First name', 'Last name', 'Email', 'WhatsApp', 'DOB',
     'Parents', 'Address', 'City', 'State', 'ZIP', 'Church', 'Reason', 'Experience', 'Photo']);
  sh.appendRow([new Date(), p.trip || '', p.firstName || '', p.lastName || '', p.email || '',
    p.whatsapp || '', p.dob || '', p.parentsName || '', p.address || '', p.city || '',
    p.state || '', p.zip || '', p.church || '', p.reason || '', p.experience || '', photoUrl]);
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: p.email || NOTIFY_EMAIL,
    subject: 'New trip application — ' + (p.firstName || '') + ' ' + (p.lastName || ''),
    body: 'Trip: ' + (p.trip || '') +
      '\nName: ' + (p.firstName || '') + ' ' + (p.lastName || '') +
      '\nEmail: ' + (p.email || '') +
      '\nWhatsApp: ' + (p.whatsapp || '') +
      '\nDOB: ' + (p.dob || '') +
      '\nParents: ' + (p.parentsName || '') +
      '\nAddress: ' + (p.address || '') + ', ' + (p.city || '') + ', ' + (p.state || '') + ' ' + (p.zip || '') +
      '\nChurch: ' + (p.church || '') +
      '\n\nWhy they want to go:\n' + (p.reason || '') +
      '\n\nExperience:\n' + (p.experience || '') +
      '\n\nPhoto: ' + (photoUrl || '(none)'),
  });
  return json({ ok: true });
}

function sheet(ss, name, headers) {
  let sh = ss.getSheetByName(name);
  if (!sh) { sh = ss.insertSheet(name); sh.appendRow(headers); }
  return sh;
}
function folderByName(name) {
  const it = DriveApp.getFoldersByName(name);
  return it.hasNext() ? it.next() : DriveApp.createFolder(name);
}
function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy it as a web app

1. **Deploy → New deployment** → gear icon → **Web app**.
2. **Execute as:** *Me*. **Who has access:** *Anyone*.
   (This lets the website post to it. The URL is unguessable; it only accepts form writes.)
3. Click **Deploy**, approve the permissions prompt (it needs Sheets, Gmail/MailApp, and Drive).
4. Copy the **Web app URL** — it looks like `https://script.google.com/macros/s/AKfy…/exec`.

## 4. Point the site at it

Add the URL as an environment variable named `VITE_SHEET_ENDPOINT`:

- **Local dev:** copy `.env.example` to `.env` and paste the URL.
- **Vercel (production):** Project → **Settings → Environment Variables** → add
  `VITE_SHEET_ENDPOINT` = the URL, for the Production environment, then redeploy.

That's it. Submit a test from each form and confirm a row appears in the Sheet and an email lands in your inbox.

> **Updating the script later:** after editing `Code.gs`, redeploy with
> **Deploy → Manage deployments → (edit) → Version: New version → Deploy** so the
> same URL serves the new code.

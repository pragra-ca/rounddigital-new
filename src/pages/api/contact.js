import nodemailer from 'nodemailer';

// Every submitted value is escaped before it reaches the HTML body. Without
// this, a submitter can inject arbitrary markup — including links — into the
// email our own staff open, which is a phishing vector against ourselves.
const ESCAPE = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ESCAPE[c]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const config = { api: { bodyParser: { sizeLimit: '64kb' } } };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, company, service, message, type } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email and message are required.' });
  }
  if (typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }
  if (String(message).length > 5000 || String(name).length > 120) {
    return res.status(400).json({ message: 'That submission is longer than we accept.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"RoundDigital Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      replyTo: String(email).trim(),
      subject: `New contact form submission - ${String(type ?? 'General').slice(0, 60)}`,
      html: `
        <div style="background-color:#f4f4f4;padding:20px;font-family:Segoe UI, sans-serif">
          <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:8px;padding:30px;border:1px solid #e0e0e0;">
            <div style="text-align:center;margin-bottom:30px;">
              <h1 style="color:#e14242;margin:0;">RoundDigital</h1>
              <p style="margin:0;color:#555;">Contact Form Submission</p>
            </div>
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr>
                <td style="padding:8px 0;font-weight:bold;width:120px;">Type:</td>
                <td style="padding:8px 0;">${esc(type)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;">Name:</td>
                <td style="padding:8px 0;">${esc(name)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;">Email:</td>
                <td style="padding:8px 0;">${esc(email)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;vertical-align:top;">Message:</td>
                <td style="padding:8px 0;white-space:pre-wrap;">${esc(message)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;">Phone:</td>
                <td style="padding:8px 0;">${esc(phone) || '—'}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;">Company:</td>
                <td style="padding:8px 0;">${esc(company) || '—'}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;">Service:</td>
                <td style="padding:8px 0;">${esc(service) || '—'}</td>
              </tr>
            </table>

            <hr style="margin:30px 0;border:none;border-top:1px solid #eee;">

            <p style="font-size:13px;color:#777;text-align:center;">
              This message was sent via the contact form on <strong>RoundDigital</strong>'s website.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Email sending failed' });
  }
}

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message, type } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
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
      subject: `📩 New Contact Form Submission - ${type}`,
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
                <td style="padding:8px 0;">${type}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;">Name:</td>
                <td style="padding:8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;">Email:</td>
                <td style="padding:8px 0;">${email}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;vertical-align:top;">Message:</td>
                <td style="padding:8px 0;white-space:pre-wrap;">${message}</td>
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

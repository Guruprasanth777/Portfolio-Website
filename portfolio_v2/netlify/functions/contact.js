import nodemailer from 'nodemailer'
export async function handler(event) {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' }
  const { name, email, message } = JSON.parse(event.body || '{}')
  if (!name || !email || !message) return { statusCode: 400, body: 'Missing fields' }
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    })
    const info = await transporter.sendMail({
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL || process.env.TO_EMAIL,
      subject: `Portfolio contact from ${name}`,
      replyTo: email,
      text: message
    })
    return { statusCode: 200, body: JSON.stringify({ ok: true, id: info.messageId }) }
  } catch (e) {
    console.error(e)
    return { statusCode: 500, body: 'Email failed' }
  }
}

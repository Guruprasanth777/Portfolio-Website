// Vercel Serverless Function: /api/contact
// Set env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL, FROM_EMAIL
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).send('Missing fields')
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
      text: message,
    })
    return res.status(200).json({ ok: true, id: info.messageId })
  } catch (e) {
    console.error(e)
    return res.status(500).send('Email failed')
  }
}

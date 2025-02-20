import { Transporter } from 'nodemailer'
import nodemailer      from 'nodemailer'

const { SMTP_AUTH_HOST, SMTP_AUTH_PORT, SMTP_AUTH_USER, SMTP_AUTH_PASS } = process.env

export const transporter: Transporter = nodemailer.createTransport({
  host: SMTP_AUTH_HOST,
  port: Number(SMTP_AUTH_PORT),
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: SMTP_AUTH_USER,
    pass: SMTP_AUTH_PASS,
  },
})

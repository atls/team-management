import nodemailer from 'nodemailer'

// TODO separate values into env
export const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: 'gonzalo20@ethereal.email',
    pass: 'd4P4DrQy9QtWuvCe8F',
  },
})

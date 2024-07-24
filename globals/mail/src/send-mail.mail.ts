import nodemailer      from 'nodemailer'

import { transporter } from './get-transporter.mail.js'

// TODO interface
export const sendMail = async (mailTemplate) => {
  const info = await transporter.sendMail(mailTemplate)
  const messageUrl = nodemailer.getTestMessageUrl(info)
  console.log('message url: ', messageUrl)
}

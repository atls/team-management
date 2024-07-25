import { transporter } from './get-transporter.mail.js'

// TODO interface
export const sendMail = async (mailTemplate) => {
  const info = await transporter.sendMail(mailTemplate)
  return info
}

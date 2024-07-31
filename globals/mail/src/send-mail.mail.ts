import { transporter } from './get-transporter.mail.js'

export const sendMail = async (mailTemplate) => {
  const info = await transporter.sendMail(mailTemplate)
  return info
}

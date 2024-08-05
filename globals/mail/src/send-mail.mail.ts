import type { SendMailType } from './send-mail.interface.js'

import { transporter }       from './get-transporter.mail.js'

export const sendMail: SendMailType = async (mailTemplate) => {
  const info = await transporter.sendMail(mailTemplate)
  return info
}

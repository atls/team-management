import type { SentMessageInfo } from 'nodemailer'

import type { SendMailType }    from './send-mail.interface.js'

import { transporter }          from './get-transporter.mail.js'

export const sendMail: SendMailType = async (mailTemplate): Promise<SentMessageInfo> => {
  const info = await transporter.sendMail(mailTemplate)
  return info
}

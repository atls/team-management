import type { SendMailResponse }               from './send-mail.interface.js'

import type { SendMailType } from './send-mail.interface.js'

import { transporter }                         from './get-transporter.mail.js'

export const sendMail: SendMailType = async (mailTemplate): Promise<SendMailResponse> => {
  const info: SendMailResponse = await transporter.sendMail(mailTemplate)
  return info
}

import type { MailTemplateType } from './template.interfaces.js'

import { MAIL_TEXT }             from './send-invite.constants.js'
import { MAIL_SUBJECT }          from './send-invite.constants.js'
import { MAIL_FROM }             from './send-invite.constants.js'
import { sendMail }              from '../send-mail.mail.js'
import { getHtml }               from './send-invite.layout-template.js'
import type { SendMailResponse } from '../send-mail.interface.js'

export const sendInviteMail = async ({
  emails,
  selectedInvites,
}: {
  emails: Array<string>
  selectedInvites: Array<string>
}):  Promise<SendMailResponse> => {
  const emailsString = emails.join(', ')
  const html = getHtml(selectedInvites)

  const mailTemplate: MailTemplateType = {
    from: MAIL_FROM,
    to: emailsString,
    subject: MAIL_SUBJECT,
    text: MAIL_TEXT,
    html,
  }

  return sendMail(mailTemplate)
}

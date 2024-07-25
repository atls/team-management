import { sendMail } from '../send-mail.mail.js'
import { getHtml }  from './send-invite.layout-template.js'

const MAIL_TEXT = 'atlantis-invite-text'
const MAIL_SUBJECT = 'atlantis-invite-subject'
const MAIL_FROM = process.env.SMTP_AUTH_USER

export const sendInviteMail = ({ emails, selectedInvites }) => {
  const emailsString = emails.join(', ')
  const html = getHtml(selectedInvites)

  const mailTemplate = {
    from: MAIL_FROM,
    to: emailsString,
    subject: MAIL_SUBJECT,
    text: MAIL_TEXT,
    html,
  }

  return sendMail(mailTemplate)
}

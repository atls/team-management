import { sendMail }        from '../send-mail.mail.js'
import { getHtmlTemplate } from './send-invite.layout-template.js'

const MAIL_TEXT = 'test text'
const MAIL_SUBJECT = 'test subject'
const MAIL_FROM = 'test from'

export const sendInviteMail = ({ emails, selectedInvites }) => {
  console.log(emails)
  const emailsString = emails.join(', ')

  // TODO selected invites to template
  console.log(selectedInvites)

  const html = getHtmlTemplate('innerstring')

  console.log(html)

  const mailTemplate = {
    // from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
    from: MAIL_FROM,
    to: emailsString,
    subject: MAIL_SUBJECT,
    text: MAIL_TEXT,
    html,
  }

  return sendMail(mailTemplate)
}

export type MailTemplateType = {
  from: string
  to: Array<string> | string
  subject: string
  text: string
  html: string
}

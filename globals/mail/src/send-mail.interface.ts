import type { MailTemplateType } from './templates/template.interfaces.js'

export interface SendMailResponse {
  accepted: Array<string>
  rejected: Array<string>
  envelopeTime: number
  messageTime: number
  messageId: string
  response: string
}

export type SendMailType = (mailTemplate: MailTemplateType) => Promise<SendMailResponse>

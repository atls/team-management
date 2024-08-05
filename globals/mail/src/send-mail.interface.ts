import type { MailTemplateType } from './templates/template.interfaces.js'

export type SendMailType = (mailTemplate: MailTemplateType) => any

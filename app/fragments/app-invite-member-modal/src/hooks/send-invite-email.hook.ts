import type { SendInviteEmailHookType } from './send-invite-email.interface.js'

export const sendInviteEmailHook: SendInviteEmailHookType = async ({ emails, selectedInvites }) => {
  const response = await fetch('/api/send-invite-mail', {
    method: 'post',
    body: JSON.stringify({ emails, selectedInvites }),
  })
  const responseText = await response.text()
  if (response.status !== 200) {
    const error = new Error(responseText) as any
    error.code = response.status
    throw error
  }
}

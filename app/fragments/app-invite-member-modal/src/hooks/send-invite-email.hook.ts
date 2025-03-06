import type { SendInviteEmailHookType } from './send-invite-email.interface.js'

export const sendInviteEmailHook: SendInviteEmailHookType = async ({
  emails,
  selectedInvites,
  toast,
}) => {
  try {
    const response = await fetch('/api/send-invite-mail', {
      method: 'post',
      body: JSON.stringify({ emails, selectedInvites }),
    })
    const responseText = await response.text()
    if (response.status !== 200) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error = new Error(responseText) as any
      error.code = response.status
      throw error
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    toast.error(e.message, e.code)
  }
}

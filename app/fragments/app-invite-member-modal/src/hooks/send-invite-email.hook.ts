// TODO interface
export const sendInviteEmailHook = async ({ emails, selectedInvites }) => {
  const response = await fetch('/api/send-invite-mail', {
    method: 'post',
    body: JSON.stringify({ emails, selectedInvites }),
  })
  const responseText = await response.text()
  if (response.status !== 200) {
    const error = new Error(responseText)
    error.code = response.status
    throw error
  }
}

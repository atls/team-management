// TODO interface
export const sendInviteEmailHook = async ({ emails, selectedInvites }) => {
  console.log('sendInviteEmail')
  const response = await fetch('/api/send-invite-mail', {
    method: 'post',
    body: JSON.stringify({ emails, selectedInvites }),
  })
  console.log(response)
}

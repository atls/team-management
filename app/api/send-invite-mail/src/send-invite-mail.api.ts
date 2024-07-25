import { sendInviteMail } from '@globals/mail'

export const sendInviteMailHandle = async (request: Request) => {
  const json = await request.json()
  try {
    const mailInfo = await sendInviteMail(json)
    const data = JSON.stringify(mailInfo)
    return Response.json(data)
  } catch (e: any) {
    return new Response(`Send mail error: ${e.message}`, {
      status: e.status || e.responseCode || 400,
    })
  }
}

import type { InviteMailData } from './send-invite-mail.interfaces.js'

import { sendInviteMail }      from '@globals/mail'

export const sendInviteMailHandle = async (request: Request): Promise<Response> => {
  const json: InviteMailData = await request.json()
  try {
    const mailInfo = await sendInviteMail(json)
    const data = JSON.stringify(mailInfo)
    return Response.json(data)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    return new Response(`Send mail error: ${e.message}`, {
      status: e.status || e.responseCode || 400,
    })
  }
}

import { sendInviteMail } from '@globals/mail'

// TODO как профильтровать адреса запросы с которых мы будем отправлять EMAIL?
// чтобы нельзя было отправить его со стороны,

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

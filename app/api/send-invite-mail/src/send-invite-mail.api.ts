import { sendInviteMail } from '@globals/mail'

// TODO как профильтровать адреса запросы с которых мы будем отправлять EMAIL?
// чтобы нельзя было отправить его со стороны

export const sendInviteMailHandle = async (request: Request) => {
  const json = await request.json()
  const response = await sendInviteMail(json)
  console.log('invite server response: ')
  console.log(response)
}

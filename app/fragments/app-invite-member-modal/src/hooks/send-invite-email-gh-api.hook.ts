import type { SendInviteEmailGhApiHookType }      from './send-invite-email-gh-api.interface.js'

import { inviteMemberToOrgaizationEmailGetQuery } from '@globals/data'
import { requestOctokitRestData }                 from '@globals/data'

export const sendInviteEmailGhApiHook: SendInviteEmailGhApiHookType = async ({
  document,
  inputValues,
  ghOrgName,
  toast,
}) => {
  try {
    for await (const email of inputValues) {
      const query = inviteMemberToOrgaizationEmailGetQuery({
        organizatoinName: ghOrgName,
        memberEmailAdress: email,
      })
      await requestOctokitRestData(document, query)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    toast.error(e.message, e.code)
  }
}

import { inviteMemberToOrgaizationEmailGetQuery } from '@globals/data'
import { requestOctokitRestData }                 from '@globals/data'

import { SendInviteEmailGhApiHookType }           from './send-invite-email-gh-api.interface.js'

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
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    toast.error(e.message, e.code)
  }
}

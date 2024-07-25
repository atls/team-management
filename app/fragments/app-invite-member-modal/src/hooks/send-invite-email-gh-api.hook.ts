import { inviteMemberToOrgaizationEmailQuery } from '@globals/data'
import { createOctokitRestClient }             from '@globals/data'
import { getTokenCookie }                      from '@globals/helpers'

export const sendInviteEmailGhApiHook = async ({ document, inputValues, ghOrgName }) => {
  const token = getTokenCookie(document)
  const restClient = createOctokitRestClient(token)
  for await (const email of inputValues) {
    const query = inviteMemberToOrgaizationEmailQuery({
      organizatoinName: ghOrgName,
      memberEmailAdress: email,
    }) as [any]

    await restClient(...query)
  }
}

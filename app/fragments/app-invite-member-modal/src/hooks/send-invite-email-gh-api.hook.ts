import { inviteMemberToOrgaizationEmailGetQuery } from '@globals/data'
import { requestOctokitRestData }                 from '@globals/data'

export const sendInviteEmailGhApiHook = async ({ document, inputValues, ghOrgName }) => {
  for await (const email of inputValues) {
    const query = inviteMemberToOrgaizationEmailGetQuery({
      organizatoinName: ghOrgName,
      memberEmailAdress: email,
    })
    await requestOctokitRestData(document, query)
  }
}

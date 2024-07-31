import type { CheckMembersOnbordingConditions } from './check-members-onbording-conditions.interfaces.js'

import { MemberWithOnbordingDataType }          from '@globals/data'

import { INIT_ONBORDING_DATA }                  from '../member-cards-grid.constants.js'

export const checkMembersOnbordingConditions: CheckMembersOnbordingConditions = async ({
  membersData,
  membersInDefaultOrganization,
  membersWithou2fa,
}) => {
  const resultMembersData: Array<MemberWithOnbordingDataType> | any = membersData.map((
    memberData
  ) => {
    if (memberData) {
      const memberId = memberData.id

      const memberWithOnbordingData = {
        ...memberData,
        onbordingData: [...INIT_ONBORDING_DATA],
      }

      if (membersInDefaultOrganization.includes(memberId)) {
        memberWithOnbordingData.onbordingData.forEach((conditionData, conditionIndex) => {
          if (conditionData.conditionName === 'atlsMainOrganization') {
            memberWithOnbordingData.onbordingData[conditionIndex] = {
              ...conditionData,
              conditionState: true,
            }
          }
        })
      }

      if (membersWithou2fa.includes(memberId)) {
        memberWithOnbordingData.onbordingData.forEach((conditionData, conditionIndex) => {
          if (conditionData.conditionName === 'github2fa') {
            memberWithOnbordingData.onbordingData[conditionIndex] = {
              ...conditionData,
              conditionState: false,
            }
          }
        })
      }

      return memberWithOnbordingData
    }

    return []
  })

  return resultMembersData
}

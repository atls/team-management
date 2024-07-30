// import { getDiscordServerMembers } from '@globals/third-party-service-data'

import { INIT_ONBORDING_DATA } from '../member-cards-grid.constants.js'

export const checkMembersOnbordingConditions = async ({
  membersData,
  organizationsData,
  membersInDefaultOrganization,
  membersWithou2fa,
}) => {
  // const discordServerMembers = await getDiscordServerMembers()
  // console.log(discordServerMembers)

  const resultMembersData = await membersData.map((memberData) => {
    // console.log(memberData)
    const { avatarUrl, id: memberId } = memberData

    const memberWithOnbordingData = memberData

    memberWithOnbordingData.onbordingData = [...INIT_ONBORDING_DATA]

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
  })

  return await resultMembersData
}

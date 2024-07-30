// import { getDiscordServerMembers } from '@globals/third-party-service-data'

import { INIT_ONBORDING_DATA } from '../member-cards-grid.constants.js'

export const checkMembersOnbordingConditions = async ({
  membersData,
  organizationsData,
  membersInDefaultOrganization,
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

    console.log(memberData.name)
    console.log(memberData.onbordingData[0].conditionState)

    return memberWithOnbordingData
  })

  return await resultMembersData
}

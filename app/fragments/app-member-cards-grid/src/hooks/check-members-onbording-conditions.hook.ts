import { INIT_ONBORDING_DATA } from '../member-cards-grid.constants.js'

export const checkMembersOnbordingConditions = async ({
  membersData,
  membersInDefaultOrganization,
  membersWithou2fa,
}) => {
  const resultMembersData = await membersData.map((memberData) => {
    const { id: memberId } = memberData

    let memberWithOnbordingData = {
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
  })

  return await resultMembersData
}

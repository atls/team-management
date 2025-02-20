import type { MemberWithOrganizationsDataType } from '@app/member-card'

import type { GetMembersWithOnbordingDataType } from './get-members-with-onbording-data.interface.js'

import { INIT_ONBORDING_DATA }                  from '@globals/constants'

import { changeOnbordingMemberProperty }        from '../helpers/index.js'

export const getMembersWithOnbordingData: GetMembersWithOnbordingDataType = async ({
  membersData,
  defaultOrganizationMemberIds,
  without2faMemberIds,
}) => {
  const resultMembersData: Array<MemberWithOrganizationsDataType> = membersData.map((
    memberData
  ) => {
    const memberId = memberData.id

    let withOnbordingMemberData = {
      ...memberData,
      onbordingData: [...INIT_ONBORDING_DATA],
    }

    if (defaultOrganizationMemberIds.includes(memberId)) {
      withOnbordingMemberData = changeOnbordingMemberProperty(
        withOnbordingMemberData,
        'atlsMainOrganization'
      )
    }

    if (without2faMemberIds.includes(memberId)) {
      withOnbordingMemberData = changeOnbordingMemberProperty(
        withOnbordingMemberData,
        'github2fa',
        false
      )
    }

    return withOnbordingMemberData
  })

  return resultMembersData
}

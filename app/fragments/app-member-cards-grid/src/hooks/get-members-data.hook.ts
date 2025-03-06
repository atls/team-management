/* eslint-disable */
import type { MemberWithOrganizationsDataType } from '@app/member-card'
import type { OrganizationMemberDataType }      from '@globals/data'
import type { OrganizationDataType }            from '@globals/data'

import type { GetMembersDataType }              from './get-members-data.interfaces.js'

import { getMembersWithout2fa }                 from '@globals/github-hooks'

import { getMembersWithOnbordingData }          from './getters/index.js'
import { getResponseOrganizationsData }         from './getters/index.js'
import { getMemberIdsInDefaultOrganization }    from './getters/index.js'
import { getUniqueItems }                       from './helpers/index.js'
import { linkMemberToOrganizations }            from './helpers/index.js'

export const getMembersData: GetMembersDataType = async ({
  toast,
  setMembersData,
  setOrganizationsData,
  organizationsLimit,
  organizationMembersLimit,
}) => {
  try {
    const defaultOrganizationName = process.env.NEXT_PUBLIC_GITHUB_ORG_NAME ?? ''

    const responseOrganizationsData = await getResponseOrganizationsData({
      organizationsLimit,
      organizationMembersLimit,
    })

    const allMembersData: Array<OrganizationMemberDataType> = []
    const allOrganizationsData: Array<OrganizationDataType> = []
    const memberOrganizations: Record<string, Array<string>> = {}

    const without2faMemberIds = await getMembersWithout2fa(document)
    let defaultOrganizationMemberIds: Array<string> = []

    for (const organizationData of responseOrganizationsData as any) {
      if (!organizationData) continue

      const organizationMembersData = organizationData.membersWithRole.nodes

      if (!organizationMembersData) continue

      if (organizationData.name === defaultOrganizationName) {
        defaultOrganizationMemberIds = getMemberIdsInDefaultOrganization(organizationMembersData)
      }

      for (const memberData of organizationMembersData) {
        if (!memberData) continue

        const { id: memberId } = memberData
        const { id: organizationId } = organizationData

        if (!memberOrganizations[memberId]) {
          memberOrganizations[memberId] = []
        }

        memberOrganizations[memberId].push(organizationId)
      }

      allMembersData.push(...organizationMembersData)

      allOrganizationsData.push(organizationData as OrganizationDataType)
    }

    const uniqueMembersData: Array<OrganizationMemberDataType> = getUniqueItems(allMembersData)

    const withOrganizationsMembersData: Array<MemberWithOrganizationsDataType> =
      linkMemberToOrganizations({
        uniqueMembersData,
        memberOrganizations,
      })

    const uniqueOrganizationsData: Array<OrganizationDataType> =
      getUniqueItems(allOrganizationsData)

    const withOnbordingDataMembersData: Array<MemberWithOrganizationsDataType> =
      await getMembersWithOnbordingData({
        membersData: withOrganizationsMembersData,
        defaultOrganizationMemberIds,
        without2faMemberIds,
      })

    setMembersData(withOnbordingDataMembersData)
    setOrganizationsData(uniqueOrganizationsData)
  } catch (e: any) {
    console.error(e)
    toast.error(e.message, e.status)
  }
}

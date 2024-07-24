import { GetViewerOrganizationsQuery } from '../__generated__/index.js'
import { GetOrganizationTeamsQuery }   from '../__generated__/index.js'
import { GetOrganizationMembersQuery } from '../__generated__/index.js'

export type OrganizationDataType =
  keyof GetViewerOrganizationsQuery['viewer']['organizations']['nodes']

type OrganizationTeamsNode = keyof GetOrganizationTeamsQuery['node']
type OrganizationTeams = OrganizationTeamsNode['teams']
export type OrganizationTeamType = OrganizationTeams['nodes']

type OrganizationMembersNode = keyof GetOrganizationMembersQuery['node']
type OrganizationMembersWithRole = OrganizationMembersNode['membersWithRole']
export type OrganizationMemberType = OrganizationMembersWithRole['nodes']

import type { GetViewerOrganizationsQuery } from '../__generated__/index.js'
import type { GetOrganizationTeamsQuery }   from '../__generated__/index.js'
import type { GetOrganizationMembersQuery } from '../__generated__/index.js'

export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

export type OrganizationDataType = Exclude<
  ArrayElement<GetViewerOrganizationsQuery['viewer']['organizations']['nodes']>,
  null
>
type OrganizationTeamsNode = Extract<
  GetOrganizationTeamsQuery['node'],
  { __typename?: 'Organization' }
>
export type OrganizationTeamType = Exclude<
  ArrayElement<OrganizationTeamsNode['teams']['nodes']>,
  null
>

type OrganizationMembersNode = Extract<
  GetOrganizationMembersQuery['node'],
  { __typename?: 'Organization' }
>
export type OrganizationMemberDataType = Exclude<
  ArrayElement<OrganizationMembersNode['membersWithRole']['nodes']>,
  null
>

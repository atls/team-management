import type { GetRestQueryType } from '../index.js'

const MEMBER_ROLE = 'direct_member'

export const inviteMemberToOrganizationGetQuery: GetRestQueryType = ({
  organizationLogin,
  githubUserId,
  teamIds,
}) => [
  'POST /orgs/{org}/invitations',
  {
    org: organizationLogin,
    invitee_id: githubUserId,
    role: MEMBER_ROLE,
    team_ids: teamIds,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  },
]

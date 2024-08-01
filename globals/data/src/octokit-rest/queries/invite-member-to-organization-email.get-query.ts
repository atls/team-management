import type { GetRestQueryType } from '../index.js'

const MEMBER_ROLE = 'direct_member'

export const inviteMemberToOrgaizationEmailGetQuery: GetRestQueryType = ({
  organizatoinName,
  memberEmailAdress,
}) => [
  'POST /orgs/{org}/invitations',
  {
    org: organizatoinName,
    email: memberEmailAdress,
    role: MEMBER_ROLE,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  },
]

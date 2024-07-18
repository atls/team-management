import { Octokit } from '@octokit/core'

const MEMBER_ROLE = 'direct_member'

export const inviteMemberToOrgaization = ({ token, organizationLogin, githubUserId, teamIds }) => {
  const octokit = new Octokit({
    auth: token,
  })

  return octokit.request('POST /orgs/{org}/invitations', {
    org: organizationLogin,
    invitee_id: githubUserId,
    role: MEMBER_ROLE,
    team_ids: teamIds,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })
}

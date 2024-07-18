import { Octokit } from '@octokit/core'

const MEMBER_ROLE = 'direct_member'

export const inviteMemberToOrgaization = async ({
  token,
  organizationLogin,
  githubUserId,
  teamIds,
  errorMessageDispatch,
}) => {
  const octokit = new Octokit({
    auth: token,
  })

  try {
    await octokit.request('POST /orgs/{org}/invitations', {
      org: organizationLogin,
      invitee_id: githubUserId,
      role: MEMBER_ROLE,
      team_ids: teamIds,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
  } catch (e: any) {
    // eslint-disable-next-line no-console
    errorMessageDispatch({
      type: 'set',
      errorMessage: { text: e.message, code: e.status || 0 },
    })
  }
}

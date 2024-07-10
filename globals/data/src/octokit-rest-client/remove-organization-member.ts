import { Octokit } from '@octokit/core'

export const removeOrganizationMember = async ({ token, organizationLogin, memberLogin }) => {
  const octokit = new Octokit({
    auth: token,
  })

  console.log(token, organizationLogin, memberLogin)

  await octokit.request(`DELETE /orgs/${organizationLogin}/members/${memberLogin}`, {
    org: organizationLogin,
    username: memberLogin,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })
}

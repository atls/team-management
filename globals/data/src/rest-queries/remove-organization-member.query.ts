export const removeOrganizationMemberQuery = async ({ organizationLogin, memberLogin }) => {
  return [
    `DELETE /orgs/${organizationLogin}/members/${memberLogin}`,
    {
      org: organizationLogin,
      username: memberLogin,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
  ]
}

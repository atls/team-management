export const removeOrganizationMemberQuery = ({ organizationLogin, memberLogin }) => [
  `DELETE /orgs/${organizationLogin}/members/${memberLogin}`,
  {
    org: organizationLogin,
    username: memberLogin,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  },
]

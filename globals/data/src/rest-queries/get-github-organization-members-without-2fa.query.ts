export const getGithubOrganizationMembersWithout2fa = ({ organizatoinName }) => [
  'GET /orgs/{org}/members',
  {
    org: organizatoinName,
    filter: '2fa_disabled',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  },
]

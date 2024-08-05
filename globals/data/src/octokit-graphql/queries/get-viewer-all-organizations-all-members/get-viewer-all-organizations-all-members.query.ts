const GET_VIEWER_ALL_ORGANIZATIONS_ALL_MEMBERS = /* GraphQL */ `
  query GetViewerAllOrganizationsAllMembers(
    $organizationsLimit: Int!
    $organizationMembersLimit: Int!
  ) {
    viewer {
      organizations(first: $organizationsLimit) {
        nodes {
          id
          login
          name
          url
          viewerCanAdminister
          avatarUrl
          membersWithRole(first: $organizationMembersLimit) {
            nodes {
              id
              login
              email
              name
              bio
              url
              avatarUrl
            }
          }
        }
      }
    }
  }
`

export { GET_VIEWER_ALL_ORGANIZATIONS_ALL_MEMBERS }

const GET_VIEWER_ALL_ORGANIZATIONS_ALL_MEMBERS = /* GraphQL */ `
  query GetViewerOrganizations($organizationsLimit: Int!, $organizationMembersLimit: Int!) {
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
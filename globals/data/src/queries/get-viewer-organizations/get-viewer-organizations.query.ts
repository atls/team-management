const GET_VIEWER_ORGANIZATIONS = /* GraphQL */ `
  query GetViewerOrganizations($organizationsLimit: Int!, $organizationMembersLimit: Int!) {
    viewer {
      organizations(first: $organizationsLimit) {
        nodes {
          id
          login
          name
          url
          membersWithRole(first: $organizationMembersLimit) {
            totalCount
          }
          viewerCanAdminister
          description
          avatarUrl
        }
      }
    }
  }
`

export { GET_VIEWER_ORGANIZATIONS }

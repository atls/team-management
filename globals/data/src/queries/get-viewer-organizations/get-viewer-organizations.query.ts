// TODO добавить количество участников в запрос

const GET_VIEWER_ORGANIZATIONS = /* GraphQL */ `
  query GetViewerOrganizations($organizationsLimit: Int!, $organizationMembersLimit: Int!) {
    viewer {
      organizations(first: $organizationsLimit) {
        nodes {
          id
          name
          url
          membersWithRole(first: $organizationMembersLimit) {
            totalCount
          }
          description
          avatarUrl
        }
      }
    }
  }
`

export { GET_VIEWER_ORGANIZATIONS }

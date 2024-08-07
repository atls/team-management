const GET_ORGANIZATION_MEMBERS = /* GraphQL */ `
  query GetOrganizationMembers($organizationId: ID!, $organizationMembersLimit: Int!) {
    node(id: $organizationId) {
      ... on Organization {
        membersWithRole(first: $organizationMembersLimit) {
          nodes {
            id
            login
            url
            avatarUrl
            name
            bio
          }
        }
      }
    }
  }
`

export { GET_ORGANIZATION_MEMBERS }

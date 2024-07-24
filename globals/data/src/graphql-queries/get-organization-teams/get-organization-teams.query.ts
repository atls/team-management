const GET_ORGANIZATION_TEAMS = /* GraphQL */ `
  query GetOrganizationTeams($organizationId: ID!, $organizationTeamsLimit: Int!) {
    node(id: $organizationId) {
      ... on Organization {
        teams(first: $organizationTeamsLimit) {
          nodes {
            id
            databaseId
            name
          }
        }
      }
    }
  }
`

export { GET_ORGANIZATION_TEAMS }

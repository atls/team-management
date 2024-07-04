// TODO добавить количество участников в запрос

const GET_ORGANIZATION_TEAMS = /* GraphQL */ `
  query GetOrganizationMembers($organizationId: ID!) {
    node(id: $organizationId) {
      ... on Organization {
        teams(first: 16) {
          nodes {
            id
            name
          }
        }
      }
    }
  }
`

export { GET_ORGANIZATION_TEAMS }

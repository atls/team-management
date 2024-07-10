// TODO добавить количество участников в запрос
// TODO add linit to query on cli

const GET_ORGANIZATION_MEMBERS = /* GraphQL */ `
  query GetOrganizationMembers($organizationId: ID!) {
    node(id: $organizationId) {
      ... on Organization {
        membersWithRole(first: 100) {
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

// TODO добавить количество участников в запрос

const GET_ORGANIZATION_MEMBERS = /* GraphQL */ `
  query GetOrganizationMembers($organizationId: ID!) {
    node(id: $organizationId) {
      ... on Organization {
        membersWithRole(first: 100) {
          nodes {
            id
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

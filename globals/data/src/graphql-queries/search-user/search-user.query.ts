const SEARCH_USER = /* GraphQL */ `
  query SearchUser($searchLimit: Int!, $searchQuery: String!) {
    search(first: $searchLimit, type: USER, query: $searchQuery) {
      edges {
        node {
          ... on User {
            id
            databaseId
            name
            avatarUrl
            email
          }
        }
      }
    }
  }
`

export { SEARCH_USER }

const GET_VIEWER = /* GraphQL */ `
  query GetViewer {
    viewer {
      login
      name
      avatarUrl
      email
    }
  }
`

export { GET_VIEWER }

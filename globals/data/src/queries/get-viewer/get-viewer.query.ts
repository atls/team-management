const GET_VIEWER = /* GraphQL */ `
  query GetViewer {
    viewer {
      login
      name
      avatarUrl
      email
      url
    }
  }
`

export { GET_VIEWER }

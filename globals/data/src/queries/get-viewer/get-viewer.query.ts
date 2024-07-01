const GET_VIEWER = /* GraphQL */ `
  query GetViewer {
    viewer {
      name
      avatarUrl
      email
      url
    }
  }
`

export { GET_VIEWER }

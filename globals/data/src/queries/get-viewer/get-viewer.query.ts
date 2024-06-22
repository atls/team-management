// https://the-guild.dev/graphql/codegen/docs/config-reference/documents-field
// import React from 'react'
// import { gql } from 'graphql-tag'

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

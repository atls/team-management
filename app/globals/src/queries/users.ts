import { gql } from '@apollo/client'

export const USERS = gql`
  query {
    organization(login: "ssagg-test") {
      name
      teams(first: 100, after: null) {
        nodes {
          members {
            nodes {
              avatarUrl
              name
              email
              id
              organizations(first: 100) {
                nodes {
                  id
                  name
                  avatarUrl
                }
              }
            }
          }
        }
      }
    }
  }
`

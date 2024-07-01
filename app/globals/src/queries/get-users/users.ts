import { gql } from '../../__generated__/index.js'

export const GET_USERS = /* GraphQL */ `
  query Orgs {
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
// )

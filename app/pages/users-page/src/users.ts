import { gql } from '@apollo/client'

const USERS = gql`
  query {
    organization(login: "ssagg-test") {
      name
    }
  }
`

export { USERS }

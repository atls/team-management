import { useQuery } from '@apollo/client'

import { USERS }     from '../queries/index.js'

export const useOrganizations = () => {
  const { data } = useQuery(USERS)
  const orgData = data
  return { orgData }
}

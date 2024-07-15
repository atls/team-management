import type { GetViewerOrganizationsQuery } from '@globals/data'

import { GET_VIEWER_ORGANIZATIONS }         from '@globals/data'
import { octokitGraphqlClient }             from '@globals/data'
import { getTokenCookie }                   from '@globals/helpers'

import { ORGANIZATIONS_LIMIT }              from './organizations-page.constants.js'
import { ORGANIZATION_MEMBERS_LIMIT }       from './organizations-page.constants.js'

export const getOrganizationsData = ({ setOrganizationsData, errorMessageDispatch }) => {
  const token = getTokenCookie(document)

  const getOrganizationsDataPromise = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const client = octokitGraphqlClient(token)
        const response = (await client(GET_VIEWER_ORGANIZATIONS, {
          organizationsLimit: ORGANIZATIONS_LIMIT,
          organizationMembersLimit: ORGANIZATION_MEMBERS_LIMIT,
        })) as GetViewerOrganizationsQuery

        const {
          viewer: {
            organizations: { nodes },
          },
        } = response

        resolve(nodes)
      } catch (e: any) {
        console.error(e)
        errorMessageDispatch({
          type: 'set',
          errorMessage: { text: e.message, code: e.status || 0 },
        })
      }
    })
  }

  getOrganizationsDataPromise().then((responseOrganizationsData) => {
    setOrganizationsData(responseOrganizationsData)
  })
}

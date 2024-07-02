import type { GetViewerOrganizationsQuery } from '@globals/data'

import { cookies }                          from 'next/headers'

import { GET_VIEWER_ORGANIZATIONS }         from '@globals/data'
import { octokitGraphqlClient }             from '@globals/data'

import { ORGANIZATIONS_LIMIT }              from './organizations-page.constants.js'
import { ORGANIZATION_MEMBERS_LIMIT }       from './organizations-page.constants.js'

export const getOrganizationsPageData = async () => {
  const { TOKEN_COOKIE_NAME } = process.env
  const token = cookies().get(TOKEN_COOKIE_NAME as string).value
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

    return nodes
  } catch (e: any) {
    // TODO обработка ошибок
    console.error(e)
    // if (e.status === 401) {
    //   redirect('/registration')
    // }
    throw e
  }
}

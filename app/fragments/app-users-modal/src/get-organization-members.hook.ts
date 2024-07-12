import { GET_ORGANIZATION_MEMBERS } from '@globals/data'
import { octokitGraphqlClient }     from '@globals/data'
import { getTokenCookie }           from '@globals/helpers'

const MEMBERS_LIMIT = 32

export const getOrganizationMembersHook = ({
  open,
  membersData,
  organizationId,
  setMembersData,
  errorMessageDispatch,
}) => {
  return
  if (open && !membersData.length) {
    const token = getTokenCookie(document)

    // console.log(errorMessageDispatch)

    const getOrganizationPromise = () =>
      new Promise(async (resolve, reject) => {
        const client = octokitGraphqlClient('123')
        // const client = octokitGraphqlClient(token)

        try {
          const response = await client(GET_ORGANIZATION_MEMBERS, {
            organizationId,
            organizationMembersLimit: MEMBERS_LIMIT,
          })

          const {
            node: {
              membersWithRole: { nodes: membersData },
            },
          } = response

          resolve(membersData)
        } catch (e: any) {
          console.error(e)

          errorMessageDispatch({
            type: 'set',
            errorMessage: { text: e.message, code: e.status || 0 },
          })
        }
      })

    getOrganizationPromise().then((responseMemebersData) => {
      setMembersData(responseMemebersData)
    })
  }
}

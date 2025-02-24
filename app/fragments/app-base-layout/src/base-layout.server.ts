import type { GetViewerQuery }        from '@globals/data'

// @ts-expect-error:next-line
import { cookies }                    from 'next/headers'
// @ts-expect-error:next-line
import { redirect }                   from 'next/navigation'

import { GET_VIEWER }                 from '@globals/data'
import { createOctokitGraphqlClient } from '@globals/data'

export const BaseLayoutServer = async () => {
  const TOKEN_COOKIE_NAME = process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME!
  const token = cookies().get(TOKEN_COOKIE_NAME).value

  try {
    const client = createOctokitGraphqlClient(token)
    const response = await client(GET_VIEWER)

    // @ts-expect-error
    const { viewer } = response
    return viewer
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e)
    redirect('/registration')
    return {}
  }
}

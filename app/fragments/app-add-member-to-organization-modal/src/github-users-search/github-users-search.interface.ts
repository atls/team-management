import type { Dispatch }       from 'react'
import type { SetStateAction } from 'react'

export type GithubUserSearchType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelectedUsersParentHook: Dispatch<SetStateAction<any>>
}

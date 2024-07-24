import { Dispatch }       from 'react'
import { SetStateAction } from 'react'

export type GithubUserSearchType = {
  setSelectedUsersParentHook: Dispatch<SetStateAction<never[]>>
}

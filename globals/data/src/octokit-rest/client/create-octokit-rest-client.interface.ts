import { RequestInterface } from '@octokit/types'

export type CreateOctokitRestClientType = (token: string) => RequestInterface<object>

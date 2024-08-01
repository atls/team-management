import type { GraphQlQueryResponseData } from '@octokit/graphql'
import type { RequestParameters }        from '@octokit/types'

import { graphql }                       from '@octokit/graphql'

type DocumentType = typeof document

export type CreateOctokitGraphqlClientType = (token: string) => typeof graphql

export type RequestOctokitGraphqlDataType = (
  document: DocumentType,
  query: string,
  queryData: RequestParameters
) => Promise<GraphQlQueryResponseData>

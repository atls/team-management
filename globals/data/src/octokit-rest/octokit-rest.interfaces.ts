import type { Endpoints }        from '@octokit/types'
import type { RequestInterface } from '@octokit/types'

type DocumentType = typeof document

type EndpointType = Endpoints[keyof Endpoints]
export type EndpointParametersType = EndpointType['parameters']
export type EndpointResponseType = EndpointType['response']

type QueryType = [queryString: string, queryData: EndpointParametersType]

export type RequestOctokitRestDataType = (
  document: DocumentType,
  query: QueryType
) => Promise<EndpointResponseType>

export type GetRestQueryType = (queryValues: Record<string, string>) => QueryType

export type CreateOctokitRestClientType = (token: string) => RequestInterface

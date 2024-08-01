import type { Endpoints } from '@octokit/types'

export type DocumentType = typeof document

type EndpointType = Endpoints[keyof Endpoints]
export type EndpointParametersType = EndpointType['parameters']
export type EndpointResponseType = EndpointType['response']

type QueryType = [queryString: string, queryData: EndpointParametersType]

export type RequestOctokitRestDataType = (
  document: DocumentType,
  query: QueryType
) => Promise<EndpointResponseType>

export type GetRestQueryType = (queryValues: Record<string, string>) => QueryType

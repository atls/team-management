import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/* eslint-disable */
import * as types                            from './graphql.js'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query GetOrganizationMembers($organizationId: ID!, $organizationMembersLimit: Int!) {\n    node(id: $organizationId) {\n      ... on Organization {\n        membersWithRole(first: $organizationMembersLimit) {\n          nodes {\n            id\n            login\n            url\n            avatarUrl\n            name\n            bio\n          }\n        }\n      }\n    }\n  }\n':
    types.GetOrganizationMembersDocument,
  '\n  query GetOrganizationTeams($organizationId: ID!, $organizationTeamsLimit: Int!) {\n    node(id: $organizationId) {\n      ... on Organization {\n        teams(first: $organizationTeamsLimit) {\n          nodes {\n            id\n            databaseId\n            name\n          }\n        }\n      }\n    }\n  }\n':
    types.GetOrganizationTeamsDocument,
  '\n  query GetViewerAllOrganizationsAllMembers(\n    $organizationsLimit: Int!\n    $organizationMembersLimit: Int!\n  ) {\n    viewer {\n      organizations(first: $organizationsLimit) {\n        nodes {\n          id\n          login\n          name\n          url\n          viewerCanAdminister\n          avatarUrl\n          membersWithRole(first: $organizationMembersLimit) {\n            nodes {\n              id\n              login\n              email\n              name\n              bio\n              url\n              avatarUrl\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.GetViewerAllOrganizationsAllMembersDocument,
  '\n  query GetViewerOrganizations($organizationsLimit: Int!, $organizationMembersLimit: Int!) {\n    viewer {\n      organizations(first: $organizationsLimit) {\n        nodes {\n          id\n          login\n          name\n          url\n          membersWithRole(first: $organizationMembersLimit) {\n            totalCount\n          }\n          viewerCanAdminister\n          description\n          avatarUrl\n        }\n      }\n    }\n  }\n':
    types.GetViewerOrganizationsDocument,
  '\n  query GetViewer {\n    viewer {\n      name\n      avatarUrl\n      email\n      url\n    }\n  }\n':
    types.GetViewerDocument,
  '\n  query SearchUser($searchLimit: Int!, $searchQuery: String!) {\n    search(first: $searchLimit, type: USER, query: $searchQuery) {\n      edges {\n        node {\n          ... on User {\n            id\n            databaseId\n            name\n            avatarUrl\n            email\n          }\n        }\n      }\n    }\n  }\n':
    types.SearchUserDocument,
}

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetOrganizationMembers($organizationId: ID!, $organizationMembersLimit: Int!) {\n    node(id: $organizationId) {\n      ... on Organization {\n        membersWithRole(first: $organizationMembersLimit) {\n          nodes {\n            id\n            login\n            url\n            avatarUrl\n            name\n            bio\n          }\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetOrganizationMembers($organizationId: ID!, $organizationMembersLimit: Int!) {\n    node(id: $organizationId) {\n      ... on Organization {\n        membersWithRole(first: $organizationMembersLimit) {\n          nodes {\n            id\n            login\n            url\n            avatarUrl\n            name\n            bio\n          }\n        }\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetOrganizationTeams($organizationId: ID!, $organizationTeamsLimit: Int!) {\n    node(id: $organizationId) {\n      ... on Organization {\n        teams(first: $organizationTeamsLimit) {\n          nodes {\n            id\n            databaseId\n            name\n          }\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetOrganizationTeams($organizationId: ID!, $organizationTeamsLimit: Int!) {\n    node(id: $organizationId) {\n      ... on Organization {\n        teams(first: $organizationTeamsLimit) {\n          nodes {\n            id\n            databaseId\n            name\n          }\n        }\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetViewerAllOrganizationsAllMembers(\n    $organizationsLimit: Int!\n    $organizationMembersLimit: Int!\n  ) {\n    viewer {\n      organizations(first: $organizationsLimit) {\n        nodes {\n          id\n          login\n          name\n          url\n          viewerCanAdminister\n          avatarUrl\n          membersWithRole(first: $organizationMembersLimit) {\n            nodes {\n              id\n              login\n              email\n              name\n              bio\n              url\n              avatarUrl\n            }\n          }\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetViewerAllOrganizationsAllMembers(\n    $organizationsLimit: Int!\n    $organizationMembersLimit: Int!\n  ) {\n    viewer {\n      organizations(first: $organizationsLimit) {\n        nodes {\n          id\n          login\n          name\n          url\n          viewerCanAdminister\n          avatarUrl\n          membersWithRole(first: $organizationMembersLimit) {\n            nodes {\n              id\n              login\n              email\n              name\n              bio\n              url\n              avatarUrl\n            }\n          }\n        }\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetViewerOrganizations($organizationsLimit: Int!, $organizationMembersLimit: Int!) {\n    viewer {\n      organizations(first: $organizationsLimit) {\n        nodes {\n          id\n          login\n          name\n          url\n          membersWithRole(first: $organizationMembersLimit) {\n            totalCount\n          }\n          viewerCanAdminister\n          description\n          avatarUrl\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetViewerOrganizations($organizationsLimit: Int!, $organizationMembersLimit: Int!) {\n    viewer {\n      organizations(first: $organizationsLimit) {\n        nodes {\n          id\n          login\n          name\n          url\n          membersWithRole(first: $organizationMembersLimit) {\n            totalCount\n          }\n          viewerCanAdminister\n          description\n          avatarUrl\n        }\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetViewer {\n    viewer {\n      name\n      avatarUrl\n      email\n      url\n    }\n  }\n'
): (typeof documents)['\n  query GetViewer {\n    viewer {\n      name\n      avatarUrl\n      email\n      url\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query SearchUser($searchLimit: Int!, $searchQuery: String!) {\n    search(first: $searchLimit, type: USER, query: $searchQuery) {\n      edges {\n        node {\n          ... on User {\n            id\n            databaseId\n            name\n            avatarUrl\n            email\n          }\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  query SearchUser($searchLimit: Int!, $searchQuery: String!) {\n    search(first: $searchLimit, type: USER, query: $searchQuery) {\n      edges {\n        node {\n          ... on User {\n            id\n            databaseId\n            name\n            avatarUrl\n            email\n          }\n        }\n      }\n    }\n  }\n']

export function gql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never

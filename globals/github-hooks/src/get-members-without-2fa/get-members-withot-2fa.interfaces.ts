type DocumentType = typeof document

export type GetMembersWithout2faType = (document: DocumentType) => Promise<Array<string>>

export interface GithubMember {
  id: string
}

export interface GithubResponse {
  data: Array<GithubMember>
}

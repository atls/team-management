type DocumentType = typeof document

export type GetMembersWithout2faType = (document: DocumentType) => Promise<Array<string>>

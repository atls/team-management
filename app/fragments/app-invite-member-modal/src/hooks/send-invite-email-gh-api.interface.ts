import { DocumentType } from '@globals/helpers'

export type SendInviteEmailGhApiHookType = ({
  document,
  inputValues,
  ghOrgName,
}: {
  document: DocumentType
  inputValues: Array<string>
  ghOrgName: string
}) => void

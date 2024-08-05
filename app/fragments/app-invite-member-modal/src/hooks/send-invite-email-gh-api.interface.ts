import type { DocumentType } from '@globals/helpers'
import type { ToastType }    from '@stores/toast-notification'

export type SendInviteEmailGhApiHookType = ({
  document,
  inputValues,
  ghOrgName,
  toast,
}: {
  document: DocumentType
  inputValues: Array<string>
  ghOrgName: string
  toast: ToastType
}) => void

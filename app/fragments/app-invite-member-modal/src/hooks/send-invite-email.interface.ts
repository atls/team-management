export type SendInviteEmailHookType = ({
  emails,
  selectedInvites,
}: {
  emails: Array<string>
  selectedInvites: Array<string>
}) => void

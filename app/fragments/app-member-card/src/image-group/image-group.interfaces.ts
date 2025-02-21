import type { useState }                        from 'react'

import type { MemberWithOrganizationsDataType } from '../member-card.interfaces.js'

export type ImageGroupProps = {
  memberData: MemberWithOrganizationsDataType
  memberOrganizationsDataState: ReturnType<typeof useState<any>>
  timerMilliseconds?: number
}

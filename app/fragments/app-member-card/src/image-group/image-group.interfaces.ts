import type { MemberWithOrganizationsDataType } from '../member-card.interfaces.js'

import { useState }                             from 'react'

export type ImageGroupProps = {
  memberData: MemberWithOrganizationsDataType
  memberOrganizationsDataState: ReturnType<typeof useState<any>>
  timerMilliseconds?: number
}

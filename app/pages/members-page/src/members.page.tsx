import React                          from 'react'
import { FC }                         from 'react'

import { MemberCardsGrid }            from '@app/member-cards-grid'

import { ORGANIZATIONS_LIMIT }        from './members.constants.js'
import { ORGANIZATION_MEMBERS_LIMIT } from './members.constants.js'

const MembersPage: FC = () => (
  <MemberCardsGrid
    organizationsLimit={ORGANIZATIONS_LIMIT}
    organizationMembersLimit={ORGANIZATION_MEMBERS_LIMIT}
  />
)

export default MembersPage

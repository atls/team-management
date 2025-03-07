import type { FC }                    from 'react'

import React                          from 'react'

import { OrganizationCardsGrid }      from '@app/organization-cards-grid'

import { ORGANIZATIONS_LIMIT }        from './organizations.constants.js'
import { ORGANIZATION_MEMBERS_LIMIT } from './organizations.constants.js'

const OrganizationsPage: FC = () => (
  <OrganizationCardsGrid
    organizationsLimit={ORGANIZATIONS_LIMIT}
    organizationMembersLimit={ORGANIZATION_MEMBERS_LIMIT}
  />
)

export default OrganizationsPage

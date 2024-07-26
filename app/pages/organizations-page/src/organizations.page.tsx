import { OrganizationCardsGrid }      from '@app/organization-cards-grid'

import React                          from 'react'
import { FC }                         from 'react'

import { ORGANIZATIONS_LIMIT }        from './organizations.constants.js'
import { ORGANIZATION_MEMBERS_LIMIT } from './organizations.constants.js'

const OrganizationsPage: FC = () => (
  <OrganizationCardsGrid
    organizationsLimit={ORGANIZATIONS_LIMIT}
    organizationMembersLimit={ORGANIZATION_MEMBERS_LIMIT}
  />
)

export default OrganizationsPage

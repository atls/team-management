'use client'

import React                       from 'react'
import { FC }                      from 'react'

import { OrganizationCard }        from '@app/organization-card-fragment'
import { OrganizationDataType }    from '@app/organization-card-fragment'
import { OrganizationCardGrid }    from '@app/organization-card-grid-fragment'

import { ORGANIZATIONS_TEST_DATA } from './organizations-page.constants.js'

const OrganizationsPage: FC = () => {
  const organizationsData = ORGANIZATIONS_TEST_DATA

  return (
    <OrganizationCardGrid>
      {organizationsData.map((organizationData: OrganizationDataType) => (
        <OrganizationCard organizationData={organizationData} />
      ))}
    </OrganizationCardGrid>
  )
}

export default OrganizationsPage

import React                        from 'react'
import { FC }                       from 'react'

import { OrganizationCard }         from '@app/organization-card-fragment'
import { OrganizationDataType }     from '@app/organization-card-fragment'
import { OrganizationCardGrid }     from '@app/organization-card-grid-fragment'

import { getOrganizationsPageData } from './get-organizations-page-data.js'

const OrganizationsPage: FC = async () => {
  const organizationsData = await getOrganizationsPageData()

  return (
    <OrganizationCardGrid>
      {organizationsData.map((organizationData: OrganizationDataType) => (
        <OrganizationCard organizationData={organizationData} />
      ))}
    </OrganizationCardGrid>
  )
}

export default OrganizationsPage

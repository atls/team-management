import { OrganizationCard }     from '@app/organization-card-fragment'
import { OrganizationDataType } from '@app/organization-card-fragment'
import { OrganizationCardGrid } from '@app/organization-card-grid-fragment'

import React                    from 'react'
import { FC }                   from 'react'

const OrganizationsPage: FC = () => {
  const ORGANIZATION_TEST_DATA: OrganizationDataType = {
    organizationId: 1,
    organizationTitle: 'atls',
    organizationDescription: 'Atlantis Main Team',
    organizationMembersQuantity: 15,
    organizationCoverSrc:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.sWCvltMZF_s3mjA5sL-RdgHaE8%26pid%3DApi&f=1&ipt=75b1307f72623776b37217b88a805f10036ed22338715def57bb6eeb6c55323b&ipo=images',
  }

  const TEST_ORGANIZATIONS_DATA = [
    ORGANIZATION_TEST_DATA,
    ORGANIZATION_TEST_DATA,
    ORGANIZATION_TEST_DATA,
    ORGANIZATION_TEST_DATA,
  ]

  const organizationsData = TEST_ORGANIZATIONS_DATA

  return (
    <OrganizationCardGrid>
      {organizationsData.map((organizationData: OrganizationDataType) => (
        <OrganizationCard organizationData={organizationData} />
      ))}
    </OrganizationCardGrid>
  )
}

export default OrganizationsPage

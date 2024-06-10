import React                    from 'react'
import { FC }                   from 'react'

import { OrganizationCard }     from '@fragments/organization-card'
import { OrganizationCardGrid } from '@fragments/organization-card-grid'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Box }                  from '@ui/layout'
import { Sidebar }              from '@ui/sidebar'

export const OrganizationsPage: FC<any> = ({}) => {
  const TEST_ORGANIZATION_DATA = {}

  const TEST_ORGANIZATIONS_DATA = [
    TEST_ORGANIZATION_DATA,
    TEST_ORGANIZATION_DATA,
    TEST_ORGANIZATION_DATA,
    TEST_ORGANIZATION_DATA,
  ]

  const organizationsData = TEST_ORGANIZATIONS_DATA

  return (
    <Row>
      <Box>SideBar</Box>
      <Column width='100%' justifyContent='center' paddingTop={110}>
        <OrganizationCardGrid>
          <Box gridColumn='1 / -1'>Team members</Box>
          {organizationsData.map((organizationData) => (
            <OrganizationCard {...organizationData} />
          ))}
        </OrganizationCardGrid>
      </Column>
    </Row>
  )
}

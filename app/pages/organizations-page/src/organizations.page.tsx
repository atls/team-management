import { useTheme }             from '@emotion/react'

import React                    from 'react'
import { FC }                   from 'react'

import { UsersTitle }           from '@app/users-title'
import { OrganizationCard }     from '@fragments/organization-card'
import { OrganizationCardGrid } from '@fragments/organization-card-grid'
import { Column }               from '@ui/layout'
import { Box }                  from '@ui/layout'
import { ThemeType }            from '@ui/theme'

export const OrganizationsPage: FC<any> = ({}) => {
  const theme = useTheme() as ThemeType

  const ORGANIZATION_TEST_DATA = {
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

  // TODO params to theme? new component?
  return (
    <Box
      width='100%'
      minHeight='100vh'
      justifyContent='center'
      alignItems='flex-start'
      padding='110px 40px 0'
      backgroundColor={theme.colors.organizationsPage.background}
    >
      <OrganizationCardGrid>
        <Box gridColumn='1 / -1'>
          <UsersTitle />
        </Box>
        {organizationsData.map((organizationData) => (
          <OrganizationCard {...organizationData} />
        ))}
      </OrganizationCardGrid>
    </Box>
  )
}

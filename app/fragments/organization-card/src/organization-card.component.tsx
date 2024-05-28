import React                     from 'react'
import { FC }                    from 'react'

import { Button }                from '@ui/button'
import { Row }                   from '@ui/layout'
import { Column }                from '@ui/layout'
import { Box }                   from '@ui/layout'
import { Text }                  from '@ui/text'

import { OrganizationCardProps } from './organization-card.interfaces'

export const OrganizationCard: FC<OrganizationCardProps> = () => {
  return (
    <Row>
      <Box>image</Box>
      <Column>
        <Text>title</Text>
        <Text>description</Text>
        <Text>ICON number of members</Text>
        <Row>
          <Text>team button</Text>
          <Text>add to team button</Text>
        </Row>
      </Column>
    </Row>
  )
}

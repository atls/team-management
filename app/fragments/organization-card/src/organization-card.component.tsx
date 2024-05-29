import styled                    from '@emotion/styled'

import React                     from 'react'
import { FC }                    from 'react'

import { Button }                from '@ui/button'
import { TeamIcon }              from '@ui/icons'
import { AddIcon }               from '@ui/icons'
import { ImageBlock }            from '@ui/image'
import { Row }                   from '@ui/layout'
import { Column }                from '@ui/layout'
import { Box }                   from '@ui/layout'
import { Text }                  from '@ui/text'

import { OrganizationCardProps } from './organization-card.interfaces'
import { appearanceStyles }      from './organization-card.styles'
import { shapeStyles }           from './organization-card.styles'
import { baseContentStyles }     from './organization-card.styles'
import { shapeContentStyles }    from './organization-card.styles'

const OrganizationCardWrapper = styled(Row)(appearanceStyles, shapeStyles)

const OrganizationCardContentContainer = styled(Column)(baseContentStyles, shapeContentStyles)

const Members: FC<any> = ({ quantity }) => {
  let memberString: string
  quantity === 1 ? (memberString = 'member') : (memberString = 'members')
  return (
    <>
      <TeamIcon color='white' />
      <Text fontSize='small.default' color='white'>
        {quantity} {memberString}
      </Text>
    </>
  )
}

export const OrganizationCard: FC<OrganizationCardProps> = ({
  title,
  description,
  membersQuantity,
  organizationCoverSrc,
}) => {
  return (
    <OrganizationCardWrapper>
      <Box minWidth={150}>
        <ImageBlock src={organizationCoverSrc} />
      </Box>
      <OrganizationCardContentContainer>
        <Column gap={3}>
          <Text fontSize='normal.semiDefault' color='white'>
            {title}
          </Text>
          {description && (
            <Text fontSize='small.default' color='white'>
              {description}
            </Text>
          )}
          <Row gap={3} alignItems='center'>
            <Members quantity={membersQuantity} />
          </Row>
        </Column>
        <Row gap={12} justifyContent='end'>
          <Button
            shape='circle'
            size='middlingRoundedPadding'
            // style={{ boxShadow: theme.shadows.black }}
            variant='blueBackgroundButton'
          >
            <TeamIcon color='white' width={18} height={18} />
          </Button>
          <Button
            shape='circle'
            size='middlingRoundedPadding'
            // style={{ boxShadow: theme.shadows.black }}
            variant='blueBackgroundButton'
          >
            <AddIcon color='white' width={18} height={18} />
          </Button>
        </Row>
      </OrganizationCardContentContainer>
    </OrganizationCardWrapper>
  )
}

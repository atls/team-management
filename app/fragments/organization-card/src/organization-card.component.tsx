import { useTheme }              from '@emotion/react'

import React                     from 'react'
import { FC }                    from 'react'
import { FormattedPlural }       from 'react-intl'
import { memo }                  from 'react'
import { useIntl }               from 'react-intl'

import { Button }                from '@ui/button'
import { TeamIcon }              from '@ui/icons'
import { AddIcon }               from '@ui/icons'
import { ImageBlock }            from '@ui/image'
import { Row }                   from '@ui/layout'
import { Column }                from '@ui/layout'
import { Box }                   from '@ui/layout'
import { Text }                  from '@ui/text'
import { Space }                 from '@ui/text'

import { OrganizationCardProps } from './organization-card.interfaces'

const Members: FC<any> = ({ quantity }) => {
  const { formatMessage } = useIntl()
  return (
    <>
      <TeamIcon color='white' />
      <Text fontSize='small.default' color='white'>
        {quantity}
        <Space />
        <FormattedPlural
          value={quantity}
          one={formatMessage({ id: 'organization-card_member.one' })}
          other={formatMessage({ id: 'organization-card_member.many' })}
        />
      </Text>
    </>
  )
}

export const OrganizationCard: FC<OrganizationCardProps> = memo(({
  title,
  description,
  membersQuantity,
  organizationCoverSrc,
}) => {
  const theme: any = useTheme()

  return (
    <Box
      overflow='hidden'
      height={theme.spaces.superBiggest}
      borderRadius={theme.radii.f10}
      background={theme.backgrounds.darkBlueGradient}
      boxShadow={theme.shadows.diesel}
    >
      <Row>
        <Box minWidth={theme.spaces.superBiggest}>
          <ImageBlock src={organizationCoverSrc} />
        </Box>
        <Column padding={theme.spaces.v14h12} width='100%'>
          <Column gap={theme.spaces.semiTiny}>
            <Text fontSize='normal.semiDefault' color='white'>
              {title}
            </Text>
            {description && (
              <Text fontSize='small.default' color='white'>
                {description}
              </Text>
            )}
            <Row gap={theme.spaces.semiTiny} alignItems='center'>
              <Members quantity={12} />
            </Row>
          </Column>
          <Row gap={theme.spaces.micro} justifyContent='end'>
            <Button shape='circle' size='middlingRoundedPadding' variant='blueBackgroundButton'>
              <TeamIcon
                color='white'
                width={theme.spaces.semiRegular}
                height={theme.spaces.semiRegular}
              />
            </Button>
            <Button shape='circle' size='middlingRoundedPadding' variant='blueBackgroundButton'>
              <AddIcon
                color='white'
                width={theme.spaces.semiRegular}
                height={theme.spaces.semiRegular}
              />
            </Button>
          </Row>
        </Column>
      </Row>
    </Box>
  )
})

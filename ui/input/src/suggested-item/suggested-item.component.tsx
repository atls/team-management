import styled                               from '@emotion/styled'
import { useTheme }                         from '@emotion/react'

import React                                from 'react'
import { FC }                               from 'react'

import { ImageBlock }                       from '@ui/image'
import { Box }                              from '@ui/layout'
import { Column }                           from '@ui/layout'
import { Text }                             from '@ui/text'

import { SuggestedItemProps }               from './suggested-item.interfaces'
import { baseSuggestedItemBoxStyles }       from './suggested-item.styles'
import { shapeSuggestedItemBoxStyles }      from './suggested-item.styles'
import { appearanceSuggestedItemBoxStyles } from './suggested-item.styles'

const SuggestedItemBox = styled(Box)(
  baseSuggestedItemBoxStyles,
  shapeSuggestedItemBoxStyles,
  appearanceSuggestedItemBoxStyles
)

export const SuggestedItem: FC<SuggestedItemProps> = ({
  firstName,
  lastName,
  email,
  avatarSrc,
  onClick,
}) => {
  const theme: any = useTheme()

  return (
    <SuggestedItemBox onClick={onClick}>
      <Box
        width={theme.spaces.increased}
        height={theme.spaces.increased}
        borderRadius={theme.radii.f24}
        overflow='hidden'
      >
        <ImageBlock src={avatarSrc} />
      </Box>
      <Column gap={theme.spaces.zero}>
        <Text fontSize='small.semiLarge' color={theme.colors.GRAY_1600}>
          {firstName} {lastName}
        </Text>
        <Text fontSize='small.default' color={theme.colors.GRAY_1000}>
          {email}
        </Text>
      </Column>
    </SuggestedItemBox>
  )
}

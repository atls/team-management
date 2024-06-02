import styled                               from '@emotion/styled'
import { useTheme }                         from '@emotion/react'

import React                                from 'react'
import { FC }                               from 'react'
import { useContext }                       from 'react'

import { ImageBlock }                       from '@ui/image'
import { Box }                              from '@ui/layout'
import { Column }                           from '@ui/layout'
import { Text }                             from '@ui/text'

import { InputValueDispatchContext }        from '../input.context'
import { SelectedItemsDispatchContext }     from '../selected-items'
import { SuggestedItemsDispatchContext }    from '../suggested-items'
import { SuggestedItemProps }               from './suggested-item.interfaces'
import { baseSuggestedItemBoxStyles }       from './suggested-item.styles'
import { shapeSuggestedItemBoxStyles }      from './suggested-item.styles'
import { appearanceSuggestedItemBoxStyles } from './suggested-item.styles'

const SuggestedItemBox = styled(Box)(
  baseSuggestedItemBoxStyles,
  shapeSuggestedItemBoxStyles,
  appearanceSuggestedItemBoxStyles
)

export const SuggestedItem: FC<SuggestedItemProps> = (suggestedItemData) => {
  const { firstName, lastName, email, avatarSrc } = suggestedItemData
  const theme: any = useTheme()
  const selectedItemsDispatch = useContext(SelectedItemsDispatchContext)
  const suggestedItemsDispatch = useContext(SuggestedItemsDispatchContext)
  const inputValueDispatch = useContext(InputValueDispatchContext)

  function handleAddSelectedItem(e, suggestedItemData) {
    selectedItemsDispatch({
      type: 'added',
      itemData: suggestedItemData,
    })
    suggestedItemsDispatch({
      type: 'clean',
    })
    inputValueDispatch({
      type: 'clean',
    })
  }

  return (
    <SuggestedItemBox onClick={(e) => handleAddSelectedItem(e, suggestedItemData)}>
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

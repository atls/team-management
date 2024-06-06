import styled                               from '@emotion/styled'
import { useTheme }                         from '@emotion/react'

import React                                from 'react'
import { FC }                               from 'react'
import { useContext }                       from 'react'

import { ImageBlock }                       from '@ui/image'
import { Box }                              from '@ui/layout'
import { Column }                           from '@ui/layout'
import { Text }                             from '@ui/text'

import { InputValueDispatchContext }        from '../select-input.context.js'
import { SelectedItemsDispatchContext }     from '../selected-items/index.js'
import { SuggestedItemsDispatchContext }    from '../suggested-items/index.js'
import { SuggestedItemProps }               from './suggested-item.interfaces.js'
import { baseSuggestedItemBoxStyles }       from './suggested-item.styles.js'
import { shapeSuggestedItemBoxStyles }      from './suggested-item.styles.js'
import { appearanceSuggestedItemBoxStyles } from './suggested-item.styles.js'

const SuggestedItemBox = styled(Box)(
  baseSuggestedItemBoxStyles,
  shapeSuggestedItemBoxStyles,
  appearanceSuggestedItemBoxStyles
)

export const SuggestedItem: FC<SuggestedItemProps> = (suggestedItemData) => {
  const { primaryInfo, secondaryInfo, imageSrc } = suggestedItemData

  const theme: any = useTheme()

  const selectedItemsDispatch = useContext(SelectedItemsDispatchContext) as any
  const suggestedItemsDispatch = useContext(SuggestedItemsDispatchContext) as any
  const inputValueDispatch = useContext(InputValueDispatchContext) as any

  function handleAddSelectedItem(e, itemData) {
    selectedItemsDispatch({
      type: 'added',
      itemData,
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
      {imageSrc && (
        <Box
          width={theme.spaces.increased}
          height={theme.spaces.increased}
          borderRadius={theme.radii.f24}
          overflow='hidden'
        >
          <ImageBlock src={imageSrc} />
        </Box>
      )}
      <Column gap={theme.spaces.zero}>
        <Text fontSize='small.semiLarge' color={theme.colors.GRAY_1600}>
          {primaryInfo}
        </Text>
        {secondaryInfo && (
          <Text fontSize='small.default' color={theme.colors.GRAY_1000}>
            {secondaryInfo}
          </Text>
        )}
      </Column>
    </SuggestedItemBox>
  )
}

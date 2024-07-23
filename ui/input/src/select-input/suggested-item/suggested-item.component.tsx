import styled                               from '@emotion/styled'
import { InputValueDispatchContext }        from '@store/select-input'
import { SelectedItemsDispatchContext }     from '@store/select-input'
import { SuggestedItemsDispatchContext }    from '@store/select-input'
import { useTheme }                         from '@emotion/react'
import { useSelectInput }                   from '@store/select-input'

import React                                from 'react'
import { FC }                               from 'react'
import { useContext }                       from 'react'

import { ImageBlock }                       from '@ui/image'
import { Box }                              from '@ui/layout'
import { Column }                           from '@ui/layout'
import { Text }                             from '@ui/text'

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
  const selectInput = useSelectInput()

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
        <Text fontSize='small.semiLarge'>{primaryInfo}</Text>
        {secondaryInfo && (
          <Text fontSize='small.default' color={theme.colors.text.secondary}>
            {secondaryInfo}
          </Text>
        )}
      </Column>
    </SuggestedItemBox>
  )
}

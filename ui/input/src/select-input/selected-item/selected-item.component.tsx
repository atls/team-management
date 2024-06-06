import styled                              from '@emotion/styled'
import { useTheme }                        from '@emotion/react'

import React                               from 'react'
import { FC }                              from 'react'
import { useContext }                      from 'react'

import { RemoveIcon }                      from '@ui/icons'
import { Box }                             from '@ui/layout'
import { Text }                            from '@ui/text'

import { SelectedItemsDispatchContext }    from '../selected-items/index.js'
import { SelectedItemProps }               from './selected-item.interface.js'
import { baseSelectedItemBoxStyles }       from './selected-item.styles.js'
import { shapeSelectedItemBoxStyles }      from './selected-item.styles.js'
import { appearanceSelectedItemBoxStyles } from './selected-item.styles.js'

const SelectedItemBox = styled(Box)(
  baseSelectedItemBoxStyles,
  shapeSelectedItemBoxStyles,
  appearanceSelectedItemBoxStyles
)

export const SelectedItem: FC<SelectedItemProps> = (selectedItemData) => {
  const { primaryInfo } = selectedItemData

  const theme: any = useTheme()
  const selectedItemsDispatch = useContext(SelectedItemsDispatchContext)

  function handleDeleteSelectedItem(e, itemData) {
    selectedItemsDispatch({
      type: 'deleted',
      itemData,
    })
  }

  return (
    <SelectedItemBox onClick={(e) => handleDeleteSelectedItem(e, selectedItemData)}>
      <RemoveIcon cursor='pointer' width={theme.spaces.micro} />
      <Text fontSize='small.semiLarge' wordBreak='keep-all'>
        {primaryInfo}
      </Text>
    </SelectedItemBox>
  )
}

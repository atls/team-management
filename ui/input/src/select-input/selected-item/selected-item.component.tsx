import type { ThemeType }                  from '@ui/theme'
import type { FC }                         from 'react'

import type { SelectedItemProps }          from './selected-item.interface.js'

import styled                              from '@emotion/styled'
import { useContext }                      from 'react'
import React                               from 'react'

import { SelectedItemsDispatchContext }    from '@stores/select-input'
import { RemoveIcon }                      from '@ui/icons'
import { Box }                             from '@ui/layout'
import { Text }                            from '@ui/text'
import { useTheme }                        from '@emotion/react'

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

  const theme = useTheme() as ThemeType
  const selectedItemsDispatch = useContext(SelectedItemsDispatchContext)

  function handleDeleteSelectedItem(
    e: React.MouseEvent<HTMLDivElement>,
    itemData: SelectedItemProps
  ): void {
    selectedItemsDispatch?.({
      type: 'deleted',
      itemData,
    })
  }

  return (
    <SelectedItemBox
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        handleDeleteSelectedItem(e, selectedItemData)
      }}
    >
      <RemoveIcon cursor='pointer' width={theme.spaces.micro} color={theme.colors.text.primary} />
      <Text fontSize='small.semiLarge' wordBreak='keep-all'>
        {primaryInfo}
      </Text>
    </SelectedItemBox>
  )
}

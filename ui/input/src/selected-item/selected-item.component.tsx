import styled                              from '@emotion/styled'
import { useTheme }                        from '@emotion/react'

import React                               from 'react'
import { FC }                              from 'react'

import { RemoveIcon }                      from '@ui/icons'
import { Box }                             from '@ui/layout'
import { Text }                            from '@ui/text'

import { SelectedItemProps }               from './selected-item.interface'
import { baseSelectedItemBoxStyles }       from './selected-item.styles'
import { shapeSelectedItemBoxStyles }      from './selected-item.styles'
import { appearanceSelectedItemBoxStyles } from './selected-item.styles'

const SelectedItemBox = styled(Box)(
  baseSelectedItemBoxStyles,
  shapeSelectedItemBoxStyles,
  appearanceSelectedItemBoxStyles
)

export const SelectedItem: FC<SelectedItemProps> = ({ firstName, lastName, onDeleteClick }) => {
  const theme: any = useTheme()

  return (
    <SelectedItemBox onClick={onDeleteClick}>
      <RemoveIcon cursor='pointer' width={theme.spaces.micro} />
      <Text fontSize='small.semiLarge' wordBreak='keep-all'>
        {firstName} {lastName}
      </Text>
    </SelectedItemBox>
  )
}

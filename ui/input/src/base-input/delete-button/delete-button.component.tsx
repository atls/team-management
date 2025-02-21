import type { BoxProps }          from '@ui/layout'
import type { ThemeType }         from '@ui/theme'
import type { FC }                from 'react'

import type { DeleteButtonProps } from './delete-button.interfaces.js'

import styled                     from '@emotion/styled'
import React                      from 'react'

import { Condition }              from '@ui/condition'
import { RemoveIcon }             from '@ui/icons'
import { Box }                    from '@ui/layout'
import { useTheme }               from '@emotion/react'

import { baseDeleteButtonStyles } from './delete-button.styles.js'

const DeleteButtonContainer = styled(Box)<BoxProps>(baseDeleteButtonStyles)

export const DeleteButton: FC<DeleteButtonProps> = ({ deleteHook }) => {
  const theme = useTheme() as ThemeType

  return (
    <Condition match={Boolean(deleteHook)}>
      <DeleteButtonContainer onClick={deleteHook}>
        <RemoveIcon color={theme.colors.input.fontColor} />
      </DeleteButtonContainer>
    </Condition>
  )
}

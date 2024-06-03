import styled                     from '@emotion/styled'

import React                      from 'react'
import { FC }                     from 'react'

import { Condition }              from '@ui/condition'
import { RemoveIcon }             from '@ui/icons'
import { Box }                    from '@ui/layout'
import { BoxProps }               from '@ui/layout'

import { DeleteButtonProps }      from './delete-button.interfaces'
import { baseDeleteButtonStyles } from './delete-button.styles'

const DeleteButtonContainer = styled(Box)<BoxProps>(baseDeleteButtonStyles)

export const DeleteButton: FC<DeleteButtonProps> = ({ deleteHook }) => (
  <Condition match={deleteHook}>
    <DeleteButtonContainer onClick={deleteHook}>
      <RemoveIcon />
    </DeleteButtonContainer>
  </Condition>
)

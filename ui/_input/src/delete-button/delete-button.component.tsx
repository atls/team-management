import styled                     from '@emotion/styled'
import { Box }                    from '@atls-ui-parts/layout'
import { BoxProps }               from '@atls-ui-parts/layout'

import React                      from 'react'
import { FC }                     from 'react'

import { Condition }              from '@ui/condition'
import { RemoveIcon }             from '@ui/icons'

import { DeleteButtonProps }      from './delete-button.interfaces.js'
import { baseDeleteButtonStyles } from './delete-button.styles.js'

const DeleteButtonContainer = styled(Box)<BoxProps>(baseDeleteButtonStyles)

export const DeleteButton: FC<DeleteButtonProps> = ({ deleteButton, onClick }) => (
  <Condition match={deleteButton}>
    <DeleteButtonContainer onClick={onClick}>
      <RemoveIcon />
    </DeleteButtonContainer>
  </Condition>
)

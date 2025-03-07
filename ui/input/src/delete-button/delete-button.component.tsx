import type { BoxProps }          from '@atls-ui-parts/layout'
import type { FC }                from 'react'

import type { DeleteButtonProps } from './delete-button.interfaces.js'

import { Box }                    from '@atls-ui-parts/layout'
import styled                     from '@emotion/styled'
import React                      from 'react'

import { Condition }              from '@ui/condition'
import { RemoveIcon }             from '@ui/icons'

import { baseDeleteButtonStyles } from './delete-button.styles.js'

const DeleteButtonContainer = styled(Box)<BoxProps>(baseDeleteButtonStyles)

export const DeleteButton: FC<DeleteButtonProps> = ({ deleteButton, onClick }) => (
  <Condition match={deleteButton}>
    <DeleteButtonContainer onClick={onClick}>
      <RemoveIcon />
    </DeleteButtonContainer>
  </Condition>
)

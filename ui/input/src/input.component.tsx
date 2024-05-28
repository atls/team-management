import styled                       from '@emotion/styled'
import { RawInput }                 from '@atls-ui-parts/input'
import { Box }                      from '@atls-ui-parts/layout'
import { useChangeValue }           from '@atls-ui-parts/input'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef }               from 'react'
import { useState }                 from 'react'

import { Condition }                from '@ui/condition'

import { DeleteButton }             from './delete-button'
import { InputProps }               from './input.interfaces'
import { InputContainerProps }      from './input.interfaces'
import { shapeStyles }              from './input.styles'
import { appearanceStyles }         from './input.styles'

const InputContainer = styled(Box)<InputContainerProps>(shapeStyles, appearanceStyles)

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { value, disabled, onChange, onChangeNative, deleteButton = false, errorText, ...props },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)

  const [visibleInputState, setVisibleInputState] = useState(true)

  const handleDeleteButton = (e) => {
    setVisibleInputState(false)
  }

  return (
    <Condition match={visibleInputState}>
      <InputContainer {...props} position='relative'>
        <RawInput ref={ref} {...props} disabled={disabled} value={value} onChange={changeValue} />
        <DeleteButton deleteButton={deleteButton} onClick={handleDeleteButton} />
      </InputContainer>
    </Condition>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)

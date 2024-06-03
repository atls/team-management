import styled                       from '@emotion/styled'
import { RawInput }                 from '@atls-ui-parts/input'
import { useChangeValue }           from '@atls-ui-parts/input'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef }               from 'react'
import { useState }                 from 'react'

import { Condition }                from '@ui/condition'
import { Box }                      from '@ui/layout'

import { InputProps }               from './base-input.interfaces'
import { InputContainerProps }      from './base-input.interfaces'
import { DeleteButton }             from './delete-button'
import { ErrorMessage }             from './error-message'
import { shapeStyles }              from '../input.styles'
import { appearanceStyles }         from '../input.styles'

const BaseInputBox = styled(Box)<BaseInputBoxProps>(shapeStyles, appearanceStyles)

const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, BaseInputProps> = (
  { value, disabled, onChange, onChangeNative, deleteButton = false, errorMessage, ...props },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)

  const [visibleInputState, setVisibleInputState] = useState(true)

  const handleDeleteButton = (e) => {
    setVisibleInputState(false)
  }

  return (
    <Condition match={visibleInputState}>
      <BaseInputBox {...props} position='relative'>
        <ErrorMessage messageText={errorMessage} />
        <RawInput ref={ref} {...props} disabled={disabled} value={value} onChange={changeValue} />
        <DeleteButton deleteButton={deleteButton} onClick={handleDeleteButton} />
      </BaseInputBox>
    </Condition>
  )
}

export const BaseInput = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)

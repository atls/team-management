import styled                       from '@emotion/styled'
import { RawInput }                 from '@atls-ui-parts/input'
import { useChangeValue }           from '@atls-ui-parts/input'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef }               from 'react'

import { Box }                      from '@ui/layout'

import { BaseInputProps }           from './base-input.interfaces'
import { BaseInputBoxProps }        from './base-input.interfaces'
import { DeleteButton }             from './delete-button'
import { ErrorMessage }             from './error-message'
import { shapeStyles }              from '../input.styles'
import { appearanceStyles }         from '../input.styles'

const BaseInputBox = styled(Box)<BaseInputBoxProps>(shapeStyles, appearanceStyles)

const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, BaseInputProps> = (
  { value, disabled, onChange, onChangeNative, deleteHook, errorText, ...props },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)

  return (
    <BaseInputBox {...props} position='relative'>
      <ErrorMessage messageText={errorText} />
      <RawInput ref={ref} {...props} disabled={disabled} value={value} onChange={changeValue} />
      <DeleteButton deleteHook={deleteHook} />
    </BaseInputBox>
  )
}

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(InputWithoutRef)

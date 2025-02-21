import type { ForwardRefRenderFunction } from 'react'

import type { BaseInputProps }           from './base-input.interfaces.js'
import type { BaseInputBoxProps }        from './base-input.interfaces.js'

import { RawInput }                      from '@atls-ui-parts/input'
import { useChangeValue }                from '@atls-ui-parts/input'
import styled                            from '@emotion/styled'
import { forwardRef }                    from 'react'
import React                             from 'react'

import { Box }                           from '@ui/layout'

import { DeleteButton }                  from './delete-button/index.js'
import { ErrorMessage }                  from './error-message/index.js'
import { shapeStyles }                   from '../input.styles.js'
import { appearanceStyles }              from '../input.styles.js'

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

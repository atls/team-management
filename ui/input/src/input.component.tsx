import styled                       from '@emotion/styled'
import { RawInput }                 from '@atls-ui-parts/input'
import { Box }                      from '@atls-ui-parts/layout'
import { BoxProps }                 from '@atls-ui-parts/layout'
import { useChangeValue }           from '@atls-ui-parts/input'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef }               from 'react'

import { InputProps }               from './input.interfaces'
import { shapeStyles }              from './input.styles'
import { appearanceStyles }         from './input.styles'

const InputElement = styled(Box)<BoxProps>(shapeStyles, appearanceStyles)

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { value, disabled, onChange, onChangeNative, ...props },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)

  return (
    <InputElement {...props}>
      <RawInput ref={ref} {...props} disabled={disabled} value={value} onChange={changeValue} />
    </InputElement>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)

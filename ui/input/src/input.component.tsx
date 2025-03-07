import type { BoxProps }                 from '@atls-ui-parts/layout'
import type { ForwardRefRenderFunction } from 'react'

import type { InputProps }               from './input.interfaces.js'

import { RawInput }                      from '@atls-ui-parts/input'
import { Box }                           from '@atls-ui-parts/layout'
import { useChangeValue }                from '@atls-ui-parts/input'
import styled                            from '@emotion/styled'
import { forwardRef }                    from 'react'
import React                             from 'react'

import { shapeStyles }                   from './input.styles.js'
import { appearanceStyles }              from './input.styles.js'

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

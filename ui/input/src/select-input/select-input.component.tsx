import { RawInput }                 from '@atls-ui-parts/input'
import styled                       from '@emotion/styled'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef }               from 'react'
import { useRef }                   from 'react'
import { useLayer }                 from 'react-laag'
import React                        from 'react'

import { ChangeEvent }       from 'react'

import { Box }                      from '@ui/layout'
import { useTheme }                 from '@emotion/react'
import { useSelectInput }           from '@stores/select-input'

import { SelectInputProps }         from './select-input.interfaces.js'
import { SelectedItems }            from './selected-items/index.js'
import { SuggestedItemsContainer }  from './suggested-items-container/index.js'
import { shapeStyles }              from '../input.styles.js'
import { appearanceStyles }         from '../input.styles.js'

const InputBox = styled(Box)(shapeStyles, appearanceStyles)

const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, SelectInputProps> = ({
  value,
  onChange,
  onChangeNative,
  errorText,
  parentHook,
  ...props
}) => {
  const theme: any = useTheme()
  const inputRef = useRef(null) as any
  const selectInput = useSelectInput()

  const { inputValue } = selectInput
  const { setInputValue } = selectInput
  const { suggestedItems } = selectInput

  const handlerClickContainer = () => {
    if (inputRef?.current) inputRef.current.focus()
    return undefined
  }

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen: suggestedItems && suggestedItems.length,
    placement: 'bottom-start',
    overflowContainer: false,
    auto: true,
    triggerOffset: theme.spaces.zero,
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValueString = e.target.value
    setInputValue(inputValueString)
  }

  return (
    <InputBox {...props} {...triggerProps} onClick={handlerClickContainer} position='relative'>
      <SelectedItems />
      <Box width='max-content' minWidth={theme.spaces.semiSuperExtra}>
        <RawInput ref={inputRef} {...props} value={inputValue} onChange={handleInputChange} />
      </Box>
      <SuggestedItemsContainer
        layerProps={layerProps}
        renderLayer={renderLayer}
        suggestedItems={suggestedItems}
      />
    </InputBox>
  )
}

export const SelectInput = forwardRef<HTMLInputElement, SelectInputProps>(InputWithoutRef)

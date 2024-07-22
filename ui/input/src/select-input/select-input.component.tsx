import styled                            from '@emotion/styled'
import { RawInput }                      from '@atls-ui-parts/input'
import { useTheme }                      from '@emotion/react'

import React                             from 'react'
import { ForwardRefRenderFunction }      from 'react'
import { forwardRef }                    from 'react'
import { useRef }                        from 'react'
import { useEffect }                     from 'react'
import { useContext }                    from 'react'
import { useLayer }                      from 'react-laag'

import { Box }                           from '@ui/layout'

import { SelectInputProvider }           from './context/index.js'
import { InputValueDispatchContext }     from './select-input.context.js'
import { InputValueContext }             from './select-input.context.js'
import { SelectInputProps }              from './select-input.interfaces.js'
import { SelectedItems }                 from './selected-items/index.js'
import { SelectedItemsContext }          from './selected-items/index.js'
import { SuggestedItemsContainer }       from './suggested-items-container/index.js'
import { SuggestedItemsDispatchContext } from './suggested-items/index.js'
import { SuggestedItemsContext }         from './suggested-items/index.js'
import { shapeStyles }                   from '../input.styles.js'
import { appearanceStyles }              from '../input.styles.js'

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

  const inputValue = useContext(InputValueContext)
  const selectedItems = useContext(SelectedItemsContext)
  const suggestedItems = useContext(SuggestedItemsContext)
  const suggestedItemsDispatch = useContext(SuggestedItemsDispatchContext)
  const inputValueDispatch = useContext(InputValueDispatchContext)

  const handlerClickContainer = () => {
    if (inputRef?.current) inputRef.current.focus()
    return undefined
  }

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen: suggestedItems.length,
    placement: 'bottom-start',
    overflowContainer: false,
    auto: true,
    triggerOffset: theme.spaces.zero,
  })

  const handleInputChange = (e) => {
    const inputValueString = e.target.value

    inputValueDispatch({
      type: 'set',
      inputValue: inputValueString,
    })
  }

  return (
    <SelectInputProvider>
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
    </SelectInputProvider>
  )
}

export const SelectInput = forwardRef<HTMLInputElement, SelectInputProps>(InputWithoutRef)

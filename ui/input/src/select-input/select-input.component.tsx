import styled                            from '@emotion/styled'
import { RawInput }                      from '@atls-ui-parts/input'
import { useTheme }                      from '@emotion/react'

import React                             from 'react'
import { ForwardRefRenderFunction }      from 'react'
import { useReducer }                    from 'react'
import { forwardRef }                    from 'react'
import { useRef }                        from 'react'
import { useEffect }                     from 'react'
import { useLayer }                      from 'react-laag'

import { Box }                           from '@ui/layout'

import { InputValueContext }             from './select-input.context'
import { InputValueDispatchContext }     from './select-input.context'
import { SelectInputProps }              from './select-input.interfaces'
import { SelectedItemsDispatchContext }  from './selected-items'
import { SelectedItems }                 from './selected-items'
import { SelectedItemsContext }          from './selected-items'
import { SuggestedItemsContext }         from './suggested-items'
import { SuggestedItemsDispatchContext } from './suggested-items'
import { SuggestedItemsContainer }       from './suggested-items-container'
import { shapeStyles }                   from '../input.styles'
import { appearanceStyles }              from '../input.styles'
import { inputValueReducer }             from './select-input.reducer'
import { selectedItemsReducer }          from './selected-items'
import { suggestedItemsReducer }         from './suggested-items'

const InputBox = styled(Box)(shapeStyles, appearanceStyles)

const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, SelectInputProps> = ({
  value,
  onChange,
  onChangeNative,
  errorText,
  searchItems,
  parentHook,
  ...props
}) => {
  const theme: any = useTheme()
  const inputRef = useRef(null) as any

  const [selectedItems, selectedItemsDispatch] = useReducer(selectedItemsReducer, [])
  const [suggestedItems, suggestedItemsDispatch] = useReducer(suggestedItemsReducer, [])
  const [inputValue, inputValueDispatch] = useReducer(inputValueReducer, '')

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

    if (inputValueString) {
      const compare = (string) => !!string.match(inputValueString)
      const matched = searchItems.filter((searchItem) => {
        const { id, primaryInfo, secondaryInfo } = searchItem
        let compareString = primaryInfo
        if (secondaryInfo) compareString += secondaryInfo

        if (compare(compareString) && !selectedItems.some((item) => item.id === id))
          return searchItem
        return undefined
      })

      suggestedItemsDispatch({
        type: 'change',
        suggestedItems: matched,
      })
    } else {
      suggestedItemsDispatch({
        type: 'clean',
      })
    }
  }

  useEffect(() => {
    parentHook(selectedItems)
  }, [parentHook, selectedItems])

  return (
    <SuggestedItemsContext.Provider value={suggestedItems}>
      <SuggestedItemsDispatchContext.Provider value={suggestedItemsDispatch}>
        <SelectedItemsContext.Provider value={selectedItems}>
          <SelectedItemsDispatchContext.Provider value={selectedItemsDispatch}>
            <InputValueContext.Provider value={inputValue}>
              <InputValueDispatchContext.Provider value={inputValueDispatch}>
                <InputBox
                  {...props}
                  {...triggerProps}
                  onClick={handlerClickContainer}
                  position='relative'
                >
                  <SelectedItems />
                  <Box width='max-content' minWidth={theme.spaces.semiSuperExtra}>
                    <RawInput
                      ref={inputRef}
                      {...props}
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                  </Box>
                  <SuggestedItemsContainer
                    layerProps={layerProps}
                    renderLayer={renderLayer}
                    suggestedItems={suggestedItems}
                  />
                </InputBox>
              </InputValueDispatchContext.Provider>
            </InputValueContext.Provider>
          </SelectedItemsDispatchContext.Provider>
        </SelectedItemsContext.Provider>
      </SuggestedItemsDispatchContext.Provider>
    </SuggestedItemsContext.Provider>
  )
}

export const SelectInput = forwardRef<HTMLInputElement, SelectInputProps>(InputWithoutRef)

import styled                            from '@emotion/styled'
import { RawInput }                      from '@atls-ui-parts/input'
import { useChangeValue }                from '@atls-ui-parts/input'
import { useTheme }                      from '@emotion/react'

import React                             from 'react'
import { ForwardRefRenderFunction }      from 'react'
import { useReducer }                    from 'react'
import { forwardRef }                    from 'react'
import { useState }                      from 'react'
import { useRef }                        from 'react'
import { useEffect }                     from 'react'
import { useLayer }                      from 'react-laag'

import { Condition }                     from '@ui/condition'
import { Box }                           from '@ui/layout'

import { DeleteButton }                  from './delete-button'
import { InputValueContext }             from './input.context'
import { InputValueDispatchContext }     from './input.context'
import { InputProps }                    from './input.interfaces'
import { InputContainerProps }           from './input.interfaces'
import { SelectedItemsDispatchContext }  from './selected-items'
import { SelectedItems }                 from './selected-items'
import { SelectedItemsContext }          from './selected-items'
import { SuggestedItemsContext }         from './suggested-items'
import { SuggestedItemsDispatchContext } from './suggested-items'
import { SuggestedItemsContainer }       from './suggested-items-container'
import { inputValueReducer }             from './input.reducer'
import { shapeStyles }                   from './input.styles'
import { appearanceStyles }              from './input.styles'
import { selectedItemsReducer }          from './selected-items'
import { suggestedItemsReducer }         from './suggested-items'

const InputContainer = styled(Box)<InputContainerProps>(shapeStyles, appearanceStyles)

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  value,
  disabled,
  onChange,
  onChangeNative,
  deleteButton = false,
  errorText,
  searchItems,
  parentHook,
  ...props
}) => {
  const theme: any = useTheme()
  const inputRef = useRef(null)
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)

  const [selectedItems, selectedItemsDispatch] = useReducer(selectedItemsReducer, [])
  const [suggestedItems, suggestedItemsDispatch] = useReducer(suggestedItemsReducer, [])
  const [inputValue, inputValueDispatch] = useReducer(inputValueReducer, '')

  const [visibleInputState, setVisibleInputState] = useState(true)

  const handleDeleteInputButtonClick = () => setVisibleInputState(false)
  const handlerClickContainer = () => inputRef.current.focus()

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
        const { firstName, lastName, email } = searchItem
        const compareString = `${firstName} ${lastName} ${email}`
        if (compare(compareString) && !selectedItems.some((item) => item.email === email))
          return searchItem
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
  }, [selectedItems])

  return (
    <SuggestedItemsContext.Provider value={suggestedItems}>
      <SuggestedItemsDispatchContext.Provider value={suggestedItemsDispatch}>
        <SelectedItemsContext.Provider value={selectedItems}>
          <SelectedItemsDispatchContext.Provider value={selectedItemsDispatch}>
            <InputValueContext.Provider value={inputValue}>
              <InputValueDispatchContext.Provider value={inputValueDispatch}>
                <Condition match={visibleInputState}>
                  <InputContainer
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
                        disabled={disabled}
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                    </Box>
                    <DeleteButton
                      deleteButton={deleteButton}
                      onClick={handleDeleteInputButtonClick}
                    />
                    <SuggestedItemsContainer
                      layerProps={layerProps}
                      renderLayer={renderLayer}
                      suggestedItems={suggestedItems}
                    />
                  </InputContainer>
                </Condition>
              </InputValueDispatchContext.Provider>
            </InputValueContext.Provider>
          </SelectedItemsDispatchContext.Provider>
        </SelectedItemsContext.Provider>
      </SuggestedItemsDispatchContext.Provider>
    </SuggestedItemsContext.Provider>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)

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

import { InputValueContext }             from './github-search-users-input.context.js'
import { InputValueDispatchContext }     from './github-search-users-input.context.js'
import { SelectInputProps }              from './github-search-users-input.interfaces.js'
import { SelectedItemsDispatchContext }  from './selected-items/index.js'
import { SelectedItems }                 from './selected-items/index.js'
import { SelectedItemsContext }          from './selected-items/index.js'
import { SuggestedItemsContainer }       from './suggested-items-container/index.js'
import { SuggestedItemsContext }         from './suggested-items/index.js'
import { SuggestedItemsDispatchContext } from './suggested-items/index.js'
import { shapeStyles }                   from '../input.styles.js'
import { appearanceStyles }              from '../input.styles.js'
import { inputValueReducer }             from './github-search-users-input.reducer.js'
import { getSearchedUsers }              from './search-users.hook.js'
import { selectedItemsReducer }          from './selected-items/index.js'
import { suggestedItemsReducer }         from './suggested-items/index.js'

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

  // TODO searchItems not used
  const handleInputChange = async (e) => {
    const inputValueString = e.target.value

    inputValueDispatch({
      type: 'set',
      inputValue: inputValueString,
    })

    if (inputValueString) {
      const matched = await getSearchedUsers({ searchQuery: inputValueString })

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

export const GithubSearchUsersInput = forwardRef<HTMLInputElement, SelectInputProps>(
  InputWithoutRef
)
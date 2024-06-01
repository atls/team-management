import styled                       from '@emotion/styled'
import { RawInput }                 from '@atls-ui-parts/input'
import { useChangeValue }           from '@atls-ui-parts/input'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef }               from 'react'
import { useState }                 from 'react'
import { useRef }                   from 'react'
import { useLayer }                 from 'react-laag'

import { Condition }                from '@ui/condition'
import { Box }                      from '@ui/layout'

import { DeleteButton }             from './delete-button'
import { InputProps }               from './input.interfaces'
import { InputContainerProps }      from './input.interfaces'
import { SelectedItem }             from './selected-item'
import { SuggestedItem }            from './suggested-item'
import { SuggestedItemsContainer }  from './suggested-items-container'
import { shapeStyles }              from './input.styles'
import { appearanceStyles }         from './input.styles'

const InputContainer = styled(Box)<InputContainerProps>(shapeStyles, appearanceStyles)

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  value,
  disabled,
  onChange,
  onChangeNative,
  deleteButton = false,
  errorText,
  searchItems,
  ...props
}) => {
  const inputRef = useRef(null)
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)

  const [visibleInputState, setVisibleInputState] = useState(true)
  const handleDeleteInputButtonClick = () => {
    setVisibleInputState(false)
  }

  const [selectedItems, setSelectedItems] = useState([])
  const [inputValue, setInputValue] = useState(value)
  const [suggestedItems, setSuggestedItems] = useState([])

  const handlerClickContainer = () => inputRef.current.focus()

  const handleChange = (e) => {
    const inputString = e.target.value
    setInputValue(inputString)
    if (!!inputString) {
      const compare = (string) => !!string.match(inputString)

      const matched = searchItems.filter((searchItem) => {
        const { firstName, lastName, email } = searchItem
        const compareString = firstName + ' ' + lastName + ' ' + email

        if (compare(compareString) && !selectedItems.some((item) => item.email === email))
          return searchItem
      })

      setSuggestedItems(matched)
    } else setSuggestedItems([])

    changeValue(e)
  }

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen: suggestedItems.length,
    placement: 'bottom-start',
    overflowContainer: false,
    auto: true,
    triggerOffset: 0,
    containerOffset: 16,
    arrowOffset: 16,
  })

  const handleSuggestedItemClick = (e, data) => {
    setSelectedItems(selectedItems.concat(data))
    setSuggestedItems([])
    inputRef.current.focus()
    setInputValue('')
  }

  const handleSelectedItemDeleteClick = (deleteItemData) => {
    setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== deleteItemData))
    inputRef.current.focus()
  }

  return (
    <Condition match={visibleInputState}>
      <InputContainer
        {...props}
        {...triggerProps}
        onClick={handlerClickContainer}
        position='relative'
      >
        <Condition match={selectedItems.length}>
          {selectedItems.map((selectedItemData) => {
            return (
              <SelectedItem
                {...selectedItemData}
                onDeleteClick={() => handleSelectedItemDeleteClick(selectedItemData)}
              />
            )
          })}
        </Condition>
        <Box width='max-content' minWidth={190}>
          <RawInput
            width='max-content'
            ref={inputRef}
            {...props}
            disabled={disabled}
            value={inputValue}
            onChange={handleChange}
          />
        </Box>
        <DeleteButton deleteButton={deleteButton} onClick={handleDeleteInputButtonClick} />
        <Condition match={suggestedItems.length}>
          {renderLayer(
            <SuggestedItemsContainer layerProps={layerProps}>
              {suggestedItems.map((searchItemData) => {
                return (
                  <SuggestedItem
                    {...searchItemData}
                    onClick={(e) => handleSuggestedItemClick(e, searchItemData)}
                  />
                )
              })}
            </SuggestedItemsContainer>
          )}
        </Condition>
      </InputContainer>
    </Condition>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)

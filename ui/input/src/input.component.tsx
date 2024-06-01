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
import { SearchItem }               from './search-item'
import { SearchItemsContainer }     from './search-items-container'
import { SelectedItem }             from './selected-item'
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

  const [visibleState, setVisibleInputState] = useState(true)
  const handleDeleteButton = () => {
    setVisibleInputState(false)
  }

  const [selectedItems, setSelectedItems] = useState([])
  const [inputValue, setInputValue] = useState(value)
  const [matchedSearchItems, setMatchedSearchItems] = useState([])

  const handlerClickContainer = (e) => {
    inputRef.current.focus()
  }

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

      setMatchedSearchItems(matched)
    } else setMatchedSearchItems([])

    changeValue(e)
  }

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen: matchedSearchItems.length,
    placement: 'bottom-start',
    overflowContainer: false,
    auto: true,
    triggerOffset: 0,
    containerOffset: 16,
    arrowOffset: 16,
  })

  const handleClickSearchItem = (e, data) => {
    setSelectedItems(selectedItems.concat(data))
    setMatchedSearchItems([])
    inputRef.current.focus()
    setInputValue('')
  }

  const handleDeleteClickSearchItem = (deleteItemData) => {
    setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== deleteItemData))
    inputRef.current.focus()
  }

  return (
    <Condition match={visibleState}>
      <InputContainer
        id='input-id'
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
                onDeleteClick={() => handleDeleteClickSearchItem(selectedItemData)}
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
        <DeleteButton deleteButton={deleteButton} onClick={handleDeleteButton} />
        <Condition match={matchedSearchItems.length}>
          {renderLayer(
            <SearchItemsContainer layerProps={layerProps}>
              {matchedSearchItems.map((searchItemData) => {
                return (
                  <SearchItem
                    {...searchItemData}
                    onClick={(e) => handleClickSearchItem(e, searchItemData)}
                  />
                )
              })}
            </SearchItemsContainer>
          )}
        </Condition>
      </InputContainer>
    </Condition>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)

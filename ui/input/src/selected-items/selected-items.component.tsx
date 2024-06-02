import React                    from 'react'
import { useContext }           from 'react'

import { Condition }            from '@ui/condition'

import { SelectedItem }         from '../selected-item'
import { SelectedItemsContext } from '../selected-items'

export const SelectedItems = () => {
  const selectedItems = useContext(SelectedItemsContext)
  return (
    <Condition match={selectedItems.length}>
      {selectedItems.map((selectedItemData) => (
        <SelectedItem {...selectedItemData} />
      ))}
    </Condition>
  )
}

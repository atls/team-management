import React                    from 'react'
import { useContext }           from 'react'

import { SelectedItemsContext } from '@stores/select-input'
import { Condition }            from '@ui/condition'

import { SelectedItem }         from '../selected-item/index.js'
import { SelectedItemProps }    from '../selected-item/index.js'

export const SelectedItems = () => {
  const selectedItems: Array<SelectedItemProps> = useContext(SelectedItemsContext) as any

  return (
    <Condition match={selectedItems && !!selectedItems.length}>
      {selectedItems &&
        selectedItems.map((selectedItemData) => <SelectedItem {...selectedItemData} />)}
    </Condition>
  )
}

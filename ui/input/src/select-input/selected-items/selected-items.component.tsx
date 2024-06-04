import React                    from 'react'
import { useContext }           from 'react'

import { Condition }            from '@ui/condition'

import { SelectedItem }         from '../selected-item'
import { SelectedItemProps }    from '../selected-item'
import { SelectedItemsContext } from '../selected-items'

export const SelectedItems = () => {
  const selectedItems: Array<SelectedItemProps> = useContext(SelectedItemsContext) as any

  return (
    <Condition match={selectedItems && !!selectedItems.length}>
      {selectedItems &&
        selectedItems.map((selectedItemData) => <SelectedItem {...selectedItemData} />)}
    </Condition>
  )
}

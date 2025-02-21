import type { SelectedItemProps } from '../selected-item/index.js'

import { useContext }             from 'react'
import React                      from 'react'

import { SelectedItemsContext }   from '@stores/select-input'
import { Condition }              from '@ui/condition'

import { SelectedItem }           from '../selected-item/index.js'

export const SelectedItems = () => {
  const selectedItems: Array<SelectedItemProps> = useContext(SelectedItemsContext)

  return (
    <Condition match={!!selectedItems && !!selectedItems.length}>
      {!!selectedItems &&
        selectedItems.map((selectedItemData) => <SelectedItem {...selectedItemData} />)}
    </Condition>
  )
}

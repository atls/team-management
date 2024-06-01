import React            from 'react'

import { Condition }    from '@ui/condition'

import { SelectedItem } from '../selected-item'

export const SelectedItems = ({ selectedItems, onClick }) => (
  <Condition match={selectedItems.length}>
    {selectedItems.map((selectedItemData) => (
      <SelectedItem {...selectedItemData} onDeleteClick={() => onClick(selectedItemData)} />
    ))}
  </Condition>
)

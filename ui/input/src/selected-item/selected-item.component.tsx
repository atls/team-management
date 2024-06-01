import React          from 'react'
import { FC }         from 'react'

import { RemoveIcon } from '@ui/icons'
import { Box }        from '@ui/layout'
import { Text }       from '@ui/text'

export const SelectedItem: FC<SelectedItemProps> = ({ firstName, lastName, onDeleteClick }) => {
  return (
    <Box
      cursor='pointer'
      flexDirection='row'
      alignItems='center'
      width='auto'
      gap={8}
      borderRadius={4}
      padding={4}
      backgroundColor='#D7D7D7'
      onClick={onDeleteClick}
    >
      <RemoveIcon cursor='pointer' width={12} />
      <Text fontSize='small.semiLarge' style={{ 'text-wrap': 'nowrap' }}>
        {firstName} {lastName}
      </Text>
    </Box>
  )
}

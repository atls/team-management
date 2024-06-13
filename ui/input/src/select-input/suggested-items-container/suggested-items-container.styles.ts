import { styleFn } from 'styled-system'

export const baseSuggestedItemsContainerBoxStyles: styleFn = ({ theme }) => ({
  zIndex: theme.spaces.s1500,
  gap: theme.spaces.tiny,
  flexWrap: 'wrap',
})

export const shapeSuggestedItemsContainerBoxStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.bl9br9,
  padding: theme.spaces.semiRegular,
})

export const appearanceSuggestedItemsContainerBoxStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.selectInput.suggestedItemsContainer,
})

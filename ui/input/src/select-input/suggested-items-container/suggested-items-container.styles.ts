import { styleFn } from 'styled-system'

export const baseSuggestedItemsContainerBoxStyles: styleFn = ({ theme }) => ({
  zIndex: theme.spaces.s1600,
  gap: theme.spaces.tiny,
  flexWrap: 'wrap',
})

export const shapeSuggestedItemsContainerBoxStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.bl9br9,
  padding: theme.spaces.semiRegular,
  maxWidth: theme.spaces.superExtraIncreasedSmall,
})

export const appearanceSuggestedItemsContainerBoxStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.selectInput.suggestedItemsContainer,
})

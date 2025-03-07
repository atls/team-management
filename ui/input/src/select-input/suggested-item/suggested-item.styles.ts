import type { styleFn } from 'styled-system'

export const baseSuggestedItemBoxStyles: styleFn = ({ theme }) => ({
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spaces.micro,
})

export const shapeSuggestedItemBoxStyles: styleFn = ({ theme }) => ({
  width: 'fit-content',
  height: 'min-content',
  padding: theme.spaces.miniTiny,
  borderRadius: theme.spaces.micro,
})

export const appearanceSuggestedItemBoxStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.selectInput.suggestedItem,
})

import { styleFn } from 'styled-system'

export const baseSidebarStyles: styleFn = ({ theme }) => ({
  position: 'sticky',
  top: theme.spaces.zero,
})

export const shapeSidebarStyles: styleFn = ({ theme }) => ({
  width: theme.spaces.largeSemiDecreased,
  height: theme.spaces.fullVh,
  padding: '30px 0 30px',
  gap: theme.spaces.moderate,
})

export const appearanceSidebarStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.white,
})

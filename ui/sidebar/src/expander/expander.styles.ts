import { CSSObject } from '@emotion/css'

import { theme }     from '@ui/theme'

export const baseExpanderStyles: CSSObject = {
  height: theme.space.full,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  borderRight: '0 solid transparent',
  outline: 'none',
  overflow: 'hidden',
}

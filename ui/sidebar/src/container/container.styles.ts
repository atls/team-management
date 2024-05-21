import { CSSObject } from '@emotion/css'

import { theme }     from '@ui/theme'

export const baseContainerStyles: CSSObject = {
  display: 'flex',
  justifyContent: 'space-between',
  height: theme.space.full,
  position: 'static',
  flexDirection: 'column',
  boxSizing: 'border-box',
  outline: 'none',
  backgroundColor: theme.backgrounds.white,
}

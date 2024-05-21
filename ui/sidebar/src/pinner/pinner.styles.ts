import { CSSObject } from '@emotion/css'

import { theme }     from '@ui/theme'

export const basePinnerStyles: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  zIndex: '999',
  position: 'absolute',
  top: '80%',
}

import { CSSObject } from '@emotion/css'

import { theme }     from '../../../../theme/src'

export const baseItemIconStyles: CSSObject = {
  height: theme.space.full,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}

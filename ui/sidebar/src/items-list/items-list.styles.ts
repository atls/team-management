import { CSSObject } from '@emotion/css'

import { theme }     from '@ui/theme'

export const baseItemsStyles: CSSObject = {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  height: theme.space.full,
  marginTop: theme.space.largeSemiReduced,
}

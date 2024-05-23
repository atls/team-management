import { CSSObject } from '@emotion/css'

import { theme }     from '../../../../theme'

export const baseItemLabelStyles: CSSObject = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  padding: theme.space.tb0lr8,
  whiteSpace: 'nowrap',
  fontFamily: theme.fonts.primary,
}

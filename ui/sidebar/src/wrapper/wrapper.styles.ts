import { CSSObject } from '@emotion/css'

import { styleFn }   from 'styled-system'
import { ifProp }    from 'styled-tools'

import { theme }     from '@ui/theme'

export const baseWrapperStyles: CSSObject = {
  position: 'relative',
  display: 'flex',
  height: theme.space.full,
  width: theme.space.mediumIncreased,
}

export const pinnedWrapperStyles: CSSObject = {
  width: 'initial',
}

export const ifPinnedWrapperModifier = (styles?: CSSObject | styleFn) =>
  ifProp('pinned', [pinnedWrapperStyles, styles])

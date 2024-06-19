import { CSSObject } from '@emotion/css'

import { styleFn }   from 'styled-system'
import { ifProp }    from 'styled-tools'

import { theme }     from '@ui/theme'

export const baseWrapperStyles: CSSObject = {
  position: 'sticky',
  display: 'flex',
  height: theme.spaces.fullVh,
  width: theme.space.mediumIncreased,
  top: 0,
}

export const pinnedWrapperStyles: CSSObject = {
  width: 'initial',
}

export const ifPinnedWrapperModifier = (styles?: CSSObject | styleFn) =>
  ifProp('pinned', [pinnedWrapperStyles, styles])

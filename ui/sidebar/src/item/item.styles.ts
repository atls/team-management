import { CSSObject } from '@emotion/css'

import { styleFn }   from 'styled-system'
import { ifProp }    from 'styled-tools'

export const baseItemStyles: CSSObject = {
  width: '100%',
  height: 40,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  marginTop: '8px',
  textDecoration: 'none',
  boxSizing: 'border-box',
  color: 'black',
  padding: '4px 40px 4px 40px',
}

export const activeItemStyles: CSSObject = {
  '&:after': {
    content: '""',
    width: 2,
    backgroundColor: '#F5F9FF',
    right: 1,
    top: 1,
    bottom: 0,
    zIndex: 1,
  },
}

export const ifActiveItemModifier = (styles?: CSSObject | styleFn) =>
  ifProp('active', [activeItemStyles, styles])

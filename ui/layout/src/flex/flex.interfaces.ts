import { BoxProps }      from '@atls-ui-parts/layout'

import { CSSProperties } from 'react'

export interface FlexProps extends BoxProps {
  gap?: CSSProperties['gap']
  rowGap?: CSSProperties['rowGap']
  columnGap?: CSSProperties['columnGap']
}

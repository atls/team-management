import { BoxProps }      from '@atls-ui-parts/layout'

import { CSSProperties } from 'react'

export interface FlexProps extends BoxProps {
  height?: CSSProperties['height']
  gap?: CSSProperties['gap']
  rowGap?: CSSProperties['rowGap']
  columnGap?: CSSProperties['columnGap']
}

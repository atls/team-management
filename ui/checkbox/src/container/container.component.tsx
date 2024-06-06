import styled                      from '@emotion/styled'

import { containerBaseStyles }     from '../checkbox.styles.js'
import { containerPositionStyles } from '../checkbox.styles.js'

const Container = styled.div<{ labelPosition?: string; fill?: boolean }>(
  containerBaseStyles,
  containerPositionStyles
)

export { Container }

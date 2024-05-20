import styled                      from '@emotion/styled'

import { containerBaseStyles }     from '../checkbox.styles'
import { containerPositionStyles } from '../checkbox.styles'

const Container = styled.div<{ labelPosition?: string; fill?: boolean }>(
  containerBaseStyles,
  containerPositionStyles
)

export { Container }

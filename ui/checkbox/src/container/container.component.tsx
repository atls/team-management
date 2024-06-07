import styled                      from '@emotion/styled'

import { containerBaseStyles }     from '../checkbox.styles'
import { containerPositionStyles } from '../checkbox.styles'
import { baseStyles }               from './container.styles'

const Container = styled.div<{ labelPosition?: string; fill?: boolean; justifyContent?: string }>(
  containerBaseStyles,
  containerPositionStyles,
  baseStyles
)

export { Container }

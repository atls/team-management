import styled                      from '@emotion/styled'

import { containerBaseStyles }     from '../checkbox.styles.js'
import { containerPositionStyles } from '../checkbox.styles.js'
import { baseStyles }              from './container.styles.js'

const Container = styled.div<{ labelPosition?: string; fill?: boolean; justifyContent?: string }>(
  containerBaseStyles,
  containerPositionStyles,
  baseStyles
)

export { Container }

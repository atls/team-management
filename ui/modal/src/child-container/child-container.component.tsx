import styled                             from '@emotion/styled'
import { Box }                            from '@atls-ui-parts/layout'

import { baseChildContainerStyles }       from './child-container.styles'
import { appearanceChildContainerStyles } from './child-container.styles'
import { sizeChildContainerStyles }       from './child-container.styles'

const ChildContainer = styled(Box)(
  baseChildContainerStyles,
  appearanceChildContainerStyles,
  sizeChildContainerStyles
)

export { ChildContainer }

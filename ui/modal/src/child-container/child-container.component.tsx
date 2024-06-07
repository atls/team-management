import styled                             from '@emotion/styled'
import { Box }                            from '@atls-ui-parts/layout'

import { baseChildContainerStyles }       from './child-container.styles.js'
import { appearanceChildContainerStyles } from './child-container.styles.js'
import { sizeChildContainerStyles }       from './child-container.styles.js'

const ChildContainer = styled(Box)(
  baseChildContainerStyles,
  appearanceChildContainerStyles,
  sizeChildContainerStyles
)

export { ChildContainer }

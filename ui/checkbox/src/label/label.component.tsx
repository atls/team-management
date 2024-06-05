import styled                    from '@emotion/styled'
import { ConditionalRender }     from '@atls-ui-parts/conditional-render'

import { labelAppearanceStyles } from '../checkbox.styles.js'
import { labelPositionStyles }   from '../checkbox.styles.js'
import { labelShapeStyles }      from '../checkbox.styles.js'

const Label = styled(ConditionalRender())(
  labelShapeStyles,
  labelAppearanceStyles,
  labelPositionStyles
)

export { Label }

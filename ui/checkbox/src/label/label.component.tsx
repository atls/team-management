import styled                    from '@emotion/styled'
import { ConditionalRender }     from '@atls-ui-parts/conditional-render'

import { labelAppearanceStyles } from '../checkbox.styles'
import { labelPositionStyles }   from '../checkbox.styles'
import { labelShapeStyles }      from '../checkbox.styles'

const Label = styled(ConditionalRender())(
  labelShapeStyles,
  labelAppearanceStyles,
  labelPositionStyles
)

export { Label }

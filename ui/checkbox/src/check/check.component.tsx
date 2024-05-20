import styled                    from '@emotion/styled'

import { checkAppearanceStyles } from '../checkbox.styles'
import { checkBaseStyles }       from '../checkbox.styles'
import { checkShapeStyles }      from '../checkbox.styles'

const Check = styled.div<{ checked: boolean }>(
  checkBaseStyles,
  checkAppearanceStyles,
  checkShapeStyles
)

export { Check }

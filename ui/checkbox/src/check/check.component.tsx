import styled                    from '@emotion/styled'

import { checkAppearanceStyles } from '../checkbox.styles'
import { checkBaseStyles }       from '../checkbox.styles'
import { checkmarkShapeStyles }  from '../checkbox.styles'
import { checkmarkCheckStyles }  from '../checkbox.styles'

const Check = styled.div<{ checked: boolean }>(
  checkBaseStyles,
  checkAppearanceStyles,
  checkmarkShapeStyles,
  checkmarkCheckStyles
)

export { Check }

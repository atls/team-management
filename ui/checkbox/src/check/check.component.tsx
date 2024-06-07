import styled                    from '@emotion/styled'

import { checkmarkShapeStyles }  from '../checkbox.styles.js'
import { checkmarkCheckStyles }  from '../checkbox.styles.js'
import { checkAppearanceStyles } from '../checkbox.styles.js'
import { checkBaseStyles }       from '../checkbox.styles.js'

const Check = styled.div<{ checked: boolean }>(
  checkBaseStyles,
  checkAppearanceStyles,
  checkmarkShapeStyles,
  checkmarkCheckStyles
)

export { Check }

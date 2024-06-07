import styled                  from '@emotion/styled'

import { boxAppearanceStyles } from '../checkbox.styles.js'
import { boxBaseStyles }       from '../checkbox.styles.js'
import { boxShapeStyles }      from '../checkbox.styles.js'

const Box = styled.div(boxBaseStyles, boxAppearanceStyles, boxShapeStyles)

export { Box }

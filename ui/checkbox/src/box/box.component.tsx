import styled                  from '@emotion/styled'

import { boxAppearanceStyles } from '../checkbox.styles'
import { boxBaseStyles }       from '../checkbox.styles'
import { boxShapeStyles }      from '../checkbox.styles'

const Box = styled.div(boxBaseStyles, boxAppearanceStyles, boxShapeStyles)

export { Box }

import styled                from '@emotion/styled'
import { createBaseStyles }  from '@atls-ui-parts/avatar'
import { createShapeStyles } from '@atls-ui-parts/avatar'

const ContainerElement = styled.div(
  createBaseStyles(),
  createShapeStyles({
    size,
    borderRadius,
    borderWidth,
    padding,
    fontSize,
    fontWeight,
    fontFamily,
  })
)

export { ContainerElement }

import styled from '@emotion/styled'

import {baseChildContainerStyles} from './child-container.styles'
import {shapeChildContainerStyles} from './child-container.styles'
import {appearanceChildContainerStyles} from './child-container.styles'

const ChildContainer = styled.div(baseChildContainerStyles, shapeChildContainerStyles, appearanceChildContainerStyles)

export {ChildContainer}

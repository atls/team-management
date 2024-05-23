import styled                      from '@emotion/styled'

import { WrapperElement }          from './wrapper.element'
import { ifPinnedWrapperModifier } from './wrapper.styles'
import { baseWrapperStyles }       from './wrapper.styles'

const Wrapper = styled(WrapperElement)(baseWrapperStyles, ifPinnedWrapperModifier())

export { Wrapper }

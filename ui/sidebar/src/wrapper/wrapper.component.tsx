import styled                      from '@emotion/styled'

import { WrapperElement }          from './wrapper.element.js'
import { ifPinnedWrapperModifier } from './wrapper.styles.js'
import { baseWrapperStyles }       from './wrapper.styles.js'

const Wrapper = styled(WrapperElement)(baseWrapperStyles, ifPinnedWrapperModifier())

export { Wrapper }

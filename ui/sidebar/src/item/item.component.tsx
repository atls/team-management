import styled                                  from '@emotion/styled'

import { ItemElement }                         from './item.element'
import { baseItemStyles }                       from './item.styles'

import { ifActiveItemModifier } from './item.styles'

const Item = styled(ItemElement)(baseItemStyles, ifActiveItemModifier())

export { Item }

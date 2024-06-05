import styled                   from '@emotion/styled'

import { ItemElement }          from './item.element.js'
import { baseItemStyles }       from './item.styles.js'
import { ifActiveItemModifier } from './item.styles.js'

const Item = styled(ItemElement)(baseItemStyles, ifActiveItemModifier())

export { Item }

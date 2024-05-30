import styled                   from '@emotion/styled'
import { Row as BaseRow }       from '@atls-ui-parts/layout'
import { Column as BaseColumn } from '@atls-ui-parts/layout'

import { FlexProps }            from './flex.interfaces'
import { flexStyles }           from './flex.styles'

export const Row = styled(BaseRow)<FlexProps>(flexStyles)

export const Column = styled(BaseColumn)<FlexProps>(flexStyles)

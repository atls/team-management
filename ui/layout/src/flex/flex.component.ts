import type { BoxProps }        from '@atls-ui-parts/layout'

import type { FlexProps }       from './flex.interfaces.js'

import { Row as BaseRow }       from '@atls-ui-parts/layout'
import { Column as BaseColumn } from '@atls-ui-parts/layout'
import styled                   from '@emotion/styled'

import { flexStyles }           from './flex.styles.js'

export const Row = styled(BaseRow)<FlexProps>(flexStyles)

export const Column = styled(BaseColumn)<FlexProps>(flexStyles, { height: 'auto' })

export type { BoxProps }

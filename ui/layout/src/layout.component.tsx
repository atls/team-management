import type { TypographyProps }    from 'styled-system'

import type { LayoutWithGap }      from './styles/index.js'
import type { ColumnWithPosition } from './styles/index.js'

import { Layout as BaseLayout }    from '@atls-ui-parts/layout'
import { Box as BaseBox }          from '@atls-ui-parts/layout'
import { Row as BaseRow }          from '@atls-ui-parts/layout'
import { Column as BaseColumn }    from '@atls-ui-parts/layout'
import styled                      from '@emotion/styled'
import { typography }              from 'styled-system'

import { gapStyles }               from './styles/index.js'
import { positionStyles }          from './styles/index.js'

type GeneralProps = ColumnWithPosition & LayoutWithGap

export const Layout = styled(BaseLayout)<GeneralProps>(gapStyles)

export const Box = styled(BaseBox)<GeneralProps & TypographyProps>(typography, gapStyles)

export const Row = styled(BaseRow)<GeneralProps>(gapStyles)

export const Column = styled(BaseColumn)<GeneralProps>(gapStyles, positionStyles)

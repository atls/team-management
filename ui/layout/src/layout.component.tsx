import styled                   from '@emotion/styled'
import { Layout as BaseLayout } from '@atls-ui-parts/layout'
import { Box as BaseBox }       from '@atls-ui-parts/layout'
import { Row as BaseRow }       from '@atls-ui-parts/layout'
import { Column as BaseColumn } from '@atls-ui-parts/layout'

import { TypographyProps }      from 'styled-system'
import { typography }           from 'styled-system'

import { LayoutWithGap }        from './styles'
import { gapStyles }            from './styles'

type GeneralProps = LayoutWithGap

export const Layout = styled(BaseLayout)<GeneralProps>(gapStyles)

export const Box = styled(BaseBox)<GeneralProps & TypographyProps>(typography, gapStyles)

export const Row = styled(BaseRow)<GeneralProps>(gapStyles)

export const Column = styled(BaseColumn)<GeneralProps>(gapStyles)

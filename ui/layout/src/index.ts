import styled                   from '@emotion/styled'
import { Layout as BaseLayout } from '@atls-ui-parts/layout'
import { Box as BaseBox }       from '@atls-ui-parts/layout'

import { flexStyles }           from './flex/flex.styles'

export const Box = styled(BaseBox)(flexStyles)
export const Layout = styled(BaseLayout)(flexStyles)

export * from './flex'
export * from './grid'

import styled                   from '@emotion/styled'
import { Layout as BaseLayout } from '@atls-ui-parts/layout'
import { Box as BaseBox }       from '@atls-ui-parts/layout'

import { flexStyles }           from './flex/flex.styles.js'

export { BoxProps } from '@atls-ui-parts/layout'

export const Box = styled(BaseBox)(flexStyles)
export const Layout = styled(BaseLayout)(flexStyles)

export * from './flex/index.js'
export * from './grid/index.js'

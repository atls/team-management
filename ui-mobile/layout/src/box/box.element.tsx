import type { BoxProps } from './box.interfaces'

import styled            from '@emotion/native'

import { BaseBox }       from '../base-box.element'

export const BoxElement = styled(BaseBox)<BoxProps>`
  flex-direction: ${(props): string | undefined => props.flexDirection};
  width: ${(props): number | string | undefined =>
    props.width ?? (props.fullWidth ? '100%' : 'auto')};
  height: ${(props): number | string | undefined =>
    props.height ?? (props.fullHeight ? '100%' : 'auto')};
  min-width: ${(props): number | string | undefined => props.minWidth};
  min-height: ${(props): number | string | undefined => props.minHeight};
`

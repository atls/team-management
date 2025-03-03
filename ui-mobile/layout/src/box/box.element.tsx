import type { BoxProps } from './box.interfaces'

import styled            from '@emotion/native'

import { BaseBox }       from '../base-box.element'

export const BoxElement = styled(BaseBox)<BoxProps>`
  flex-direction: ${(props) => props.flexDirection};
  width: ${(props) => props.width ?? (props.fullWidth ? '100%' : 'auto')};
  height: ${(props) => props.height ?? (props.fullHeight ? '100%' : 'auto')};
  min-width: ${(props) => props.minWidth};
  min-height: ${(props) => props.minHeight};
`

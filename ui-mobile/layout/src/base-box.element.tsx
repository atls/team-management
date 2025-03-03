import type { BaseBoxProps } from './base-box.interfaces'

import styled                from '@emotion/native'

export const BaseBox = styled.View<BaseBoxProps>`
  flex: ${(props) => props.flex ?? 1};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
  overflow: ${(props) => props.overflow};
`

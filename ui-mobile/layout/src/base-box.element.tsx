import type { BaseBoxProps } from './base-box.interfaces'

import styled                from '@emotion/native'

export const BaseBox = styled.View<BaseBoxProps>`
    flex: ${(props): number => props.flex ?? 1};
    justify-content: ${(props): string | undefined => props.justifyContent};
    align-items: ${(props): string | undefined => props.alignItems};
    gap: ${(props): number | string | undefined => props.gap};
    overflow: ${(props): string | undefined => props.overflow};
`

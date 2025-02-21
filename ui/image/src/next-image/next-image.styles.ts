import type { styleFn }           from 'styled-system'

import type { ImageWrapperProps } from './next-image.interfaces'

import styled                     from '@emotion/styled'

export const createBaseNextImageStyles: styleFn = () =>
  ({ borderRadius }: { borderRadius?: number | string }) => ({
    width: '100%',
    height: '100%',
    borderRadius,
    overflow: 'hidden',
  })

export const NextImageWrapper = styled.div<ImageWrapperProps>(createBaseNextImageStyles())

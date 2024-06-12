import styled                from '@emotion/styled'

import { styleFn }           from 'styled-system'

import { ImageWrapperProps } from './next-image.interfaces'

export const createBaseNextImageStyles: styleFn = () =>
  ({ borderRadius }) => ({
    width: '100%',
    height: '100%',
    borderRadius: borderRadius,
    overflow: 'hidden',
  })
export const NextImageWrapper = styled.div<ImageWrapperProps>(createBaseNextImageStyles())

import styled                from '@emotion/styled'

import { styleFn }           from 'styled-system'

import { ImageWrapperProps } from './next-image.interfaces'

export const createBaseNextImageStyles: styleFn = ({ theme }) =>
  ({ borderRadius }) => ({
    width: theme.spaces.fullWidth,
    height: theme.spaces.fullWidth,
    borderRadius: borderRadius,
    overflow: 'hidden',
  })

export const NextImageWrapper = styled.div<ImageWrapperProps>(createBaseNextImageStyles())

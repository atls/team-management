import type { CSSObject }         from '@emotion/react'

import type { ImageWrapperProps } from './next-image.interfaces'

import styled                     from '@emotion/styled'

type StyleFunction = (props: { borderRadius?: number | string }) => CSSObject

export const createBaseNextImageStyles: StyleFunction = (
  props: { borderRadius?: number | string } = {}
): CSSObject => ({
  width: '100%',
  height: '100%',
  borderRadius: props.borderRadius,
  overflow: 'hidden',
})

export const NextImageWrapper = styled.div<ImageWrapperProps>(createBaseNextImageStyles)

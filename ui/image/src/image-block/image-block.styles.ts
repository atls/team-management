import type { CSSObject } from '@emotion/react'

type StyleFunction = (props: { borderRadius?: number | string }) => CSSObject

export const createBaseImageBlockStyles: StyleFunction = (
  props: { borderRadius?: number | string } = {}
): CSSObject => ({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: props.borderRadius,
})

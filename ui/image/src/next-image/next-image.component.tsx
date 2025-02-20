import { FC }               from 'react'
import Image                from 'next/image'
import React                from 'react'

import { NextImageProps }   from './next-image.interfaces.js'
import { NextImageWrapper } from './next-image.styles.js'

const NextImage: FC<NextImageProps> = ({ src, alt, width, height, borderRadius, ...props }) => (
  <NextImageWrapper borderRadius={borderRadius}>
    <Image src={src} alt={alt} width={width} height={height} {...props} />
  </NextImageWrapper>
)

export { NextImage }

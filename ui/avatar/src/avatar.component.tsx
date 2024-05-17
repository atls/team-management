import styled                from '@emotion/styled'
import { ScalableContent }   from '@atls-ui-parts/scalable-content'
import { createBaseStyles }  from '@atls-ui-parts/avatar'
import { createShapeStyles } from '@atls-ui-parts/avatar'

import React                 from 'react'
import { FC }                from 'react'

import { ImageBlock }        from '@ui/image'

import { AvatarProps }       from './avatar.interfaces'
import { Container }         from './container'

export const Avatar: FC<AvatarProps> = ({
  borderWidth,
  borderColor,
  size,
  borderRadius,
  padding,
  fontColor,
  fontSize,
  fontWeight,
  shape,
  fontFamily,
  contentType,
  src,
  icon,
  text,
  alt,
  notification,
}) => {
  // const Container = styled.div(
  //   createBaseStyles(),
  //   createShapeStyles({
  //     size,
  //     borderRadius,
  //     borderWidth,
  //     padding,
  //     fontSize,
  //     fontWeight,
  //     fontFamily,
  //   })
  // )
  return (
    <Container shape={shape} size={size} borderRadius={borderRadius}>
      {(contentType === 'image' && <ImageBlock src={src} alt={alt} />) ||
        (contentType === 'scalable-text' && <ScalableContent>{text}</ScalableContent>) ||
        (contentType === 'icon' && icon)}
    </Container>
  )
}

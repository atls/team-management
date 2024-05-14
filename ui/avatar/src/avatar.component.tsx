import styled                     from '@emotion/styled'
import { ScalableContent }        from '@atls-ui-parts/scalable-content'
import { TextTransform }          from '@atls-ui-parts/text-transform'
import { createBaseStyles }       from '@atls-ui-parts/avatar'
import { createShapeStyles }      from '@atls-ui-parts/avatar'
import { createAppearanceStyles } from '@atls-ui-parts/avatar'

import React                      from 'react'
import stringToColor              from 'string-to-color'
import { FC }                      from 'react'

import { ImageBlock }             from '@ui/image'

import { AvatarProps }             from './avatar.interfaces'

export const Avatar: FC<AvatarProps> = ({
  backgroundColor,
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
  textBasedBackground,
  contentType,
  src,
  icon,
  text,
  alt,
}) => {
  const StoryAvatar = styled.div(
    createBaseStyles(),
    createShapeStyles({
      size,
      borderRadius,
      borderWidth,
      padding,
      fontSize,
      fontWeight,
      fontFamily,
    }),
    createAppearanceStyles({
      backgroundColor,
      borderColor,
      fontColor,
    })
  )

  return (
    <StoryAvatar shape={shape} background={textBasedBackground ? stringToColor(text) : null}>
      {(contentType === 'image' && <ImageBlock src={src} alt={alt} />) ||
        (contentType === 'scalable-text' && <ScalableContent>{text}</ScalableContent>) ||
        (contentType === 'first-letter-text' && (
          <TextTransform firstLetter upperCase>
            {text}
          </TextTransform>
        )) ||
        (contentType === 'icon' && icon)}
    </StoryAvatar>
  )
}

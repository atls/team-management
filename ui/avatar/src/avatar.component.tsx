import React                from 'react'
import { FC }               from 'react'

import { Condition }        from '@ui/condition'
import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'

import { AvatarProps }      from './avatar.interfaces.js'
import { ContainerWrapper } from './container/index.js'
import { Notification }     from './notification/index.js'

export const Avatar: FC<AvatarProps> = ({
  borderWidth,
  size,
  borderRadius,
  padding,
  image,
  src,
  alt,
  notification = false,
}) => (
  <Box position='relative'>
    <Condition match={notification}>
      <Notification />
    </Condition>

    <ContainerWrapper
      size={size}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      padding={padding}
    >
      <Condition match={image}>
        <ImageBlock src={src} alt={alt} />
      </Condition>
    </ContainerWrapper>
  </Box>
)

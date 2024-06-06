import React                from 'react'
import { FC }               from 'react'

import { Condition }        from '@ui/condition'
import { NextImage }        from '@ui/image'
import { Box }              from '@ui/layout'

import { AvatarProps }      from './avatar.interfaces'
import { ContainerWrapper } from './container'
import { Notification }     from './notification'

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
        <NextImage src={src} alt={alt} />
      </Condition>
    </ContainerWrapper>
  </Box>
)

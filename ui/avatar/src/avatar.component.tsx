import { FC }               from 'react'
import React                from 'react'

import { Condition }        from '@ui/condition'
import { NextImage }        from '@ui/image'
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
        <NextImage src={src} alt={alt} width={40} height={40} />
      </Condition>
    </ContainerWrapper>
  </Box>
)

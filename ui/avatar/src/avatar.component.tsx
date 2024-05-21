import { Condition }        from '@atls-ui-parts/condition'

import React                from 'react'
import { FC }               from 'react'

import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'

import { AvatarProps }      from './avatar.interfaces'
import { ContainerWrapper } from './container'
import { Notification }     from './notification/notification.component'

export const Avatar: FC<AvatarProps> = ({
  borderWidth,
  size,
  borderRadius,
  padding,
  image,
  src,
  alt,
  notification,
}) => {
  return (
    <Box position='relative'>
      {notification && <Notification />}

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
}

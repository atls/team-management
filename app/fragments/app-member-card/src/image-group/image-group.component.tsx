import type { ImageGroupProps }      from './image-group.interfaces.js'

import styled                        from '@emotion/styled'

import React                         from 'react'
import { FC }                        from 'react'

import { Condition }                 from '@ui/condition'
import { ImageBlock }                from '@ui/image'
import { Box }                       from '@ui/layout'
import { Row }                       from '@ui/layout'

import { OrganizationsButton }       from './organizations-button/index.js'
import { TextGroup }                 from './text-group/index.js'
import { Timer }                     from './timer/index.js'
import { imageGroupContainerStyles } from './image-group.styles.js'
import { frontLayerStyles }          from './image-group.styles.js'

export const ImageGrop: FC<ImageGroupProps> = ({
  memberData,
  memberOrganizationsDataState,
  timerMilliseconds,
}) => {
  const { avatarUrl, name, bio, login: memberLogin } = memberData

  const ImageGroupContainer = styled(Box)(imageGroupContainerStyles)
  const FrontLayerContainer = styled(Box)(frontLayerStyles)

  return (
    <ImageGroupContainer>
      <ImageBlock src={avatarUrl} alt='user-avatar' />
      <FrontLayerContainer>
        <Condition match={Boolean(name)}>
          <TextGroup name={name as string} bio={bio as string} />
        </Condition>
        <Row justifyContent='space-between'>
          <OrganizationsButton
            memberLogin={memberLogin}
            memberOrganizationsDataState={memberOrganizationsDataState}
          />
          <Condition match={Boolean(timerMilliseconds)}>
            <Timer initialMilliseconds={timerMilliseconds as number} />
          </Condition>
        </Row>
      </FrontLayerContainer>
    </ImageGroupContainer>
  )
}

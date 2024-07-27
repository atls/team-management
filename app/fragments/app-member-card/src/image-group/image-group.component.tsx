import styled                        from '@emotion/styled'

import React                         from 'react'
import { FC }                        from 'react'

import { ImageBlock }                from '@ui/image'
import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Text }                      from '@ui/text'

import { OrganizationsButton }       from './organizations-button/index.js'
import { TextGroup }                 from './text-group/index.js'
import { Timer }                     from './timer/index.js'
import { imageGroupContainerStyles } from './image-group.styles.js'
import { frontLayerStyles }          from './image-group.styles.js'

// TODO interface
export const ImageGrop: FC<any> = ({ memberData, memberOrganizationsDataState }) => {
  const { avatarUrl, name, bio, login: memberLogin } = memberData

  // TODO change it to value
  const milliseconds = 17000

  const ImageGroupContainer = styled(Box)(imageGroupContainerStyles)
  const FrontLayerContainer = styled(Box)(frontLayerStyles)

  return (
    <ImageGroupContainer>
      <ImageBlock src={avatarUrl} alt='user-avatar' />
      <FrontLayerContainer>
        <TextGroup name={name} bio={bio} />
        <Row justifyContent='space-between'>
          <OrganizationsButton
            memberLogin={memberLogin}
            memberOrganizationsDataState={memberOrganizationsDataState}
          />
          <Timer initialMilliseconds={milliseconds} />
        </Row>
      </FrontLayerContainer>
    </ImageGroupContainer>
  )
}

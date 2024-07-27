'use client'

import styled                        from '@emotion/styled'
import { useTheme }                  from '@emotion/react'

import React                         from 'react'
import { FC }                        from 'react'
import { useState }                  from 'react'

import { OrganizationsModal }        from '@app/organizations-modal'
import { TimerIcon }                 from '@ui/icons'
import { OrganizationsIcon }         from '@ui/icons'
import { Box }                       from '@ui/layout'
import { Progress }                  from '@ui/progress'
import { ThemeType }                 from '@ui/theme'

import { ImageGrop }                 from './image-group/index.js'
import { MemberCardProps }           from './member-card.interface.js'
import { OnbordingConditionElement } from './onbording-condition-element/index.js'
import { getOnbordingConditionList } from './member-card.constants.js'
import { baseStyles }                from './member-card.styles.js'
import { shapeStyles }               from './member-card.styles.js'
import { appearanceStyles }          from './member-card.styles.js'

export const MemberCard: FC<MemberCardProps> = ({ memberData }) => {
  const { avatarUrl, bio, id, name, url } = memberData

  const theme = useTheme() as ThemeType

  // TODO calculate it:
  const proressPercent = 80
  const onbordingConditionList = getOnbordingConditionList({ theme })

  const MemberCardContainer = styled(Box)(baseStyles, shapeStyles, appearanceStyles)

  // TODO
  // разнеси по компонентам
  // стили тоже разнеси по файлам
  return (
    <MemberCardContainer>
      <ImageGrop memberData={memberData} />
      <Progress percentage={proressPercent} />
      <Box
        maxHeight={theme.spaces.largeSemiNormal}
        padding={theme.spaces.t8h16b16}
        flexWrap='wrap'
        justifyContent='space-between'
      >
        {onbordingConditionList.map((conditionData, conditionIndex) => (
          <OnbordingConditionElement
            conditionData={conditionData}
            checked={false}
            divider={!(conditionIndex === onbordingConditionList.length - 1)}
          />
        ))}
      </Box>
    </MemberCardContainer>
  )
}

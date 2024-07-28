'use client'

import type { MemberCardProps }            from './member-card.interfaces.js'
import type { OnbordingConditionDataType } from './onbording-condition-element/index.js'
import type { OrganizationMemberType }     from '@globals/data'

import styled                              from '@emotion/styled'
import { useTheme }                        from '@emotion/react'

import React                               from 'react'
import { FC }                              from 'react'
import { useState }                        from 'react'

import { Box }                             from '@ui/layout'
import { Progress }                        from '@ui/progress'
import { ThemeType }                       from '@ui/theme'

import { ImageGrop }                       from './image-group/index.js'
import { OnbordingConditionElement }       from './onbording-condition-element/index.js'
import { getProgressbarPercents }          from './helpers/index.js'
import { getMemberOrganizationsData }      from './helpers/index.js'
import { baseStyles }                      from './member-card.styles.js'
import { shapeStyles }                     from './member-card.styles.js'
import { appearanceStyles }                from './member-card.styles.js'

const MemberCardContainer = styled(Box)(baseStyles, shapeStyles, appearanceStyles)

export const MemberCard: FC<MemberCardProps> = ({
  timerMilliseconds,
  memberData,
  organizationsData,
}) => {
  const theme = useTheme() as ThemeType
  const { onbordingData } = memberData

  const memberOrganizationsInitData = getMemberOrganizationsData({ memberData, organizationsData })
  const memberOrganizationsDataState = useState(memberOrganizationsInitData)

  const progressPercent = getProgressbarPercents(onbordingData)

  return (
    <MemberCardContainer>
      <ImageGrop
        memberData={memberData as OrganizationMemberType}
        memberOrganizationsDataState={memberOrganizationsDataState}
        timerMilliseconds={timerMilliseconds}
      />
      <Progress percentage={progressPercent} />
      <Box
        maxHeight={theme.spaces.largeSemiNormal}
        padding={theme.spaces.t8h16b16}
        flexWrap='wrap'
        justifyContent='space-between'
      >
        {onbordingData.map((
          onbordingConditionData: OnbordingConditionDataType,
          conditionIndex: number
        ) => (
          <OnbordingConditionElement
            conditionData={onbordingConditionData}
            divider={!(conditionIndex === onbordingData.length - 1)}
          />
        ))}
      </Box>
    </MemberCardContainer>
  )
}

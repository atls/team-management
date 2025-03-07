'use client'

import type { OnbordingConditionDataType } from '@globals/data'
import type { OrganizationDataType }       from '@globals/data'
import type { ThemeType }                  from '@ui/theme'
import type { FC }                         from 'react'

import type { MemberCardProps }            from './member-card.interfaces.js'

import { useTheme }                        from '@emotion/react'
import styled                              from '@emotion/styled'
import { useState }                        from 'react'
import React                               from 'react'

import { OnbordingConditionElement }       from '@app/onbording-condition-element'
import { Box }                             from '@ui/layout'
import { Progress }                        from '@ui/progress'

import { ImageGroup }                      from './image-group/index.js'
import { getProgressbarPercents }          from './getters/index.js'
import { getMemberOrganizationsData }      from './getters/index.js'
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
  const [organizations, setOrganizations] = useState<Array<OrganizationDataType>>(
    memberOrganizationsInitData
  )

  const progressPercent = getProgressbarPercents(onbordingData)

  return (
    <MemberCardContainer>
      <ImageGroup
        memberData={memberData}
        memberOrganizationsDataState={[organizations, setOrganizations]}
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
            key={onbordingConditionData.conditionName}
            conditionData={onbordingConditionData}
            divider={!(conditionIndex === onbordingData.length - 1)}
          />
        ))}
      </Box>
    </MemberCardContainer>
  )
}

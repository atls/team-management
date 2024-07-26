'use client'

import { useTheme }                  from '@emotion/react'

import React                         from 'react'
import { FC }                        from 'react'
import { useState }                  from 'react'

import { OrganizationsModal }        from '@app/organizations-modal'
import { Button }                    from '@ui/button'
import { Card }                      from '@ui/card'
import { Checkbox }                  from '@ui/checkbox'
import { Divider }                   from '@ui/divider'
import { OrgWhiteIcon }              from '@ui/icons'
import { TimerIcon }                 from '@ui/icons'
import { ImageBlock }                from '@ui/image'
import { Box }                       from '@ui/layout'
import { GridAutoRows }              from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Progress }                  from '@ui/progress'
import { Scroll }                    from '@ui/scroll'
import { Tag }                       from '@ui/tag'
import { Text }                      from '@ui/text'
import { ThemeType }                 from '@ui/theme'

import { ICONS }                     from './member-card.constants.js'
import { CheckboxInt }               from './member-card.interface.js'
import { MemberCardProps }           from './member-card.interface.js'
import { OnbordingConditionElement } from './onbording-condition-element/index.js'
import { getOnbordingConditionList } from './member-card.constants.js'

export const MemberCard: FC<MemberCardProps> = ({ memberData }) => {
  const { avatarUrl, bio, id, name, url } = memberData

  console.log(memberData)

  const theme = useTheme() as ThemeType

  const onbordingConditionList = getOnbordingConditionList({ theme })

  const proressPercent = 80

  // TODO
  // разнеси по компонентам
  // стили тоже разнеси по файлам
  return (
    <Box
      overflow='hidden'
      flexDirection='column'
      backgroundColor={theme.colors.white}
      borderRadius={theme.radii.f24}
      boxShadow={theme.shadows.diesel}
    >
      <Box height={theme.spaces.largeDefault} position='relative' alignItems='flex-end'>
        <ImageBlock src={avatarUrl} alt='user-avatar' />
        <Box
          width='100%'
          position='absolute'
          padding={theme.spaces.large}
          flexDirection='column'
          gap={theme.spaces.micro}
        >
          <Column>
            <Text color={theme.colors.white} fontSize='medium.semiDefault'>
              {name}
            </Text>
            <Text color={theme.colors.GRAY_300} fontSize='normal.semiDefault'>
              {bio}
            </Text>
          </Column>
          <Row justifyContent='space-between'>
            <Box>organization</Box>
            <Box>timew</Box>
          </Row>
        </Box>
      </Box>
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
    </Box>
  )
}

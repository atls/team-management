import type { OnbordingConditionElementProps } from './onbording-condition-element.interfaces.js'

import { FC }                                  from 'react'
import React                                   from 'react'

import { Checkbox }                            from '@ui/checkbox'
import { Condition }                           from '@ui/condition'
import { Divider }                             from '@ui/divider'
import { Row }                                 from '@ui/layout'
import { Column }                              from '@ui/layout'
import { Box }                                 from '@ui/layout'
import { Text }                                from '@ui/text'
import { ThemeType }                           from '@ui/theme'
import { useTheme }                            from '@emotion/react'

import { getOnbordingConditionIcon }           from './hooks/index.js'

export const OnbordingConditionElement: FC<OnbordingConditionElementProps> = ({
  conditionData,
  divider,
}) => {
  const { conditionState, conditionName, conditionDisplayName, conditionIconName } = conditionData

  const theme = useTheme() as ThemeType

  const onbordingConditionIcon = getOnbordingConditionIcon({
    theme,
    conditionIconName,
    conditionName,
  })

  return (
    <Column width='calc(50% - 10px)'>
      <Row alignItems='center' gap={theme.spaces.tiny}>
        {onbordingConditionIcon}
        <Text width='100%' fontSize='small.default'>
          {conditionDisplayName}
        </Text>
        <Checkbox checked={conditionState} />
      </Row>
      <Condition match={divider}>
        <Box height={theme.spaces.miniReduced} width='100%' alignItems='center'>
          <Divider height={theme.spaces.s1} />
        </Box>
      </Condition>
    </Column>
  )
}

import { useTheme }  from '@emotion/react'

import React         from 'react'
import { FC }        from 'react'

import { Checkbox }  from '@ui/checkbox'
import { Condition } from '@ui/condition'
import { Divider }   from '@ui/divider'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Box }       from '@ui/layout'
import { Text }      from '@ui/text'
import { ThemeType } from '@ui/theme'

// TODO interfaces
export const OnbordingConditionElement: FC<any> = ({ conditionData, divider, checked }) => {
  const { conditionName, conditionDisplayName, conditionIcon } = conditionData

  const theme = useTheme() as ThemeType

  return (
    <Column width='calc(50% - 10px)'>
      <Row alignItems='center' gap={theme.spaces.tiny}>
        {conditionIcon}
        <Text width='100%' fontSize='small.default'>
          {conditionDisplayName}
        </Text>
        <Checkbox checked={checked} />
      </Row>
      <Condition match={divider}>
        <Box height={theme.spaces.miniReduced} width='100%' alignItems='center'>
          <Divider height={theme.spaces.s1} />
        </Box>
      </Condition>
    </Column>
  )
}

import type { ThemeType }  from '@ui/theme'
import type { FC }         from 'react'

import type { TimerProps } from './timer.interfaces.js'

import { useState }        from 'react'
import React               from 'react'

import { Button }          from '@ui/button'
import { TimerIcon }       from '@ui/icons'
import { Text }            from '@ui/text'
import { useTheme }        from '@emotion/react'

import { TimerHook }       from './timer.hook.js'
import { getConstants }    from './timer.constants.js'

export const Timer: FC<TimerProps> = ({ initialMilliseconds }) => {
  const [currentMilliseconds, setCurrentMilliseconds] = useState<number>(initialMilliseconds)
  const [formattedTime, setFormattedTime] = useState<string>('')

  const theme = useTheme() as ThemeType

  TimerHook({ currentMilliseconds, setCurrentMilliseconds, setFormattedTime })
  const { ICON_PROPS } = getConstants(theme)

  return (
    <Button hoverDisabled variant='whiteBackgroundButton' size='smallRoundedPadding'>
      <TimerIcon {...ICON_PROPS} color={theme.colors.GRAY_1600} />
      <Text fontSize='small.semiLarge'>{formattedTime}</Text>
    </Button>
  )
}

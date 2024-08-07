import type { TimerProps } from './timer.interfaces.js'

import { useTheme }        from '@emotion/react'

import React               from 'react'
import { FC }              from 'react'
import { useState }        from 'react'

import { Button }          from '@ui/button'
import { TimerIcon }       from '@ui/icons'
import { Text }            from '@ui/text'
import { ThemeType }       from '@ui/theme'

import { TimerHook }       from './timer.hook.js'
import { getConstants }    from './timer.constants.js'

export const Timer: FC<TimerProps> = ({ initialMilliseconds }) => {
  const [currentMilliseconds, setCurrentMilliseconds] = useState<number>(initialMilliseconds)
  const [formattedTime, setFormattedTime] = useState<string>('')

  const theme = useTheme() as ThemeType

  TimerHook({ currentMilliseconds, setCurrentMilliseconds, setFormattedTime })
  const { ICON_PROPS } = getConstants({ theme })

  return (
    <Button variant='whiteBackgroundButton' size='smallRoundedPadding' hoverDisabled>
      <TimerIcon {...ICON_PROPS} color={theme.colors.GRAY_1600} />
      <Text fontSize='small.semiLarge'>{formattedTime}</Text>
    </Button>
  )
}
